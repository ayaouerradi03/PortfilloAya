import { About } from './components/About'
import { Backdrop } from './components/Backdrop'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Interests } from './components/Interests'
import { Nav } from './components/Nav'
import { Skills } from './components/Skills'
import { WhyMe } from './components/WhyMe'
import { LanguageProvider } from './i18n/LanguageProvider'

export function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        {/* Layer 0 — the gooey gradient field, plus grid, vignette and grain.
            The glass panels above pick it up through their backdrop-filter. */}
        <Backdrop />

        {/* Layer 1 — content */}
        <Nav />

        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <WhyMe />
          <Interests />
          <Contact />
        </main>

        <div className="relative z-10">
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  )
}

export default App
