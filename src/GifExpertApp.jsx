//Luego de la versión 17 de react no es necesario importar React
// import React from 'react'


import { useState } from "react";
//Optimización con uso de archivos de barril--------------------------------------
//--Antes
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from './components/GifGrid'
//--Después
import { AddCategory,GifGrid } from "./components";
//--------------------------------------------------------------------------------

export const GifExpertApp = ()=>{
  
  let categoriesList = ['Naruto'];

  const [ categories, setCategories ] = useState(categoriesList);
  
  const onAddCategoryVcharly=()=>{
    //1) Leer el valor del <input>
    //2) Pasar valor leido al setCategories
    let newCategory = document.getElementById('new').value;                
    //3) Llamar al setCategories
    //Evitar usar el push porque se utiliza para mutar un objeto.
    //En React se intentar evitar mutar el estado, para esto es mejor
    //utilizar el spread operator.
    
    
    setCategories([newCategory,...categories]);
  }

  const onAddCategory=(newCategory)=>{

    //Se recomienda que esta validación se haga ACÁ. ¿y porque acá y no
    //en el componente? Para respetar el principio de responsabilidad única.
    //El componente AddCategory el único proposito que tiene es el de emitir un nuevo
    //categoría.
    if(categories.includes(newCategory)) return;

    setCategories([newCategory,...categories]);
  }


  return (
    <>
        <h1>GifExpertApp</h1>
        {/* 1era versión, se utiliza el método setCategories */}
        {/* <AddCategory setCategories= { setCategories }*/}
        {/* 2da versión se utiliza el método onAddCategory. ¿Porque? porque se espera que el componente hijo
        emita un valor, que es tomado por el componente padre. */}
        <AddCategory onAddCategory= { onAddCategory }/>
        {/* <input type="text" name="" id="new" /> */}
        {/* <button onClick={ onAddCategoryVCharly }>Agregar</button> */}
        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        {/* <ol>
          {categories.map( category => {
            return <li key={ category }>{ category }</li>;          
          })}          
        </ol> */}
        {categories.map((category)=>{
          return <GifGrid 
            key = { category }
            category = { category }
            />
        })}
    </>
  )
}
