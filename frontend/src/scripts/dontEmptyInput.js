import { toast } from "react-toastify";

function dontEmptyInput(e) {
  const nomeEmailField = document.getElementById("nome-email");
  const senhaField = document.getElementById("senha");

  if (nomeEmailField.value === "" || senhaField.value === "") {
    e.preventDefault();
    return toast.error(
      "Os campos de Nome/Email e/ou Senha não podem ser vazio."
    );
  } else {
    // code
  }
}

export default dontEmptyInput;
