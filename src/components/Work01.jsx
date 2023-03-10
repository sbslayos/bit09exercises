import React, { useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const Work01 = () => {
    const [contador, setContador] = useState(0);
    const [color, setColor] = useState("null")

    useEffect(() => {
        if (contador > 0) setColor("success");
            else if (contador < 0 ) setColor("danger");
            else setColor("secondary");
    }, [contador]);
    


  return (
    <section className='text-center'>

    <h3>
        Count <Badge bg={color} variant={color} >{contador}</Badge>
    </h3>
    <Button variant="danger" onClick={() => setContador(contador -1)}>Restar</Button>
    <Button variant="outline-secondary" onClick={() => setContador(0)} >Reset</Button>
    <Button variant="primary" onClick={() => setContador(contador + 1)}>Aumentar</Button>

    </section>
  );
};

export default Work01