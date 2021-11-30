import styled from "styled-components";

import { IStyledCheckbox } from "./Checkbox.types";

export const StyledCheckbox = styled.div<IStyledCheckbox>`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ isChecked, theme }) => (isChecked ? theme.colors.accent : theme.colors.white)};
  border: 1px solid
    ${({ isChecked, theme }) => (isChecked ? theme.colors.accent : theme.colors.white)};
  background-color: ${({ isChecked, theme }) => (isChecked ? theme.colors.accent : "transparent")};

  transition: background-color ${({ theme }) => theme.transitions.easeFast},
    border ${({ theme }) => theme.transitions.easeFast};

  &:after {
    content: "";
    position: absolute;
    height: 8px;
    width: 4px;
    transform: rotate(45deg);
    top: 1px;
    left: 4px;

    opacity: ${({ isChecked }) => (isChecked ? "1" : "0")};
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    border-right: 2px solid ${({ theme }) => theme.colors.black};
    transition: opacity ${({ theme }) => theme.transitions.easeFast};
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
`;

export const Label = styled.div`
  font-size: 1.2rem;
  margin-left: 10px;
  user-select: none;
`;
