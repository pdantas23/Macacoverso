import { salvarAdocao, salvarVisita, salvarDoacao } from './firebase.js';

export class Adocao {
  constructor(formClass) {
    this.forms = document.querySelectorAll(`.${formClass}`);
  }

  init() {
    this.forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const dados = {
          nome: form.nome.value,
          email: form.email.value,
          macaco: form.macaco.value,
        };

        salvarAdocao(dados)
          .then(() => {
            alert("Adoção registrada com sucesso!");
            form.reset();
          })
          .catch((erro) => {
            console.error("Erro ao salvar:", erro);
            alert("Erro ao registrar adoção.");
          });
      });
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