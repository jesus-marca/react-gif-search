import React, { useEffect, useState } from "react";
import getGifts from "../../helpers/getGIfts";
import styles from "./GiftGrid.module.scss";

import { useFetch } from "../../hooks/useFetch";

import { GifItem } from "../GifItem";
import Loading from "../Loading/Loading";

export const GiftGrid = ({ category, deleteCategory }) => {
  // const getImages = async (value) => {
  //   const newImages = await getGifts(value);
  //   setImages(newImages);
  // };
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   // getGifts(category).then((res) => setData(res));
  //   getImages(category);
  // }, [category]);
  const { images, isLoading } = useFetch(category);
  console.log({ images, isLoading });

  return (
    <>
      <h3>{category}</h3>

      {/* {isLoading && <Loading />} */}

      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <button  onClick={(e) => deleteCategory(category)}>cerrar</button>
          <div className={styles.cardGrid}>
            {images.map((image) => (
              <GifItem key={image.id} {...image} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

// export default GiftGrid;
