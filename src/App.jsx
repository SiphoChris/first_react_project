import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Nav from './components/NavBar'
import ProductItem from './components/ProductItem'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="page-wrapper">
      <Nav />
      
      <HeroSection/>

      <ProductList>
        <ProductItem/>
      </ProductList>

      <Footer/>
    </div>
  )
}

export default App
