import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
//package to managment queryparamas
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import './search.css';
export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const {q = ''} = queryString.parse(location.search);
  console.log(q);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };
  
  return (
    <>
      <h1 className="mt-5">Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search a Heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {
              (q === '') ? <div className="alert alert-info animate__animated animate__fadeIn">Search a heroe</div>
              : (heroesFiltered.length === 0) && <div className="alert alert-danger animate__animated animate__fadeIn">Not found heroe: {q}</div>
          }
          {heroesFiltered.map((heroe) => (
            <HeroCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </>
  );
};
