import { useContext } from "react";

import ExercisesContainer from "../layout/exercises_container";
import ExcerciseItem from "./exercise_item";
import { ModalContext } from "../../context/modal_context";

function ExercisesList() {
  const context = useContext(ModalContext);
  return (
    <>
      {context.modal}
      <ExercisesContainer>
        <ExcerciseItem
          title={"AES 256"}
          subtitle={
            "Crypt and decrypt a message using built-in party libraries "
          }
          description={
            "AES is short for Advanced Encryption Standard. It's a symmetric block cipher used by the American government to encrypt sensitive data. Everything is based on blocks, specifically 128-bit blocks which are divided into a four-by-four array with 16 bytes."
          }
        />
      </ExercisesContainer>
    </>
  );
}

export default ExercisesList;
