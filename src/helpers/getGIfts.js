const getGifts = async (category) => {
  const apiKey = "VuyzlavfmQa6YRP565hMkjBlbG8qNV3l";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
  //   console.log(gifs);
};
export default getGifts;
