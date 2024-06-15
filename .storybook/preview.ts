import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'twitter',
      values: [
        {
          name: 'light',
          value: 'white'
        },
        {
          name: 'dark blue',
          value: '#3b5998',
        },
        {
          name: 'dark purple',
          value: '#793690'
        },
        {name: 'dark', value: '#243848'}
      ],
    },
  },
};

export default preview;
