import { Container } from "./styles";

export const Header = () => {
  const mainTitle = "Cadastre um aluno ou Clique nos botão abaixo";

  const addClassname = () => {
    const fomr1 = document.querySelector(".form1");
    const section = document.querySelector(".section2");
    const buttonSection = document.querySelector(".buttonShowAlunos");
    const buttonRegister = document.querySelector(".buttonRegister");
    const section3 = document.querySelector(".section3");
    const section4 = document.querySelector(".section4");

    fomr1.classList.toggle("hidden");
    section4.classList.toggle("esconder");
    section3.classList.toggle("esconder");
    section.classList.toggle("showSection");
    buttonSection.classList.toggle("esconder");
    buttonRegister.classList.toggle("esconder");
  };
  const deleteContent = () => {
    const fomr1 = document.querySelector(".form1");
    const section = document.querySelector(".section2");
    const buttonRegister = document.querySelector(".buttonRegister");
    const section4 = document.querySelector(".section4");
    const section3 = document.querySelector(".section3");

    fomr1.classList.toggle("hidden");
    section.classList.toggle("esconder");
    section3.classList.toggle("sectionthree");
    section4.classList.toggle("esconder");
    buttonRegister.classList.toggle("esconder");
  };

  const updateContent = () => {
    const fomr1 = document.querySelector(".form1");
    const section = document.querySelector(".section2");
    const buttonRegister = document.querySelector(".buttonRegister");
    const section3 = document.querySelector(".section3");
    const section4 = document.querySelector(".section4");

    section3.classList.toggle("esconder");
    section4.classList.toggle("sectionfour");
    section.classList.toggle("esconder");

    fomr1.classList.toggle("hidden");

    buttonRegister.classList.toggle("esconder");
  };

  return (
    <Container>
      <h1>{mainTitle}</h1>
      <div>
        <button onClick={deleteContent}>Deletar Aluno</button>
        <button onClick={addClassname}>Buscar Outro Aluno</button>
        <button onClick={updateContent}>Atualzar dados do Aluno</button>
      </div>
    </Container>
  );
};
