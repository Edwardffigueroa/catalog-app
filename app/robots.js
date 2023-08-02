export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://catalog-app-one.vercel.app/sitemap.xml",
  };
}
