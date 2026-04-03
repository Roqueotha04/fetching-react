import { useEffect, useState } from 'react'
import './App.css'


const RANDOM_FACT = `https://catfact.ninja/fact`
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

function App() {
  const[fact, setFact] = useState('cualquier cosa')
  const [image, setImage] = useState()


  //efectos tienen una sola responsabiliad
  useEffect(()=>{
    fetch(RANDOM_FACT)
      .then(res => res.json()) 
//      .then(data =>setFact(data.fact)) Abajo hace lo mismo pero con desestructuración
      .then(data =>{
          const {fact} = data;
          setFact(fact);
      })
  },[])

useEffect(()=>{
      const firstWord = fact.split(' ')[0];
      console.log(firstWord);

      fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res => res.json())
       .then(response =>{
         setImage(response.url)
        })
        .catch((err)=>{
          console.log(err);
        })
}, [fact])

  return (
    <main>
      <h1>App de gatos</h1>

      <section>
      <p>{fact}</p>
      {image && <img src={image} alt='cat'></img>}
      </section>
      
    </main>
  )
}

export default App
