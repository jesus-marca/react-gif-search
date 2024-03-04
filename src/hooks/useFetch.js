import { useEffect, useState } from "react";
import getGifts from "../helpers/getGIfts";
export const useFetch = (category) => {
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async (value) => {
    const newImages = await getGifts(value);
    setImages(newImages);
    setIsLoading(false)
  };
  const [images, setImages] = useState([]);
  useEffect(() => {
    // getGifts(category).then((res) => setData(res));
    getImages(category);
  }, [category]);
  return {
    images,
    isLoading
  };
};
