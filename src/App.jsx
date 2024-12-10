
import './App.css'
import About from './component/About'
import Education from './component/Education'
import Portfolio from './component/Portfolio'
import Projects from './component/Projects'
import Badge from './component/Skills'

function App() {

  return (
    <>
      <div class="container mx-auto border w-[640px]">
  <Portfolio/>
  <About/>
  <Badge/>
  <Education/>
  <Projects/>

      </div>
    </>
  )
}

export default App
