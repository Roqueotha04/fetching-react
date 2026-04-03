import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'
import './App.css'


//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

function App() {
  const[fact, setFact] = useState('cualquier cosa')
  const [image, setImage] = useState()


  //efectos tienen una sola responsabiliad
  useEffect(getFact,[])

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

function getFact(){
    const fact = getRandomFact()
      .then(newFact => setFact(newFact))
}

  return (
    <main>
      <h1>App de gatos</h1>

      <section>
      <p>{fact}</p>
      {image && <img src={image} alt='cat'></img>}
      </section>
      <button onClick={getFact}>Get fact</button>
    </main>
  )
}

export default App
