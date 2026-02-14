import axios from "axios";

const api = axios.create({
  baseURL: "https://backenddothiagojs12.onrender.com", //endereco do meu backend
});

export const cadastrarUsuario = async (
  url: string,
  dados: object,
  setDados: Function
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const login = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};
