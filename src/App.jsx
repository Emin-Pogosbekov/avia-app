import React, { useEffect, useState } from 'react'
import Filters from './components/Filters'
import Results from './components/Results'

export default function App() {
  const [flights, setFlights] = useState([])
  
  useEffect( () => {
    fetch('http://localhost:3000/db.json')
      .then(res => res.json())
      .then(json => setFlights(json.result.flights))
  }, [])

  return (
    <div className='app'>
      <Filters />
      <Results flights={flights} />
    </div>
  )
}
