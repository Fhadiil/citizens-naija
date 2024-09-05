// src/styled.d.ts
import 'styled-components';

// Define your custom theme interface
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      white: string;
    };
  }
}
