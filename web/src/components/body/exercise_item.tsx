import { useContext } from "react";

import styled from "styled-components";
import { ModalContext } from "../../context/modal_context";

interface Props {
  title: string;
  subtitle: string;
  description: string;
}

function ExcerciseItem(props: Props) {
  const context = useContext(ModalContext);

  const Card = styled.div`
    background-color: #dddddd;
    border-radius: 10px;
    width: 30rem;
    margin: 2rem 2rem;
  `;

  const CardHeader = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #292b2c;
    padding: 0.5rem 2rem;
  `;

  const CardTitle = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
  `;

  const Subtitle = styled.p`
    color: #fff;
    font-weight: lighter;
  `;

  const CardBody = styled.div`
    padding: 0.5rem 2rem 0rem 2rem;
  `;

  const Description = styled.p`
    font-size: 0.8rem;
    font-weight: 600;
  `;

  const CardFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1rem 2rem;
  `;

  const ShowButton = styled.button`
    border-radius: 10px;
    background-color: #5cb85c;
    color: #fff;
    border: none;
  `;

  function setModal() {
    context.setModal(props.title);
    context.setShow(true);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <Subtitle>{props.subtitle}</Subtitle>
      </CardHeader>
      <CardBody>
        <Description>{props.description}</Description>
      </CardBody>
      <CardFooter>
        <ShowButton onClick={setModal}>Let's try it</ShowButton>
      </CardFooter>
    </Card>
  );
}

export default ExcerciseItem;
