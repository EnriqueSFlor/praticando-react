import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Matheus",
      contador: 0,
    };

    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
    this.mudarNome = this.mudarNome.bind(this);
  }

  aumentar() {
    let state = this.state;
    state.contador += 1;

    this.setState(state);
  }

  diminuir() {
    let state = this.state;
    state.contador -= 1;
    this.setState(state);
  }

  mudarNome() {
    let state = this.state;
    state.nome = "Enrique";
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        <h3>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button> <hr />
          <p>{this.state.nome}</p>
          <button onClick={this.mudarNome}>Mudar nome</button>
        </h3>
      </div>
    );
  }
}
