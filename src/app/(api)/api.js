import React from "react";

const api = async (topic) => {
  console.log(topic);

  const url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${topic}&freshness=Day&textFormat=Raw&safeSearch=Off`;
  const options = {
    method: 'GET',
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': '05a1d027bcmsh4696fdb923bcd99p1b1584jsnc0eb4d43fc88',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
  return result;
} catch (error) {
	console.error(error);
}
  
 /* The code snippet is making an HTTP request to the News API to fetch data related to a specific
 topic. */
  // const apiResponse = await fetch(
  //   `https://newsapi.org/v2/everything?q=${topic}&apiKey=9995ea8419af40e68ff68e7ad7ac96b5`
  // );
  // const data = await apiResponse.json();

  // console.log(data);
};

export default api;
