import { useState } from 'react'
import Cookie from './components/Cookie'
import Shop from './components/Shop'
import CookieContext from './context/CookieContext';


function App() {
  const [cookieAmount, setCookieAmount] = useState(0);
  
  return (
    <CookieContext.Provider value={{cookieAmount, setCookieAmount}}>
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
    </CookieContext.Provider>
  )
}

export default App
