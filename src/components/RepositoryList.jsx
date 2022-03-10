import { useState, useEffect } from "react";

import "../styles/repositories.scss";

import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
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
        {repositories.map((repository) => (
          <RepositoryItem repository={repository} key={repository.name} /> //Key é utilizado para a distinção entre cada elemento que será renderizado, uma informação unica, algo que não se repita entre eles
        ))}
      </ul>
    </section>
  );
}
