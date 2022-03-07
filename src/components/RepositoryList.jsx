import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

export function RepositoryList() {
  const repository = {
    name: "unform",
    description: "Forms in React",
    link: "https://github.com/unform/unform",
  };

  //Criando um estado para armazenar a lista de repositórios
  const [repositories, setRepositories] = useState([]); //Como é uma lista que receberemos vamos deixar um array vazio de estado de inicio

  useEffect(() => {
    fetch("https://api.github.com/users/casa-henrique/repos").then((response) =>
      response.json().then((data) => setRepositories(data))
    );
    //com o fetch pegamos os dados dos respositorios, no primeiro then iremos transformar os dados em json para no segundo enviar para a variavel o array com todos os respositorios
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
