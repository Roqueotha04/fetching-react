import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'


//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`


function App() {
  ///Aqui getNewFact es un metodo que recibo por parametro del return useCatFact.
  ///En el useState pasa algo similar y le doy el nombre que quiera, aca tengo ese metodo y actualiza los datos.
  const{fact, getNewFact} = useCatFact()
  const image = useCatImage(fact)

  function getFact(){
    getNewFact();
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
