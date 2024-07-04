
import './App.css'
import About from './Components/About'
import Banner from './Components/Banner'
import DiscountBanner from './Components/DiscountBanner'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Overview from './Components/Overview'
import Services from './Components/Services'
import Testimonial from './Components/Testimonial'

function App() {
 
  return (
    <>
      <div className='bg-white '>

           <Navbar/>

          <Banner/>
          <Overview/>
          <About/>
          <Services/>
          <Testimonial/>
         <Faq/>
          <DiscountBanner/>
          <Footer/>

      </div>
    </>
  )
}

export default App
