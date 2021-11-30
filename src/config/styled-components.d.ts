import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      dimmed: string;
      white: string;
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
  }
}
