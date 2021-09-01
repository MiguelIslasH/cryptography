import axios from "axios";

export function encryptMessage(file: string) {
  return axios
    .post("http://localhost:5000/aes_256", {
      file,
    })
    .then((response) => {
      return response.data;
    });
}

export function decryptMessage(file: string) {
  return axios
    .get("http://localhost:5000/aes_256?file=" + file)
    .then((response) => response.data);
}
