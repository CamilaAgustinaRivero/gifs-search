import { useState } from 'react';
import { AddCategory, GifGrid } from '../components/GifGrid';
import { PageTitle } from '../components/common/PageTitle';

export const GifsSearch = () => {
    const [categories, setCategories] = useState(['the big bang theory', 'silicon valley', 'the office']);

    const onNewCategory = (category) => {
        if (!categories.includes(category)) {
            setCategories([category, ...categories]);
        }
    }

    return (
        <>
            {/* Título */}
            <PageTitle title="GIFs Search" />

            {/* Agregado de categorias */}
            <AddCategory
                onNewCategory={onNewCategory}
            />

            {/* Listado de Gifs */}
            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))}
        </>
    )
}
