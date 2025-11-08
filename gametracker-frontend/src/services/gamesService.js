import api from "./api";

export const getGames = async () => {
  try {
    const response = await api.get("/juegos");
    return response.data;
  } catch (error) {
    console.error("Error al obtener juegos:", error);
    return [];
  }
};
