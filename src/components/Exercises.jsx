import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Exercise1 } from './Exercise1';
import { Exercise2 } from './Exercise2';
import { Exercise3 } from './Exercise3';


export const Exercises = () => {
  const [exercise, setExercise] = useState(null);

  return 
  
  <section>
      <h1>Ejercicios React</h1>
      
      
        {!exercise ? (
      <ol> 
        <li onClick={() => setExercise(<Exercise1/>)} >Ejercicio 1</li>
        <li onClick={() => setExercise(<Exercise2/>)} >Ejercicio 2</li>
        <li onClick={() => setExercise(<Exercise3/>)} >Ejercicio 2</li>
      </ol>
      ) : (
        <div>
        {exercise}
        <Button onClick={() => setExercise(null)} >
          Volver
        </Button>
        </div>
      )
    }
    
  
    </section>
};