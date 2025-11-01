import { Link, useLocation } from "react-router-dom"

function Navbar() {
    const location = useLocation()

    const pages = [{ name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "About", path: "/about" }]

    return (
        <nav className="sticky top-0 z-50 border-b border-neutral-400 bg-neutral-900/70 backdrop-blur-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <Link to="/" className="select-none">
                    <h1 className="text-xl font-semibold tracking-wide">
                        MiniGoogle
                    </h1>
                </Link>

                <div className="flex items-center space-x-6">
                    {pages.map((page) => {
                        const isActive = location.pathname === page.path
                        return (
                            <Link key={page.name} to={page.path}>
                                <span
                                    className={`relative text-sm font-medium transition-all duration-300 hover:text-white ${isActive ? "text-white" : "text-neutral-400"
                                        }`}
                                >
                                    {page.name}
                                    <span
                                        className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full transition-all duration-300 ${isActive ? "bg-blue-400" : "bg-transparent hover:bg-blue-500"
                                            }`}
                                    ></span>
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar

