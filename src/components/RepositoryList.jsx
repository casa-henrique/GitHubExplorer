export function RepositoryList() {
  const repoName = "Unform";

  return (
    <section className="repositiry-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>{repoName}</strong>
          <p>Forms in React</p>
          <a href="">Acessar Repositório</a>
        </li>
      </ul>
    </section>
  );
}
