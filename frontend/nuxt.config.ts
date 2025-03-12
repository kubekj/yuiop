// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // imports: {
  //   autoImport: true,
  // },
  nitro: {
    preset: "deno",
  },
  modules: ["@nuxt/ui"],
  css: ["~/assets/css/main.css"],
});
