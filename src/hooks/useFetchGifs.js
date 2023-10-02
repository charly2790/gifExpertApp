import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  //Si retorna un JSX es un functional component.   
  //UN HOOK NO ES MÁS QUE UNA FUNCION QUE RETORNA ALGO.
  //En este caso retorna un objeto.

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

//Versión con async
//   const getImages = async() =>{
//     const newImages = await getGifs( category );
//     setImages(newImages);
//     setisLoading(false);
//   }

//Versión con sintaxis clásica de promesas
  useEffect(() => {
    //Getgifs retorna una promesa
    getGifs(category).then(images => {
      setImages(images);
      setIsLoading(false);
    })
   }, []);

  return {
    images,
    isLoading,
  }
}
