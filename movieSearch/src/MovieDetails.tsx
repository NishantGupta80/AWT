import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbRating?: string;
}

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "81a136b0"; // Replace with a valid OMDb API key

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?t=${id}&apikey=${API_KEY}`) // ✅ Use movie name instead of hardcoded ID
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setMovie(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 className="text-center text-xl">Loading...</h2>;

  if (!movie) {
    return <h2 className="text-center text-xl text-red-500">Movie not found</h2>;
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">
        {movie.Title} ({movie.Year})
      </h1>
      <img src={movie.Poster} alt={movie.Title} className="w-64 mt-4" />
      <p className="text-lg mt-2">⭐ {movie.imdbRating || "N/A"}</p> {/* ✅ Handle missing rating */}
    </div>
  );
}

export default MovieDetails;
