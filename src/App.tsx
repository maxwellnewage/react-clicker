import { useState } from 'react'
import Cookie from './components/Cookie'
import Shop from './components/Shop'


function App() {
  
  return (
    <>
      <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
        <div className="row">
          <div className="col">
            <Cookie />
          </div>
          <div className="col">
            <Shop />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
