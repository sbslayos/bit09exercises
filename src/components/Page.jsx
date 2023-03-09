import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Work03 } from './Work03';
import { Work02 } from './Work02';
import  { Work01 } from './Work01'


export const Page = () => {
  const [exercise, setExercise] = useState(null);

  return (
  
  <section>
      <h1>Ejercicios React</h1>
      
      
        {!exercise ? (
      <ol> 
        <li onClick={() => setExercise(<Work01/> )}>Ejercicio 1</li>
        <li onClick={() => setExercise(<Work02 />)}>Ejercicio 2</li>
        <li onClick={() => setExercise(<Work03 />)}>Ejercicio 2</li>
      </ol>
      
      ) : (
        <div>
        {exercise}
        <Button onClick={() => setExercise(null)} >
          Volver
        </Button>
        </div>
      )}
      </section>
)};
export default Page