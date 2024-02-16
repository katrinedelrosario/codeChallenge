import { Cookie } from './components/CookieBanner/Cookie'
import './App.css'
import { Button } from './components/Buttons/Button'
function App() {


  return (
    <>
      <Cookie />
      <Button
    backgroundColor="slateblue"
    color="white"
    size="20px"
    text="Click me"
    onClick={() => alert('Button clicked!')}
/>
    </>
  )
}

export default App
