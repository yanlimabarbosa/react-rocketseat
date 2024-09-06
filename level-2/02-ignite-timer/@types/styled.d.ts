import "styled-components"
import { defaultTheme } from '../src/styles/themes/default';

type ThemeType = typeof defaultTheme

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType { }
}