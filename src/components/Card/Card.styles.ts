import styled from "styled-components";
import { scrollbar } from "config/styles";

export const ProfileCardWrapper = styled.div`
  padding: 30px;
  height: 100%;
`;

export const StyledCard = styled.div`
  display: flex;
  max-width: 600px;
  width: 100%;
  height: 100%;
  align-items: center;
  margin: 0 auto;
  padding: 20px 50px 50px;
  flex-direction: column;
  gap: 25px;
  overflow-y: auto;
  overflow-x: hidden;

  ${scrollbar};

  background-color: ${({ theme }) => theme.colors.backgrounds.normal};
  box-shadow: ${({ theme }) => theme.elevation.D1};
`;
