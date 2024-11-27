import { css } from "styled-components";

export const media = {
  mobile: (...args: [TemplateStringsArray, (props: any) => string]) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
};
