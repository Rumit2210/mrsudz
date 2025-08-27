import React from "react";
import promoBanner from "../../assets/banners/promo-banner.png"; // adjust path if needed

export default function PromoBanner() {
  return (
    <section className="relative py-10 sm:py-12 lg:py-14 bg-gradient-to-b">
      <div className="mx-auto w-11/12 sm:w-5/6 lg:w-[1100px]">
        {/* Banner wrapper */}
        <div className="rounded-3xl p-2 sm:p-3 backdrop-blur-sm shadow-lg">
          <img
            src={promoBanner}
            alt="Summer Special – The Meg Unlimited now $37/mo"
            loading="lazy"
            className="block w-full h-auto rounded-2xl shadow-xl"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 82vw, 1100px"
          />
        </div>
      </div>
    </section>
  );
}
