import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function Movie({id, title, coverImg, summary, genres}){
  return (
    <div className={styles.div}>
      <img src={coverImg} alt={title}/>
      <h2 className={styles.title}>
        <Link className={styles.link} to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
      </h2>
      <p className={styles.p}>{summary}</p>
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