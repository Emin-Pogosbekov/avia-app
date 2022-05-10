import React, { useEffect, useState } from 'react'
import Filters from './components/Filters'

export default function App() {

  const [flights, setFlights] = useState([])
  useEffect()

  return (
    <div className='app'>
      <Filters />
      <div>2</div>
    </div>
  )
}
