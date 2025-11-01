import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Search from "./pages/Search"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="min-h-screen bg-[radial-gradient(circle_at_1px_1px,#2d2d2d_1px,transparent_0)] [background-size:20px_20px] bg-neutral-950 text-gray-100">
            <Router>
                <Navbar />

                <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/search" element={<Search />} />
                    </Routes>
                </main>

                <Footer />
            </Router>
        </div>
    )
}

export default App

