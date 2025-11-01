import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Search from "./pages/Search.tsx"
import Navbar from "./components/Navbar.tsx"
import Footer from "./components/Footer.tsx"

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/search" element={<Search />} />
            </Routes>

            <Footer />
        </Router >
    )
}

export default App
