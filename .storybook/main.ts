import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx", 
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    '@storybook/addon-docs'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
  viteFinal: async (config) => {
    // Exposer les variables d'environnement pour Storybook
    if (config.define) {
      config.define['process.env.STORYBOOK_GA_ID'] = JSON.stringify(process.env.STORYBOOK_GA_ID || 'G-XXXXXXXXXX');
    } else {
      config.define = {
        'process.env.STORYBOOK_GA_ID': JSON.stringify(process.env.STORYBOOK_GA_ID || 'G-XXXXXXXXXX'),
      };
    }
    return config;
  },
};
export default config;
