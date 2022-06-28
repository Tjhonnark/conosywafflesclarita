import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {children}

      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}