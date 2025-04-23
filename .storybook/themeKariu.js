import { create } from "@storybook/theming";
import logo from "./favicon.svg";

export default create({
  base: 'light',
  title: "React-kariu",
  brandTitle: "react-kariu",
  brandImage: logo,
  brandTarget: "_self",

  colorPrimary: "#3C1B43",
  colorSecondary: "#501537",
  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "white",
  appBorderRadius: 4,

  // Text colors
  textColor: "black",
  textInverseColor: "#3C1B43",

  // Toolbar default and active colors
  barTextColor: "#3C1B43",
  barSelectedColor: "black",
  barBg: "#922D50",

  // Form colors
  inputBg: "#922D50",
  inputBorder: "#3C1B43",
  inputTextColor: "#3C1B43",
  inputBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
});
