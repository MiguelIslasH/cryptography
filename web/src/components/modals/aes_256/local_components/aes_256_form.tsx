import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { encryptMessage, decryptMessage } from "../functions";

interface Response {
  error?: string;
  encrypted?: { content: string };
  decrypted?: string;
}

function AES256Form() {
  const fileToEncryptInputRef = useRef<HTMLInputElement>(null);
  const fileToDecryptInputRef = useRef<HTMLInputElement>(null);
  const [fileErrorEncrypt, setFileErrorEncrypt] = useState("");
  const [fileErrorDecrypt, setFileErrorDecrypt] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState("");

  function encrypt() {
    encryptMessage(fileToEncryptInputRef.current!.value).then(
      (response: Response) => {
        if (response.error) {
          setFileErrorEncrypt(response.error);
        } else {
          setFileErrorEncrypt("");
          setEncryptedMessage(response.encrypted!.content);
        }
      }
    );
  }

  function decrypt() {
    decryptMessage(fileToDecryptInputRef.current!.value).then(
      (response: Response) => {
        if (response.error) {
          setFileErrorDecrypt(response.error);
        } else {
          setFileErrorDecrypt("");
          setDecryptedMessage(response.decrypted!);
        }
      }
    );
  }

  return (
    <Form>
      <Row>
        <Col className="col-md-7">
          <Form.Group className="mb-3">
            <Form.Label>File name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Select a file to encrypt"
              ref={fileToEncryptInputRef}
            />
            <Form.Text style={{ color: "tomato" }}>
              {fileErrorEncrypt}
            </Form.Text>
          </Form.Group>
        </Col>
        <Col className="d-flex align-items-md-center mt-3 ">
          <Button variant="success" onClick={encrypt}>
            Encrypt
          </Button>
        </Col>
      </Row>
      <Row>
        <Form.Group className="mb-3">
          <Form.Label>Message encrypted:</Form.Label>
          <Form.Control
            type="text"
            disabled
            placeholder="Here will be your encrypted message"
            value={encryptedMessage}
          />
        </Form.Group>
      </Row>

      <Row>
        <Col className="col-md-7">
          <Form.Group className="mb-3">
            <Form.Label>File name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Select a file to decrypt"
              ref={fileToDecryptInputRef}
            />
            <Form.Text style={{ color: "tomato" }}>
              {fileErrorDecrypt}
            </Form.Text>
          </Form.Group>
        </Col>
        <Col className="d-flex align-items-md-center mt-3 ">
          <Button variant="success" onClick={decrypt}>
            Decrypt
          </Button>
        </Col>
      </Row>
      <Row>
        <Form.Group className="mb-3">
          <Form.Label>Message decrypted:</Form.Label>
          <Form.Control
            type="text"
            disabled
            placeholder="Here will be your decrypted message"
            value={decryptedMessage}
          />
        </Form.Group>
      </Row>
    </Form>
  );
}

export default AES256Form;
