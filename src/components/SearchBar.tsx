export default function SearchBar() {
    return (
        <>
            <div className="input-group rounded">
                <form className='rounded w-100 pb-2'>
                    <input type="search" className="form-control rounded bg-dark text-white" name="q" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                </form>
            </div>
        </>
    )
}