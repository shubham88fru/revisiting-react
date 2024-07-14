import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((acc, curr) => {
    if (!acc.map((el) => el.country).includes(curr.country)) {
      return [...acc, { country: curr.country, emoji: curr.emoji }];
    } else return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem id={country} country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountriesList;
