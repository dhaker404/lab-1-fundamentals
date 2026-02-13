import UserCard from './components/UserCard.jsx'
import Product from './components/Product.jsx'
import Card from './components/Card.jsx'

import './App.css'

function App() {

  return (
    <>
        <div>
            <UserCard name = "jmal" email = "jmal.jmoula@jmail.com" role = "Dev"/>
            <UserCard name = "SpongeBob" email = "SpongeBob.Squarepatens@gmail.com" role = "Chef"/>
            <UserCard name = "Alice" email = "Alice@gmail.com" role = "Designer"/>

        </div>
        <div>
            <Product name = "Laptop" price = {999} inStocks = {true} stars = {5}/>
            <Product name = "Phone" price = {499} inStocks = {false} stars = {4}/>
            <Product name = "Headphones" price = {99} inStocks = {true} stars = {5}/>
        </div>
        <div>
          <Card title = "Card 1">
              <p>This is the content inside Card 1</p>
          </Card>
          <Card title = "Card 2">
              <p>This is the content inside Card 2</p>
          </Card>
        </div>

    </>
  )
}

export default App
