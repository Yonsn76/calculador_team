// Componente Button.jsx

export const Button = ({ value, onClick }) => {
    return (
      <button onClick={() => onClick(value)}>
        {value}
      </button>
    );
  };
  