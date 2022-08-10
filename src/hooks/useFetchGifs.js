import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Recibo la categoria como un parametro comun y corriente, no es una prop
export const useFetchGifs = (category) => {
    {/* Tengo imagenes vacias hasta que le pego a la API */ }
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages(category);
        {/* Si dejo la dependencia vacia, significa que el hook se dispara la primera vez que se construye el componente*/ }
    }, []);

    return ({
        images,
        isLoading
    })
}
