// i18next-scanner.config.cjs
module.exports = {
  input: ["src/**/*.{js,jsx,ts,tsx}"],
  output: "./src/locales",
  options: {
    removeUnusedKeys: true,
    func: {
      list: ["t"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    lngs: ["en", "tr"],
    defaultLng: "tr",
    defaultNs: "translation",
    resource: {
      loadPath: "./src/locales/{{lng}}/{{ns}}.json",
      savePath: "./src/locales/{{lng}}/{{ns}}.json",
      jsonIndent: 2,
    },
  },
};
