
import './App.css'
import About from './component/About'
import Education from './component/Education'
import Portfolio from './component/Portfolio'
import Badge from './component/Skills'

function App() {

  return (
    <>
      <div class="container mx-auto border w-[640px]">
  <Portfolio/>
  <About/>
  <Badge/>
  <Education/>

      </div>
    </>
  )
}

export default App
