import {Container} from './styles'
import axios, { AxiosResponse } from 'axios';
import {useEffect, useState, useCallback} from 'react'

interface App {
}

export const App = (props: App) =>{

  const [quotes, setQuotes] = useState<AxiosResponse | null>(null)
  const randomQuote = quotes?.data.data[Math.floor(Math.random() * quotes.data.data.length)]

  const getQuote = useCallback(async () => {
    try{
      const response = await axios.get("https://quote-garden.herokuapp.com/api/v3/quotes")
      setQuotes(response)
    }catch (error){
      console.log(error)
    }  
  }, [])

  function handleRandomQuote(){

  }


  useEffect(() => {
    getQuote()
  }, [getQuote])

  console.log(randomQuote)


  return(
    <Container>
      {quotes && ( 
          <div>
          <p>"{randomQuote.quoteText}"</p>
          <p>{randomQuote.quoteAuthor}</p>
          </div>
        )}
    </Container>
  )
}
