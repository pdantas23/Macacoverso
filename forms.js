import { salvarAdocao, salvarVisita, salvarDoacao } from './firebase.js';

export class Adocao {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  init() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const dados = {
        nome: this.form.nome.value,
        email: this.form.email.value,
        macaco: this.form.macaco.value,
      };
      salvarAdocao(dados);
      this.form.reset();
    });
  }
}

export class Visita {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  init() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const dados = {
        nome: this.form.nome.value,
        email: this.form.email.value,
        dataVisita: this.form.dataVisita.value,
      };
      salvarVisita(dados);
      this.form.reset();
    });
  }
}

export class Doacao {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  init() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const dados = {
        nome: this.form.nome.value,
        email: this.form.email.value,
        valor: parseFloat(this.form.valor.value),
      };
      salvarDoacao(dados);
      this.form.reset();
    });
  }
}