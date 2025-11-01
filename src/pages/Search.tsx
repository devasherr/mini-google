import { useState } from "react"

function Search() {
    const [query, setQuery] = useState<string>("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (query.length == 0) { return }

        window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}`
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
            <input
                placeholder="Search here"
                onChange={(e) => { setQuery(e.target.value) }}
                className="w-full px-4 py-2 bg-neutral-800 border-neutral-700 focus-visible:ring-neutral-600" />
            <button type="submit" className="boarder-2 boarder-solid gap-2">Search</button>
        </form>
    )
}

export default Search
