import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

// Componente padre
export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        // Componente hijo - Componente presentacional
                        <GifItem
                            key={image.id}
                            // Con esto puedo desestructurar las props en el componente
                            {...image}
                        />
                    ))
                }
            </div>
            <hr />
        </>
    )
}
