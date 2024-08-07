import { useLocation } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('color');

  return (
    <div>
      <h1>Search Results for: {query}</h1>
    </div>
  );
}

export default Search;