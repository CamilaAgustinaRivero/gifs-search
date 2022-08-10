import { useState } from 'react';
import { InputText } from '../common/InputText';

// Componente padre - Contiene la lógica
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    {/* Actualiza el value del input */ }
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    {/* Se ejecuta al presionar Enter */ }
    const onSubmit = (event) => {
        {/* Evito refrescar el componente al presionar enter */ }
        event.preventDefault();
        const category = inputValue.trim();
        {/* Agrega a la lista de categories la category */ }
        category.length > 1 ? onNewCategory(category.toLowerCase()) : null;
        setInputValue('');
    }
    
    return (
        // <form onSubmit={(event) => onSubmit(event)}>
        <form onSubmit={onSubmit}>
            {/* Componente hijo - Componente presentacional */}
            <InputText
                placeholder='Buscar GIF...'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
