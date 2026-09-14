import type * as React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          poster?: string;
          loading?: "auto" | "lazy" | "eager";
          reveal?: "auto" | "manual" | "interaction";
          "camera-controls"?: boolean;
          "auto-rotate"?: boolean;
          "auto-rotate-delay"?: number;
          "interaction-prompt"?: "auto" | "none" | "when-focused";
          "environment-image"?: string;
          "shadow-intensity"?: number | string;
          exposure?: number | string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
