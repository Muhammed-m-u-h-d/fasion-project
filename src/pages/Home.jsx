
import HeroBanner from '../components/home/HeroBanner'
import Category from '../components/home/Category'
import FeaturedLooks from '../components/home/FeaturedLooks'
import NewArrivals from '../components/home/NewArrivals'
import BrandMessage from '../components/home/BrandMessage'
import Footer from '../components/common/Footer'
function Home() {
  return (
    <div className='mt-[8.5rem]'>
      <HeroBanner/>
      <Category/>
      <FeaturedLooks/>
      <NewArrivals/>
      <BrandMessage/>
      <Footer/>
    </div>
  )
}

export default Home
