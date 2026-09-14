"use client";

import Script from "next/script";

export default function ModelViewerLoader() {
  return (
    <Script
      src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
      strategy="afterInteractive"
      type="module"
    />
  );
}
