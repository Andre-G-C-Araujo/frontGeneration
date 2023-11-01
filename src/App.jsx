import { Container } from "./styles";

import { useState } from "react";

import { api } from "./services/api";

import { Header } from "./components/Header";
import { Input } from "./components/Input";

export const App = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [notaPrimeiroSemestre, setNotaPrimeiroSemestre] = useState("");
  const [notaSegundoSemestre, setNotaSegundoSemestre] = useState("");
  const [professor, setProfessor] = useState("");
  const [numeroDaSala, setNumeroDaSala] = useState("");
  const [id, setId] = useState("");

  const AlunoShow = async () => {
    const aluno = await api
      .get(`/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err));
    if (!id) {
      return alert("Insira um id");
    }

    if (!aluno.id) {
      setId("");
      setNome("");
      setIdade("");
      setNotaPrimeiroSemestre("");
      setNotaSegundoSemestre("");
      setProfessor("");
      setNumeroDaSala("");
      return alert("Insira um id valido");
    }

    setId([aluno.id]);
    setNome([aluno.nome]);
    setIdade([aluno.idade]);
    setNotaPrimeiroSemestre([aluno.notaPrimeiroSemestre]);
    setNotaSegundoSemestre([aluno.notaSegundoSemestre]);
    setProfessor([aluno.professor]);
    setNumeroDaSala([aluno.numeroDaSala]);
  };

  const handleInfoAluno = () => {
    if (
      !nome ||
      !idade ||
      !notaPrimeiroSemestre ||
      !notaSegundoSemestre ||
      !professor ||
      !numeroDaSala
    ) {
      return alert("Preencha todos os campos");
    }
    console.log(typeof notaPrimeiroSemestre);

    api
      .post("/", {
        nome,
        idade,
        notaPrimeiroSemestre,
        notaSegundoSemestre,
        professor,
        numeroDaSala,
      })
      .then(() => {
        alert("Usuario cadastrado com sucesso");
      })
      .catch((error) =>
        alert(`O erro foi esse ${error}, nao foi cadastrado!!`)
      );
  };

  const showUserOnDelete = () => {
    AlunoShow();

    if (!id) {
      return;
    }
    const buttonRegister = document.querySelector(".listOfDelete");

    buttonRegister.classList.toggle("esconder");
  };

  const handleDelete = async () => {
    await api
      .delete(`/${id}`)
      .then(alert("Aluno deletado com Sucesso"))
      .catch((err) => console.log(err));
  };

  const handleUpdate = async () => {
    const alunoEdit = await api
      .get(`/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(` cai no erro ${err}`));

    const teste = await api
      .put(`/${id}`, {
        nome,
        idade,
        notaPrimeiroSemestre,
        notaSegundoSemestre,
        professor,
        numeroDaSala,
      })
      .then(alert("Usuario editado com Sucesso."))
      .catch((err) => alert(`aqui2 ${err}`));

    console.log(teste);
  };

  return (
    <Container>
      <Header />
      <form action="/" className="form1">
        <Input
          title="Digite o nome"
          placeholder="nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          title="Digite a idade"
          placeholder="idade"
          onChange={(e) => setIdade(e.target.value)}
        />
        <Input
          title="Digite a nota 1sem."
          placeholder="nota do Primeiro Semestre"
          onChange={(e) => setNotaPrimeiroSemestre(e.target.value)}
        />
        <Input
          title="Digite a nota 2sem."
          placeholder="nota do Segundo Semestre"
          onChange={(e) => setNotaSegundoSemestre(e.target.value)}
        />
        <Input
          title="Nome professor"
          placeholder="Nome do professor"
          onChange={(e) => setProfessor(e.target.value)}
        />
        <Input
          title="Num. da Sala"
          placeholder="Numero da Sala"
          onChange={(e) => setNumeroDaSala(e.target.value)}
        />

        <section className="section2">
          <p>Pesquise aluno por ID</p>

          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            placeholder="Digite um id"
            className="inputSearch"
          />

          <ul>
            <li>ID: {id}</li>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Nota do primeiro Semestre: {notaPrimeiroSemestre}</li>
            <li>Nota do segundo Semestre: {notaSegundoSemestre}</li>
            <li> Nome do Professor: {professor}</li>
            <li>Numero da Sala: {numeroDaSala}</li>
          </ul>
        </section>
        <section className="section3">
          <p>Escolha o perfil para deletar</p>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            placeholder="Digite um id"
            className="inputDelete"
          />
          <button type="button" onClick={showUserOnDelete}>
            Mostrar Aluno
          </button>
          <ul className="listOfDelete esconder">
            <li>ID: {id}</li>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Nota do primeiro Semestre: {notaPrimeiroSemestre}</li>
            <li>Nota do segundo Semestre: {notaSegundoSemestre}</li>
            <li> Nome do Professor: {professor}</li>
            <li>Numero da Sala: {numeroDaSala}</li>
            <button type="button" onClick={handleDelete}>
              Deletar
            </button>
          </ul>
        </section>
        <section className="section4 ">
          <p>Escolha o perfil para editar</p>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            placeholder="Digite um id"
          />
          <button type="button" onClick={showUserOnDelete}>
            Mostrar Aluno
          </button>
          <ul className="listOfDelete">
            <li>ID: {id}</li>
            <li>Nomezera: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Nota do primeiro Semestre: {notaPrimeiroSemestre}</li>
            <li>Nota do segundo Semestre: {notaSegundoSemestre}</li>
            <li> Nome do Professor: {professor}</li>
            <li>Numero da Sala: {numeroDaSala}</li>
            <Input
              title="Digite o nome"
              placeholder="nome"
              onChange={(e) => setNome(e.target.value)}
            />
            <Input
              title="Digite a idade"
              placeholder="idade"
              onChange={(e) => setIdade(e.target.value)}
            />
            <Input
              title="Digite a nota 1sem."
              placeholder="nota do Primeiro Semestre"
              onChange={(e) => setNotaPrimeiroSemestre(e.target.value)}
            />
            <Input
              title="Digite a nota 2sem."
              placeholder="nota do Segundo Semestre"
              onChange={(e) => setNotaSegundoSemestre(e.target.value)}
            />
            <Input
              title="Nome professor"
              placeholder="Nome do professor"
              onChange={(e) => setProfessor(e.target.value)}
            />
            <Input
              title="Num. da Sala"
              placeholder="Numero da Sala"
              onChange={(e) => setNumeroDaSala(e.target.value)}
            />

            <button type="button" onClick={handleUpdate}>
              Editar
            </button>
          </ul>
        </section>
        <button
          type="button"
          onClick={handleInfoAluno}
          className="buttonRegister"
        >
          Cadastrar
        </button>
        <button
          type="button"
          onClick={AlunoShow}
          className="buttonShowAlunos esconder"
        >
          Mostrar dados
        </button>
      </form>
    </Container>
  );
};
