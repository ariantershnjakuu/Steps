import './App.css'
import Pizza from './Pizza'
import Footer from './Footer'
import { pizzaData } from './Pizza'
import Header from './Header'


function App() {

  const pizzas = pizzaData
  return (
    <div className="App">
      <Header />
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


