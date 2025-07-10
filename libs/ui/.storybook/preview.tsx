import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/styles/index.css';
import './docs-theme.css';

import { ThemeProvider } from '../src/components/theme-provider';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
      parentSelector: 'html',
    }),
    (Story) => (
      <ThemeProvider defaultTheme="dark">
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },

    docs: {
      source: {
        state: 'open',
      },
    },
    backgrounds: {
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  // globalTypes: {
  //   theme: {
  //     description: "Global theme for components",
  //     defaultValue: "dark",
  //     toolbar: {
  //       title: "Theme",
  //       icon: "paintbrush",
  //       items: [
  //         { value: "light", title: "Light", left: "☀️" },
  //         { value: "dark", title: "Dark", left: "🌙" },
  //       ],
  //       dynamicTitle: true,
  //     },
  //   },
  // },
};

export default preview;
