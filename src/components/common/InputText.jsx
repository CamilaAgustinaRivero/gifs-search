// Componente hijo - Componente presentacional
export const InputText = ({placeholder, value, onChange}) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}
