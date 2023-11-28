
import Navbar from "./components/navigationBar/NavigationBar"
import Home from "./pages/Home"
import ReImagening from "./components/reImagining/ReImagening"
import StartEnterprise from "./components/startEnterprise/StartEnterprise"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <Navbar />
      <div>
        <Home />
        <ReImagening />
        <StartEnterprise />
        <Footer />
      </div>
    </>

  )
}

export default App
