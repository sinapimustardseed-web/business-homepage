"use client";

import { useEffect, useRef, useState } from "react";
import { useContent } from "@/context/LanguageContext";
import styles from "./contact/contact.module.css";

// Source-of-truth location (Korean) — used for the "Open in NAVER Map" link.
const KOREAN_ADDRESS = "경기도 화성시 동탄구 동탄중심상가1길 8, 602호";
const NAVER_SEARCH_URL = `https://map.naver.com/p/search/${encodeURIComponent(KOREAN_ADDRESS)}`;

/**
 * Office coordinate, resolved once with the NAVER Geocoding API for
 * "경기도 화성시 동탄구 동탄중심상가1길 8" (roadAddress: …동탄중심상가1길 8 워터밸리,
 * jibun: 반송동 107-2). Hard-coded so normal visits never call Geocoding — the
 * production page only needs the Dynamic Map. These are not secrets.
 */
const OFFICE_LAT = 37.2001;
const OFFICE_LNG = 127.0720434;

const SCRIPT_ID = "naver-maps-sdk";

interface NaverLatLng {
  lat(): number;
}
interface NaverMapInstance {
  destroy?: () => void;
}
interface NaverMarkerInstance {
  setMap: (map: NaverMapInstance | null) => void;
}
interface NaverMapsGlobal {
  maps: {
    Map: new (el: HTMLElement, options: Record<string, unknown>) => NaverMapInstance;
    LatLng: new (lat: number, lng: number) => NaverLatLng;
    Marker: new (options: Record<string, unknown>) => NaverMarkerInstance;
  };
}

declare global {
  interface Window {
    naver?: NaverMapsGlobal;
    navermap_authfailure?: () => void;
  }
}

// Module-level so a remount (e.g. language switch) reuses the in-flight/loaded SDK
// instead of injecting the script again.
let sdkPromise: Promise<NaverMapsGlobal> | null = null;

function loadNaverMaps(keyId: string): Promise<NaverMapsGlobal> {
  if (typeof window === "undefined") return Promise.reject(new Error("ssr"));
  if (window.naver?.maps) return Promise.resolve(window.naver);
  if (sdkPromise) return sdkPromise;

  sdkPromise = new Promise<NaverMapsGlobal>((resolve, reject) => {
    const settle = () => (window.naver?.maps ? resolve(window.naver) : reject(new Error("sdk-unavailable")));
    const fail = () => reject(new Error("sdk-error"));

    // NAVER calls this global when the key is rejected for this origin.
    window.navermap_authfailure = fail;

    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", settle);
      existing.addEventListener("error", fail);
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    // Dynamic Map only — no geocoder submodule, since the coordinate is already known.
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${encodeURIComponent(keyId)}`;
    script.addEventListener("load", settle);
    script.addEventListener("error", fail);
    document.head.appendChild(script);
  }).catch((err) => {
    // Allow a later mount to retry rather than caching the failure forever.
    sdkPromise = null;
    throw err;
  });

  return sdkPromise;
}

/**
 * Contact-page map. With NEXT_PUBLIC_NAVER_MAP_NCP_KEY_ID configured the square shows
 * an interactive NAVER Dynamic Map centred on the office with a marker; without it (or
 * if the SDK fails to load or authenticate) the professional address fallback panel is
 * kept. The external "Open in NAVER Map" link is unchanged in both states.
 */
export default function ContactMap() {
  const { contact } = useContent().site;
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  const keyId = process.env.NEXT_PUBLIC_NAVER_MAP_NCP_KEY_ID;

  useEffect(() => {
    const el = containerRef.current;
    if (!keyId || !el) return;

    let cancelled = false;
    let map: NaverMapInstance | null = null;
    let marker: NaverMarkerInstance | null = null;

    loadNaverMaps(keyId)
      .then((naver) => {
        if (cancelled || !containerRef.current) return;
        const center = new naver.maps.LatLng(OFFICE_LAT, OFFICE_LNG);
        map = new naver.maps.Map(containerRef.current, {
          center,
          zoom: 16,
        });
        marker = new naver.maps.Marker({ position: center, map });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      marker?.setMap(null);
      map?.destroy?.();
      marker = null;
      map = null;
    };
  }, [keyId]);

  const showMap = Boolean(keyId) && !failed;

  return (
    <div className={styles.mapWrap}>
      {showMap ? (
        <div ref={containerRef} className={styles.mapCanvas} role="group" aria-label={contact.mapLabel} />
      ) : (
        <div className={styles.mapFallback} role="group" aria-label={contact.mapLabel}>
          <div className={styles.infoAddress}>{contact.address}</div>
          <p className={styles.mapFallbackNote}>{contact.mapUnavailable}</p>
        </div>
      )}
      <a className={styles.mapLink} href={NAVER_SEARCH_URL} target="_blank" rel="noopener noreferrer">
        {contact.openInNaver} <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
