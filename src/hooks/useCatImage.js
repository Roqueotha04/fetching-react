import { useEffect, useState } from "react";

export function  useCatImage(fact){
  const [image, setImage] = useState()

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

  return image
}