import axios from "axios";
import useObterToken from "../hooks/useObterToken";
import { history } from "../App";
import { ICategaria } from "../interfaces/ICategaria";
import { ILivro } from "../interfaces/ILivro";

const http = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/json",
    Content: "application/json",
  },
});

http.interceptors.request.use(
  function (config) {
    const token = useObterToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token()}`;
    }
    return config;
  },
  function (error) {
    console.log("Erro no interceptors do axios");
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log("Observando o erro de response do interceptors do axios");
    if (error.response?.status === 401) {
      history.push("/");
    }
    return Promise.reject(error);
  }
);

export default http;

export const obterCategoriaPorSlug = async (
  slug: string
): Promise<ICategaria> => {
  const resposta = await http.get<ICategaria[]>("/categorias", {
    params: {
      slug,
    },
  });

  return resposta.data[0];
};

export const obterPublic = async (path: string): Promise<ILivro[]> => {
  const resposta = await http.get<ILivro[]>(`/public/${path}`);
  return resposta.data;
};
