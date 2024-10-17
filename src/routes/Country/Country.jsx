import { useNavigate, useParams, Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { GoArrowLeft } from "react-icons/go";
import styles from "./Country.module.css";

function Country() {
  const { data, isLoading, error } = useApi("/data/data.json");
  const { alpha3Code } = useParams();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>No country found</div>;

  const {
    flags,
    name,
    borders,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = data.find(el => el.alpha3Code === alpha3Code);

  return (
    <div>
      <button className={styles.btn} onClick={() => navigate(-1)}>
        <GoArrowLeft />
        Back
      </button>
      <div className={styles.content}>
        <div className={styles["content__flag"]}>
          <img src={flags.svg} alt={`Flag of ${name}`} />
        </div>
        <div className={styles["content__details"]}>
          <h2>{name}</h2>
          <div className={styles["content__details--list"]}>
            <ul>
              <li>
                <strong>Native Name: </strong>
                {nativeName}
              </li>
              <li>
                <strong>Population: </strong>
                {new Intl.NumberFormat().format(population)}
              </li>
              <li>
                <strong>Region: </strong>
                {region}
              </li>
              <li>
                <strong>Sub Region: </strong>
                {subregion}
              </li>
              <li>
                <strong>Capital: </strong>
                {capital}
              </li>
            </ul>
            <ul>
              <li>
                <strong>Top Level Domain: </strong>
                {topLevelDomain.map(tld => (
                  <span key={tld}>{tld}</span>
                ))}
              </li>
              <li>
                <strong>Currencies: </strong>
                {currencies.map(currency => currency.name).join(", ")}
              </li>
              <li>
                <strong>Languages: </strong>
                {languages.map(language => language.name).join(", ")}
              </li>
            </ul>
          </div>
          <div className={styles.borders}>
            <strong>Border Countries:</strong>
            <div className={styles.borders__tags}>
              {borders
                ? borders.map(border => (
                    <Link to={`/country/${border}`} key={border}>
                      {border}
                    </Link>
                  ))
                : "No Border Countries"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
