
const RANDOM_FACT = `https://catfact.ninja/fact`

export function getRandomFact (){
    return fetch(RANDOM_FACT)
      .then(res => res.json()) 
                            // .then(data =>setFact(data.fact)) Abajo hace lo mismo pero con desestructuración
      .then(data =>{
          const {fact} = data;
          return fact; 
        })
}