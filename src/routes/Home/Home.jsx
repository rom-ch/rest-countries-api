import { useState } from "react";
import CountryCard from "../../components/CountryCard/CountryCard";
import InputField from "../../components/InputField/InputField";
import Select from "../../components/Select/Select";
import useApi from "../../hooks/useApi";
import styles from "./Home.module.css";
import SpinnerFullPage from "../../components/SpinnerFullPage/SpinnerFullPage";

function Home() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState({
    label: "Filter by Region",
    value: "",
  });
  const { data: countries, isLoading, error } = useApi("/data/data.json");

  function handleSearch(value) {
    setSearch(value);
  }

  const filteredCountries = countries?.filter(country => {
    if (select.value) {
      return country.region === select.label;
    } else {
      return country;
    }
  });

  const searchedCountries = filteredCountries?.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const regions = [...new Set(countries?.map(country => country.region))];
  const options = regions.map(region => ({
    label: region,
    value: region.toLowerCase().replace(/\s+/g, "-"),
  }));

  if (isLoading) return <SpinnerFullPage />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className={styles.filter}>
        <InputField handleSearch={handleSearch} search={search} />
        <Select options={options} value={select} onChange={o => setSelect(o)} />
      </div>
      <div className={styles.countries}>
        {searchedCountries?.map(country => {
          return <CountryCard country={country} key={country.alpha3Code} />;
        })}
      </div>
    </div>
  );
}

export default Home;
