import { useState } from "react";

// export const AddCategory = ( {setCategories} ) => {
export const AddCategory = ( {onAddCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        //Dentro del objeto 'event', el valor actual de input se encuentra dentro de target
        //en la propiedad 'value'. Esta la opción de usar el path absoluto p/acceder a ella
        //o desestructurar el argumento event y extraer directamente target.
        // console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit=( event )=>{
        event.preventDefault();
        
        //Condición p/evitar que pueda agregar vacios
        if(inputValue.trim().length <= 1) return;
        
        //Observar que la función soporta un callback, el cual retorna las
        //categorias y nos permite adjuntarle la nueva categoria
        // setCategories(categories => [...categories,inputValue]);
        onAddCategory(inputValue);

        //Con la siguiente instrucción, una vez insertado el nuevo valor, limpio la caja de texto.
        setInputValue('');
    }

    return (
        //No es necesario crear un fragmento, debido a que el form es el único elemento que estoy retornando.
        //Se requiere un fragment cuando retornas más de un elemento.
        //****IMPORTANTE - La idea es cuando presionamos 'Enter' que se dispare alguna acción (tal como buscar gifs)
        //Dejando el formulario sin asignar propiedad alguna, lo que sucede es que al presionar enter se ejecuta un full refresh
        //de la página, haciendo que perdamos nuestro estado. ¿Como evitamos esto?        
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                //En la linea siguiente, cuando se da la situación que recibis un parámetro y lo unico que tenes que hacer
                //es pasarselo a otros funcion se puede simplificar la sintaxis de la siguiente forma
                // onChange={(event) => onInputChange(event) } />
                onChange={onInputChange} />
        </form>

    )
}
