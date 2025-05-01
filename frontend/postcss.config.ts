import type { PluginCreator } from 'postcss';

const config: { plugins: Record<string, PluginCreator<any> | {}> } = {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the correct package
    autoprefixer: {},
  },
};

export default config;