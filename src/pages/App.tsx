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
    getQuote()
  }

  useEffect(() => {
    getQuote()
  }, [getQuote])

  return(
    <Container>
      <div className='randomButtonContainer'>
      <button type='button' onClick={handleRandomQuote}>
        random
      <span className="material-symbols-outlined">
        autorenew
      </span>
      </button>
      </div>
      {quotes && ( 
          <div className='quoteContainer'>
            <div className='quoteTextContainer'>
              <p>"{randomQuote.quoteText}"</p>
            </div>
          

          <button 
            type='button'
            className='quoteAuthor'
           >
            <div className='quoteInfos'>
            <span className='quoteAuthor'>{randomQuote.quoteAuthor}</span>
            <span className='quoteGenre'>{randomQuote.quoteGenre}</span>
            </div>
            <span className="material-symbols-outlined" style={{color: "white"}}>
            arrow_forward
            </span>
           </button>

          </div>
        )}
    </Container>
  )
}
