import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Work from '../Components/Work'
import Footer from '../Components/Footer'
import StackSection from '../Components/StackSection'

function Home() {
  return (
    <>
      <Navbar />

      <main className="stack-root">
        {/* Base layer — Hero sits at the bottom of the stack */}
        <StackSection index={0} rounded={false}>
          <Hero />
        </StackSection>

        {/* Each following section slides up and overlaps the previous one */}
        <StackSection index={1}>
          <About />
        </StackSection>

        <StackSection index={2}>
          <Work />
        </StackSection>

        <StackSection index={3}>
          <Footer />
        </StackSection>
      </main>
    </>
  )
}

export default Home
