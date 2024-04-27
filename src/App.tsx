import Main from './components/Pages/Maint'
import './App.css'
import { PrimeReactProvider } from 'primereact/api'
import Tailwind from "primereact/passthrough/tailwind";

function App() {
  return (
    <>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
    <Main/>
    </PrimeReactProvider>
    </>
  )
}

export default App
