export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=CVCmpYd7L05AEn3N4XoXi6YvBjNXVeq5&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  return gifs;
}