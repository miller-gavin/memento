import * as React from "react";
import styled from "styled-components";
import { LinksList } from "./links-list";
import { MementoMoriCounter } from "./memento-mori-counter";

const StyledComponentSection = styled.section`
  display: flex;
  justify-items: space-between;
  flex-direction: column;
  position: absolute;
  top: 20px;
  padding: 05px;
  margin: 20px;
`;

export function Islands() {
  const [collection, setCollection] = React.useState<string[]>();
  const [currentImageUrl, setCurrentImageUrl] = React.useState<
    string | undefined
  >("");

  return (
    <>
      <StyledComponentSection>
        <MementoMoriCounter birthday="09-07-1988" />
        <LinksList />
      </StyledComponentSection>
    </>
  );
}
