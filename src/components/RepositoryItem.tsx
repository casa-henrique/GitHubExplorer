interface RepositoryItemProps {
  repository: {
    name: string;
    description?: string;
    html_url: string;
  };
}
// Quando queremos definir a tipagem de um componente pelas boas práticas devemos repetir o nome do componente seguido de props
// Apenas devemos tipar as informações que iremos utilizar, os demais itens que recebemos e não vamos utilizar não definiremos sua tipagem

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository?.description ?? "Descrição"}</p>
      <a href={props.repository?.html_url}>Acessar Repositório</a>
    </li>
  );
}
