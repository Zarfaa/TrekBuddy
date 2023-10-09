import About from "./child/About/About"
import Packages from "./child/Packages/Packages"
import Search from "./child/Searchbar/Searchbar"
import Destinations from "./child/Destinations/Destinations"
import Carousel from "./child/Carousel/Carousel"
let Home = () => {
return( 
             <>
            <Carousel/>
            <Search/>
            <Destinations/>
            <About/>
            <Packages/>
            </>
)
}

export default Home