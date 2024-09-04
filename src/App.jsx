import AllRoutes from "./components/AllRoutes"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default function App() {
  return (
    <div >
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}
