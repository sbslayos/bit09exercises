import React, { useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const Work01 = () => {
    const [contador, setContador] = useState(0);
    const [color, setColor] = useState("null")

    useEffect(() => {
        if (contador > 0) setColor('success');
            else if (contador < 0 ) setColor('warning');
            else setColor('secondary');
    }, [contador]);
    


  return (
    <section>
    <div>Ejercicio 1 - CONTADOR</div>
    <h2>
    Count

    <Badge bg={color}>{contador}</Badge>
    </h2>
    <Button onClick={() => setContador(contador + 1)}>Aumentar</Button>
    <Button onClick={() => setContador(0)} >Reset</Button>
    <Button onClick={() => setContador(contador -1)}>Restar</Button>
    
    </section>
    );
};

export default Work01