import { useState, useEffect } from "react";

const useFetchImage = (query) => {
  const [imageUrl, setImageUrl] = useState("");
  const unsplashKey = import.meta.env.VITE_UNSPLASH_API_KEY;

  useEffect(() => {
    if (query && unsplashKey) {
      fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${unsplashKey}`)
        .then(response => response.json())
        .then(data => setImageUrl(data.urls?.regular || ""))
        .catch(error => console.error("Error fetching image:", error));
    }
  }, [query, unsplashKey]);

  return imageUrl;
};

export default useFetchImage;