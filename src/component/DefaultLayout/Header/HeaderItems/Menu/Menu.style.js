import { css } from "@emotion/react";

export const MenuContainer = css`
  display: flex;
  gap: 70px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 10px;
`;

export const MenuButton = css`
  background: transparent;
  border: none;

  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
