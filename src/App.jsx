import './App.css'
import { Navbar} from "./components/index"
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
