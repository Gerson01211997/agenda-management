import axios from "axios";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  
  const useApi = axios.create({
    baseURL: config.public.apiBase,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    provide: {
      useApi,
    },
  };
});
