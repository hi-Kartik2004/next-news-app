import React from "react";

const api = async (params) => {
  console.log(params);
  const apiResponse = await fetch(
    `https://newsapi.org/v2/everything?q=${params}&apiKey=9995ea8419af40e68ff68e7ad7ac96b5`
  );
  const data = await apiResponse.json();

  console.log(data);

  return data;
};

export default api;
