import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';


export const Work02 = () => {
 const[image, setImage] = useState(null);
const [load, setLoad] = useState(false);
const [error, setError] = useState(false);


 const duk = async () => {
  try{
    setLoad(true)
    const res = await fetch('https://random-d.uk/api/v2/random')
    setImage(await res.json())
  } catch (error){
    setError(true)
  } finally {
    setTimeout(() => {
      setLoad(false)
    }, 1000)
  }
}

  return <section className='text-center'>
  <h2>Patos</h2>
  {error
    ? <Alert variant="danger"><p>Ocurrió un error</p></Alert>
    : load
    ? <Spinner animation="border" variant="success" />
    : image && <Image src={image.url} alt='171x180' thumbnail className='my-5' width={250}
    height={250}  />
  }
  <Button variant="success" onClick={duk} className="d-block mx-auto mb-5" >Obtener Pato</Button>
</section>;
};