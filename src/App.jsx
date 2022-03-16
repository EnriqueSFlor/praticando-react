import { Children } from "react";

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social facebook={props.facebook} />
      <hr />
    </div>
  );
};

const Sobre = (props) => {
  return (
    <div>
      <h2>{props.nome}</h2>
      <h3>{props.cargo}</h3>
      <h3>{props.idade}</h3>
    </div>
  );
};

const Social = (props) => {
  return (
    <div>
      <a href={props.facebook}>Facebook </a>
      <a>Linkdin </a>
      <a>Youtube </a>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe
        nome="Enrique"
        cargo="Programador"
        idade="28"
        facebook="https://google.com/"
      />
      <Equipe
        nome="Regina"
        cargo="Aposentada"
        idade="63"
        facebook="https://google.com/"
      />
      <Equipe
        nome="Eduardo"
        cargo="Motoboy"
        idade="34"
        facebook="https://google.com/"
      />
    </div>
  );
}
