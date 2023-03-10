import React from 'react';
import { Image } from 'react-bootstrap';
import me from './img/me.jpg'


export const Home = () => {

  return (
  <section className='text-center'  >
    <Image src={me} weight={300} height={300} top={235} />
      
    <h1 className='p-2 bg-secondary text-white mt-2 ' >¡Bienvenidos!</h1>

  </section>


)
};