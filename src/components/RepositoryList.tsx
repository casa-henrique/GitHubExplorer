import { useState, useEffect } from "react";

import "../styles/repositories.scss";

import { RepositoryItem } from "./RepositoryItem";

interface Repository {
  name: string;
  description?: string;
  html_url: string;
} //Não iremos colocar o props após pois não é uma propriedade do repositoryList e sim um estado então manteremos o nome mais simples possivel

export function RepositoryList() {
  //Criando um estado para armazenar a lista de repositórios
  const [repositories, setRepositories] = useState<Repository[]>([]); //Como é uma lista que receberemos vamos deixar um array vazio de estado de inicio // para definirmos a nossa tipagem como uma lista de repositorios

  useEffect(() => {
    fetch("https://api.github.com/users/casa-henrique/repos").then((response) =>
      response.json().then((data) => setRepositories(data))
    );
    //com o fetch pegamos os dados dos respositorios, no primeiro then iremos transformar os dados em json para no segundo enviar para a variavel o array com todos os respositorios
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Minha lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem repository={repository} key={repository.name} /> //Key é utilizado para a distinção entre cada elemento que será renderizado, uma informação unica, algo que não se repita entre eles
        ))}
      </ul>
    </section>
  );
}
