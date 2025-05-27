import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKvSfOk0luDH0qUJblKy1MQCfJOO-69Yc",
  authDomain: "macacoverso-1191f.firebaseapp.com",
  projectId: "macacoverso-1191f",
  storageBucket: "macacoverso-1191f.firebasestorage.app",
  messagingSenderId: "347642243993",
  appId: "1:347642243993:web:86e5697e969a20010f4108",
  measurementId: "G-6XP94PF7C6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function salvarAdocao(dados) {
  try {
    console.log("Tentando salvar no Firestore...", dados);
    await addDoc(collection(db, "adocoes"), {
      ...dados,
      data: new Date().toISOString()
    });
  } catch (e) {
    alert("Erro ao registrar adoção: " + e.message);
    throw e;
  }
}

export async function salvarVisita(dados) {
  try {
    await addDoc(collection(db, "visitas"), {
      ...dados,
      dataRegistro: new Date().toISOString() 
    });
  } catch (e) {
    alert("Erro ao agendar visita: " + e.message);
    throw e;
  }
}

export async function salvarDoacao(dados) {
  try {
    await addDoc(collection(db, "doacoes"), {
      ...dados,
      data: new Date().toISOString()
    });
    alert("Doação registrada com sucesso! Muito obrigado!");
  } catch (e) {
    alert("Erro ao registrar doação: " + e.message);
    throw e;
  }
}
