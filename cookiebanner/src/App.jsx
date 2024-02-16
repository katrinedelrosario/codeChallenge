import { Cookie } from './components/CookieBanner/Cookie'
import './App.css'
import { Button } from './components/Buttons/Button'
function App() {


  return (
    <>
      <Cookie />
      <Button
    backgroundColor="slateblue"
    color="black"
    size="25px"
    text="Click mig"
    onClick={() => alert('Button clicked!')}
/>
    </>
  )
}

export default App
