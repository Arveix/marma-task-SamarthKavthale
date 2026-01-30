import { useState } from 'react'
import './App.css'
import HeroBanner from './components/HeroBanner'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCatalog from './components/ProductCatalog'
import Breadcrumbs from './components/Breadcrumbs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Breadcrumbs />
      <HeroBanner />
      <ProductCatalog className="flex flex-col items-center" />
      <Footer />
    </>
  )
}

export default App
