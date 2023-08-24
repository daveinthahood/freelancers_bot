import { useEffect, useState } from 'react'
import './App.css'
import { Button } from './Components/Button/Button'
import { Card } from './Components/Card/Card'
import { getItems } from './db/db'
import { Cart } from './Components/Cart/Cart'

const items = getItems()
const telegram = window.Telegram.WebApp
function App() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    telegram.ready();
  })

  return (
    <>
      <h1 className='order_'> Order your Stack </h1>

    <div className='cards_container'>
      {items.map(items => {
        return <Card items= {items} key={items.id}/>
      })}
    </div>

    <Cart cartItems={cartItems} />
    <div className='button-checkout'>
      <Button title={'checkout'} type={'checkout'} />
    </div>
    <footer> Powered by: <span>
         <a href="https://t.me/+ApOsaoFg3Sk4MGE0"> Dave </a>
      </span>
      </footer>
    </>
  )
}

export default App
