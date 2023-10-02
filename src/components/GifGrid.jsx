import { useEffect, useState } from "react";
// import { GifItem } from "./GifItem";

import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";




export const GifGrid = ({ category }) => {

  const { images,isLoading } = useFetchGifs( category );
  
  /*Se reemplaza por custom hook ~ Clase custom hooks ~ useFetchGifs
  const [images, setImages] = useState([]);

  useEffect(() => {
    //Getgifs retorna una promesa
    getGifs(category).then(images => {
      setImages(images);
    })


   }, []);*/

  return (
    <>
      <h3>{category}</h3>    
      { isLoading && <h2>Cargando...</h2>} {/* También es posible retornar un null, tener en cuenta que el null no se renderiza en react */}
      <div className="card-grid">
      {
        images.map((image) => {
          // return <li key={id}>{title}</li>
          return <GifItem 
            key= {image.id}
            //Si pasas la props de esta forma los atributos internos llegan undefined
            // image = { image }
            //Una opción es enviar propiedad x propiedad:
            //title=image.title
            //url=image.url
            //La versión anterior se complica si tener muchas propiedades
            //Esparcir las properties 
            //útil para tenes muchas propiedades
            {...image}
            />                  
        })
      }
      </div>

    </>
  )
} 
