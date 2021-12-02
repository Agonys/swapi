import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string;
      gray: string;
      black: string;
      dimmed: string;
      accent: string;

      backgrounds: {
        light: string;
        normal: string;
        dark: string;
      };

      borders: {
        dark: string;
      }
    };
    transitions: {
      ease: string;
      easeFast: string;
      easeInOut: string;
    };
    elevation: {
      D1: string;
    };
  }
}
