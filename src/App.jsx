
import './App.css'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Badge from './component/Skills'

function App() {

  return (
    <>
      <div class="container mx-auto border w-[640px]">
  <Portfolio/>
  <About/>
  <Badge/>

      </div>
    </>
  )
}

export default App
