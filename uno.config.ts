// uno.config.ts
import { defineConfig } from "unocss";
import presetWind from "@unocss/preset-wind";
import presetWebFonts from "@unocss/preset-web-fonts";

function convertToRem(value: string) {
  return `${(+value / 10).toLocaleString("en-PH", {
    maximumFractionDigits: 3,
  })}rem`;
}

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Kumbh Sans:400,700",
      },
    }),
  ],
  preflights: [
    {
      getCSS: ({ theme }) =>
        `:root { font-size: 62.5%; font-family: 'Kumbh Sans', sans-serif }`,
    },
  ],
  theme: {
    colors: {
      pelorous: "#19A1AE",
      bunting: "#2E3349",
      "storm-grey": "#6B7082",
      solitude: "#E8E9EC",
    },
    breakpoints: {
      desktop: "1024px",
    },
  },
  shortcuts: {
    "container--stats":
      "mt-24 flex justify-between py-24 px-46 border-t border-solitude desktop:mt-28 desktop:px-50",
    stat: "flex flex-col gap-y-9",
    stat__number: "font-700 text-size-18 leading-22.32 c-bunting",
    stat__category: "leading-12.4 tracking-1.5 c-storm-grey",
  },
  rules: [
    [
      "bg-pattern",
      {
        "background-image":
          "url(/bg-pattern-top.svg), url(/bg-pattern-bottom.svg)",
        // "background-position": "top 215% left 115%, bottom 195% right 125%",
      },
    ],
    [
      "shadow-card",
      { "box-shadow": "0 5rem 10rem -2rem rgba(8, 70, 94, 0.5)" },
    ],
    [
      /^max-w-([\d.]+)$/,
      ([, value]) => ({
        "max-width": convertToRem(value),
      }),
    ],
    [
      /^pl-([\d.]+)$/,
      ([, value]) => ({
        "padding-left": convertToRem(value),
      }),
    ],
    [
      /^pr-([\d.]+)$/,
      ([, value]) => ({
        "padding-right": convertToRem(value),
      }),
    ],
    [
      /^py-([\d.]+)$/,
      ([, value]) => ({
        "padding-block": convertToRem(value),
      }),
    ],
    [
      /^px-([\d.]+)$/,
      ([, value]) => ({
        "padding-inline": convertToRem(value),
      }),
    ],
    [
      /^rounded-([\d.]+)$/,
      ([, value]) => ({
        "border-radius": convertToRem(value),
      }),
    ],
    [
      /^h-([\d.]+)$/,
      ([, value]) => ({
        height: convertToRem(value),
      }),
    ],
    [
      /^w-([\d.]+)$/,
      ([, value]) => ({
        width: convertToRem(value),
      }),
    ],
    [
      /^mt-([\d.]+)$/,
      ([, value]) => ({
        "margin-top": convertToRem(value),
      }),
    ],
    [
      /^text-size-([\d.]+)$/,
      ([, value]) => ({
        "font-size": convertToRem(value),
      }),
    ],
    [
      /^leading-([\d.]+)$/,
      ([, value]) => ({
        "line-height": convertToRem(value),
      }),
    ],
    [
      /^gap-y-([\d.]+)$/,
      ([, value]) => ({
        "grid-row-gap": convertToRem(value),
        "row-gap": convertToRem(value),
      }),
    ],
    [
      /^tracking-([\d.]+)$/,
      ([, value]) => ({
        "letter-spacing": convertToRem(value),
      }),
    ],
    [
      /^bg-x-([\d.-]+)\/([\d.-]+)$/,
      ([, firstValue, secondValue]) => ({
        "background-position-x": `${firstValue}%, ${secondValue}%`,
      }),
    ],
    [
      /^bg-y-([\d.-]+)\/([\d.-]+)$/,
      ([, firstValue, secondValue]) => ({
        "background-position-y": `${firstValue}%, ${secondValue}%`,
      }),
    ],
  ],
});
