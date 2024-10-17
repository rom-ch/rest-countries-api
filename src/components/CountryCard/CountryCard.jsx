import PropTypes from "prop-types";
import styles from "./CountryCard.module.css";
import { Link } from "react-router-dom";

function CountryCard(country) {
  const { name, population, region, capital, flags, alpha3Code } =
    country.country;

  return (
    <Link to={`country/${alpha3Code}`} className={styles.country}>
      <div className={styles.flag}>
        <img src={flags.png} alt={flags.alt} />
      </div>
      <div className={styles.infos}>
        <h2>{name}</h2>
        <div className={styles.details}>
          <p>
            <span>Population: </span>
            {new Intl.NumberFormat("en-US").format(population)}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
}

CountryCard.propTypes = {
  country: PropTypes.object,
};

export default CountryCard;
