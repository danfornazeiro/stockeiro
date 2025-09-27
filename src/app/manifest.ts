import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stockeiro",
    short_name: "Stockeiro",
    description: "Seu app de controle de estoque",
    start_url: "/",
    display: "standalone",
    background_color: "#143057",
    theme_color: "#143057",
    icons: [
      {
        src: "/icon512_rounded.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon512_rounded.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
