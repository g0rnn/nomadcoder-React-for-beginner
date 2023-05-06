import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({id, title, coverImg, summary, genres}){
  return (
    <div>
      <img src={coverImg} alt={title}/>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  title: Proptypes.string.isRequired,
  coverImg:Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired,
};
export default Movie;