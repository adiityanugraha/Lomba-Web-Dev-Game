"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Route fade-in, pure CSS (see .page-enter in globals.css). Key remounts per route. */
export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
