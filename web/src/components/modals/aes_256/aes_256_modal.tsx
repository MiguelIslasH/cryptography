import { useContext } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ModalContext } from "../../../context/modal_context";
import CaesarForm from "./local_components/aes_256_form";
interface Props {
  title: string;
}

function AES256Modal(props: Props) {
  const context = useContext(ModalContext);

  function onHide() {
    context.setShow(false);
  }

  return (
    <Modal show={context.show} size={"xl"}>
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CaesarForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AES256Modal;
