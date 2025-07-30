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
    return config;
  },
};
export default config;
