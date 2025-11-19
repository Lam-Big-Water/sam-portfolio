const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-preset-env": { // 添加这个插件来处理 CSS 兼容性
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-media-queries': true
      }
    },
    autoprefixer: {
      overrideBrowserslist: [
        "> 0.5%",
        "last 2 versions", 
        "Firefox ESR",
        "not dead",
        "Safari >= 12",
        "iOS >= 12",
      ],
    },
  },
};

export default config;