import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact(){
  
  const[fact, setFact] = useState('cualquier cosa')

  function getNewFact(){
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(getNewFact,[])

  return {fact, getNewFact}
}
