import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "smooth" }) {
  const { pathname, hash } = useLocation();

  // Prevent SPA scroll restoration from keeping old scroll positions
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Run after route has rendered
    requestAnimationFrame(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior, block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, left: 0, behavior });
    });
  }, [pathname, hash, behavior]);

  return null;
}
