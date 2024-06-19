import React from "react";
import Age from "./age";

const Welcome = ({name, age}) => {
    return (
        <div>
        <p>Welcome, <strong>{name}</strong>!</p>
  
        {/* Condición 1: Renderizar solo si la edad es mayor que 18 */}
        {age > 18 && <Age age={age} />}
        
        {/* Condición 2: Renderizar solo si la edad está presente */}
        {age !== undefined && <Age age={age} />}
        
        {/* Condición 3: Renderizar solo si la edad está entre 18 y 65 */}
        {age > 18 && age < 65 && <Age age={age} />}
        
        {/* Condición 4: Renderizar solo si la edad está entre 18 y 65 y el nombre es "John" */}
        {age > 18 && age < 65 && name === "John" && <Age age={age} />}
        
        {/* Mensaje alternativo cuando ninguna condición se cumple */}
        {!(age > 18 && age < 65 && name === "John") && <p>No age information to display.</p>}
      </div>
    );
  };
    


export default Welcome;