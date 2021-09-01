import { createContext, ReactNode, useState } from "react";

import AES256Modal from "../components/modals/aes_256/aes_256_modal";

interface ModalContextTypes {
  setModal: (value: string) => void;
  modal: ReactNode;
  show: boolean;
  setShow: (value: boolean) => void;
}

export const ModalContext = createContext<ModalContextTypes>({
  modal: null,
  show: false,
  setShow: function (value) {},
  setModal: function (value) {},
});

interface Props {
  children: ReactNode;
}

export function ModalContextProvider(props: Props) {
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState<ReactNode>();

  function setShowModalHandler(value: boolean) {
    setShowModal(value);
  }

  function setModalHandler(name: string) {
    switch (name) {
      case "AES 256":
        setModal(<AES256Modal title="Caesar cipher" />);
        break;
      default:
        return null;
    }
  }

  const context: ModalContextTypes = {
    modal: modal,
    setModal: setModalHandler,
    setShow: setShowModalHandler,
    show: showModal,
  };

  return (
    <ModalContext.Provider value={context}>
      {props.children}
    </ModalContext.Provider>
  );
}
