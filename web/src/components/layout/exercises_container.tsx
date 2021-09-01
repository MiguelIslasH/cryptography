import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function ExercisesContainer(props: Props) {
  const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 2rem;
  `;

  return <Container>{props.children}</Container>;
}

export default ExercisesContainer;
