import React from 'react';
import { Header, Blog, Features, Possibility, WhatGPT3, Footer } from './containers';
import { Navbar, Feature, CTA, Article, Brand} from './components';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
          <Navbar />
          <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      
    </div>
  )
}

export default App