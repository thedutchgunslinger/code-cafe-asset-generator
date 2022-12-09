import {createGlobalStyle} from 'styled-components';

export const primaryColor = '#0be881';
export const secondaryColor = '#743dfb';
export const textColor = '#ffffff';

createGlobalStyle`
  @font-face {
  font-family: "poppins";
  src:
    url("fonts/poppins/Poppins-Regular.ttf") format("truetype");
}
`;

export const fontFamily = 'poppins';