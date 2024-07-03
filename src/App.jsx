
import './App.css'
import Banner from './Components/Banner'
import DiscountBanner from './Components/DiscountBanner'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Testimonial from './Components/Testimonial'

function App() {
 
  return (
    <>
      <div className='bg-white'>

           <Navbar/>

          <Banner/>
          <Testimonial/>
         <Faq/>
          <DiscountBanner/>
          <Footer/>

      </div>
    </>
  )
}

export default App
