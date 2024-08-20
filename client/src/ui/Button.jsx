import React from 'react';

const Button = ({ name, onClick, className, style }) => {
  return (
    <button
      name={name}
      onClick={onClick}
      className={`btn btn-primary rounded-button ${className}`}
      style={style}
    >
      {name}
    </button>
  );
}

export default Button;
