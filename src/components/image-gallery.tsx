"use client";

import { motion } from "framer-motion";
import { LazyImage } from "@/components/lazy-image";
import { SectionHeading } from "@/components/SectionHeading";

const softEase = [0.22, 1, 0.36, 1] as const;

const fadeIn = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.55, ease: softEase },
};

const galleryImages = [
  { id: "g1", width: 1080, height: 1920, isPortrait: true, seed: "design1" },
  { id: "g2", width: 1920, height: 1080, isPortrait: false, seed: "ui2" },
  { id: "g3", width: 1080, height: 1920, isPortrait: true, seed: "ux3" },
  { id: "g4", width: 1920, height: 1080, isPortrait: false, seed: "app4" },
  { id: "g5", width: 1920, height: 1080, isPortrait: false, seed: "figma5" },
  { id: "g6", width: 1080, height: 1920, isPortrait: true, seed: "vibe6" },
  { id: "g7", width: 1920, height: 1080, isPortrait: false, seed: "ai7" },
  { id: "g8", width: 1080, height: 1920, isPortrait: true, seed: "prod8" },
];

export function ImageGallery() {
  const columns = [
    [galleryImages[0], galleryImages[1]],
    [galleryImages[2], galleryImages[3]],
    [galleryImages[4], galleryImages[5]],
    [galleryImages[6], galleryImages[7]],
  ];

  return (
    <section id="gallery" className="relative py-20 sm:py-32 overflow-hidden bg-[var(--paper)]">
      {/* Background Poster Outline Title */}
      <div
        aria-hidden="true"
        className="poster-outline display-font pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-7xl font-black uppercase leading-none sm:text-9xl md:text-[11rem] opacity-40 select-none"
      >
        GALLERY
      </div>

      <div className="section-shell relative z-10">
        <motion.div {...fadeIn}>
          <SectionHeading eyebrow="Visual Showcase" title="Featured Gallery" />
        </motion.div>

        <div className="mt-10 sm:mt-14 mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {columns.map((colImages, colIndex) => (
            <div className="grid gap-4 md:gap-6" key={`col-${colIndex}`}>
              {colImages.map((img, imgIndex) => {
                const ratio = img.isPortrait ? 9 / 16 : 16 / 9;

                return (
                  <motion.div
                    key={img.id}
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: (colIndex * 2 + imgIndex) * 0.05 }}
                    className="group relative overflow-hidden rounded-2xl border-2 border-[#e52424]/30 bg-[#fff8f8] shadow-[0_10px_30px_rgba(229,36,36,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e52424] hover:shadow-[0_15px_35px_rgba(229,36,36,0.15)]"
                  >
                    <LazyImage
                      alt={`Gallery item ${img.id}`}
                      containerClassName="rounded-2xl"
                      fallback={`https://placehold.co/${img.width}x${img.height}/ffeded/e52424?text=Taushik+UX`}
                      inView={true}
                      ratio={ratio}
                      src={`https://picsum.photos/seed/${img.seed}/${img.width}/${img.height}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#e52424]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4 pointer-events-none">
                      <span className="text-xs font-black uppercase text-white tracking-wider">
                        PROJECT SHOT 0{colIndex * 2 + imgIndex + 1}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
