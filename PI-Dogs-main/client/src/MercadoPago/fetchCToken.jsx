let sitioUrl = "http://localhost:3001"

export const fetchCToken = async (
  endpoint,
  data,
  method = "GET",
  limit = 10
) => {
  const url = `${sitioUrl}/${endpoint}`;
  const token = localStorage.getItem("token") || "";
  if (method === "GET") {
    const respuesta = await fetch(url, {
      headers: {
        "x-token": token,
        limit: limit,
      },
    });
    console.log(respuesta);
    return await respuesta.json();
  } else {
    const respuesta = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
        limit: limit,
      },
      body: JSON.stringify(data),
    });
    return await respuesta.json();
  }
};
