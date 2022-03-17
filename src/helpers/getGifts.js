export const getGifts = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=fF4J8k9rPHtba3YREvrBFjexX1ZeA32r`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifts = data.map( img =>{
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      }
    })
    
    return gifts;
  }