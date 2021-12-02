import { toast } from "react-hot-toast";
import styled from "styled-components";

import Button from "../components/Button/Button";

const SpanContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

export const displayToast = (message: string): void => {
  toast(({ id }) => (
    <SpanContainer>
      {message}
      <Button text="Close" onClick={() => toast.dismiss(id)} />
    </SpanContainer>
  ));
};
