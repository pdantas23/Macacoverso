import { salvarAdocao, salvarVisita, salvarDoacao } from './firebase.js';

export class Adocao {
  constructor(formClass) {
    this.forms = document.querySelectorAll('.' + formClass);
  }

  init() {
    this.forms.forEach(form => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dados = {
          nome: form.nome.value.trim(),
          email: form.email.value.trim(),
          macaco: form.macaco.value,
        };

        try {
          await salvarAdocao(dados);
          alert("Adoção registrada com sucesso!");
          form.reset();
        } catch (error) {
          alert('Erro ao registrar adoção: ' + error.message);
        }
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
    this.form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const dados = {
        nome: this.form.nome.value.trim(),
        email: this.form.email.value.trim(),
        dataVisita: this.form.dataVisita.value,
      };
      try {
        await salvarVisita(dados);
        this.form.reset();
      } catch (error) {
        alert("Erro ao agendar visita: " + error.message);
      }
    });
  }
}

export class Doacao {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  init() {
    if (!this.form) return;
    this.form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const dados = {
        nome: this.form.nome.value.trim(),
        email: this.form.email.value.trim(),
        valor: parseFloat(this.form.valor.value),
      };
      try {
        await salvarDoacao(dados);
        this.form.reset();
      } catch (error) {
        alert("Erro ao registrar doação: " + error.message);
      }
    });
  }
}
