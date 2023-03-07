// @ts-ignore
import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  // Add your theme here
};

export const withThemeProvider = (Story: React.ComponentType) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);
