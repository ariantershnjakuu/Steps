import './App.css'
import Pizza from './Pizza'
import Footer from './Footer'
import { pizzaData } from './Pizza'


function App() {

  const pizzas = pizzaData
  return (
    <div className="App">
      <main className='main'>
        <div className='container'>
          {pizzas && (
            pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App


