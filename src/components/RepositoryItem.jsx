export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "Default"}</strong>
      <p>{props.repository?.description ?? "Descrição"}</p>
      <a href={props.repository?.link}>Acessar Repositório</a>
    </li>
  );
}
