
// import { fetchPopularMovies } from '../../lib/fetchers'
import SearchBar from "../../components/SearchBar";

export default async function Home() {
  // const movies = await fetchPopularMovies()

  return (
    <div>
      <SearchBar />
      {/* <div className="asd">
        {movies.map(movie => (
          <p key={movie.id}>{movie.name}</p>
        ))}
      </div> */}
    </div>
  )
}
