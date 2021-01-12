import { toast } from "react-toastify";

function businessRules(e) {
  const nomeEmailField = document.getElementById("nome-email");
  const senhaField = document.getElementById("senha");

  if (nomeEmailField.value === "" || senhaField.value === "") {
    e.preventDefault();
    return toast.error(
      "Os campos de Nome/Email e/ou Senha não podem ser vazio."
    );
  }

  if (senhaField.value.length < 8) {
    e.preventDefault();
    return toast.error("A senha precisa ter no mínimo 8 caracteres.");
  }
}

export default businessRules;
