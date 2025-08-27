import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Replace with your images
import img1 from "/src/assets/gallery/1.jpg";
import img2 from "/src/assets/gallery/2.jpg";
import img3 from "/src/assets/gallery/3.jpg";
import img4 from "/src/assets/gallery/4.jpg";
import img5 from "/src/assets/gallery/5.jpg";

const IMAGES = [img1, img2, img3, img4, img5].map((src, i) => ({
  src,
  alt: `Wash photo ${i + 1}`,
}));

export default function GalleryCarousel() {
  const scrollerRef = useRef(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    moved: false,
  });

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  // drag-to-scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onDown = (e) => {
      dragRef.current.active = true;
      dragRef.current.moved = false;
      el.classList.add("cursor-grabbing");
      dragRef.current.startX = e.clientX;
      dragRef.current.scrollLeft = el.scrollLeft;
    };
    const onMove = (e) => {
      if (!dragRef.current.active) return;
      const walk = (e.clientX - dragRef.current.startX) * 1.15;
      if (Math.abs(walk) > 5) dragRef.current.moved = true;
      el.scrollLeft = dragRef.current.scrollLeft - walk;
      e.preventDefault();
    };
    const onUp = () => {
      dragRef.current.active = false;
      el.classList.remove("cursor-grabbing");
    };

    el.addEventListener("pointerdown", onDown, { passive: true });
    el.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  const openModal = (idx) => {
    if (dragRef.current.moved) return; // prevent click after drag
    setActive(idx);
    setOpen(true);
  };

  return (
    <section className="relative container-responsive py-10">
      {/* Title row */}
      <div className="flex items-end justify-between mb-4">
        <h2 className="font-cartoon text-teal-200 text-3xl sm:text-4xl">
          Wash Gallery
        </h2>
        <span className="text-cyan-100/80 text-sm">{IMAGES.length} photos</span>
      </div>

      {/* Drag rail — NO outer border/background/edge fades */}
      <div
        ref={scrollerRef}
        className="
          flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-1 py-2
          snap-x snap-mandatory select-none cursor-grab
          [scrollbar-width:none] [-ms-overflow-style:'none'] [&::-webkit-scrollbar]:hidden
        "
      >
        {IMAGES.map((img, i) => (
          <button
            key={img.src}
            onClick={() => openModal(i)}
            className="
              snap-start shrink-0 w-[260px] sm:w-[320px] md:w-[360px]
              aspect-[16/9] rounded-xl overflow-hidden relative group
              bg-slate-900/40 border border-white/10
            "
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover"
              draggable={false}
            />
            {/* subtle hover scale + one-time sweep */}
            <motion.span
              className="absolute inset-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            />
            <motion.span
              className="pointer-events-none absolute inset-0"
              initial={{ x: "-120%" }}
              whileHover={{ x: "160%" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              style={{
                background:
                  "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.35) 50%, transparent 65%)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Modal viewer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm grid place-items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-slate-900/80 border border-white/15"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", stiffness: 210, damping: 20 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/15 hover:bg-white/25 transition"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              <img
                src={IMAGES[active].src}
                alt={IMAGES[active].alt}
                className="w-full h-[70vh] object-contain bg-slate-950/50"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
