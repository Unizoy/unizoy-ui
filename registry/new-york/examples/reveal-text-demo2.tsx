"use client";
import { RevealText } from "@/registry/new-york/ui/reveal-text";
import Unizoy from "@/public/RevealText/Unizoy.png";

export default function () {
  const variants = [
    "black",
    "gradient0",
    "gradient1",
    "gradient2",
    "gradient3",
    "gradient4",
    "gradient5",
    "gradient6",
    "gradient7",
    "gradient8",
  ];

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="w-11/12 p-1 md:p-5 lg:p-10 space-y-8 text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-500 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
          {variants.map((variant) => (
            <div key={variant} className="flex flex-col items-center gap-1">
              <RevealText
                variant={variant as any}
                className="font-bold"
                image={Unizoy.src}
                hoverImageClass="p-0 border-neutral-400"
                href="https://unizoy.com/"
              >
                Unizoy
              </RevealText>
              <span className="text-sm text-neutral-400">{variant}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
