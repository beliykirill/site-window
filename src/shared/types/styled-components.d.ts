import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    surfaceMain: string;
    surfaceSecondary: string;
    surfaceBrand: string;
    surfacePrimary: string;

    textMain: string;
    textSecondary: string;
    textPrimary: string;
    textLink: string;
  }
}
