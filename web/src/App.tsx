import { useContext } from "react";

import ExercisesList from "./components/body/exercises_list";
import AES256Modal from "./components/modals/aes_256/aes_256_modal";
import MainBar from "./components/layout/main_bar";
import { ModalContext, ModalContextProvider } from "./context/modal_context";

function App() {
  return (
    <div className="App">
      <ModalContextProvider>
        <MainBar />
        <ExercisesList />
      </ModalContextProvider>
    </div>
  );
}

export default App;
