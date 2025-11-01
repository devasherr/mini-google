import { useState } from "react"

function Search() {
    const [query, setQuery] = useState<string>("")

    console.log(query)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (query.length == 0) { return }

        window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}`
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Search here" onChange={(e) => { setQuery(e.target.value) }} />
            <button type="submit">Search</button>
        </form>
    )
}

export default Search
