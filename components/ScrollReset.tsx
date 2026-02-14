"use client";

import { useEffect } from "react";

export default function ScrollReset() {
  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Always scroll to top on refresh
    window.scrollTo(0, 0);
  }, []);

  return null;
}
