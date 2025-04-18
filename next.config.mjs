// next.config.mjs

import autoCert from "anchor-pki/auto-cert/integrations/next";

// Si vous utilisez .ts au lieu de .mjs, vous pouvez utiliser le commentaire suivant pour supprimer l'erreur
// @ts-expect-error - No type definitions available for anchor-pki
const withAutoCert = autoCert({
  enabledEnv: "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nkdlkqhjkoqqqpcwotsq.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY, // 👈 Pour l'API Gemini
  },
  // output: "export",
};

export default withAutoCert(nextConfig);
