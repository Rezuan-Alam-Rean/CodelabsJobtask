
import './App.css'
import Banner from './Components/Banner'
import DiscountBanner from './Components/DiscountBanner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
 
  return (
    <>
      <div className='bg-white'>

           <Navbar/>

          <Banner/>
          <DiscountBanner/>
          <Footer/>

      </div>
    </>
  )
}

export default App
