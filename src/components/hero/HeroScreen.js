import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  const { id: heroId } = useParams();
  const navigate = useNavigate();

  //useMemo se le pasa como segundo argumento el parametro que en este caso es el heroId esto lo que hace es que solo va a hacer la consulta unicamente si ese id cambia por otro
  const hero = useMemo(()=> getHeroById(heroId), [heroId]); 

  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const imgPath = `/assets/img/heroes/${id}.jpg`;

  
  const handleReturn = () => {
    //   si le envias un -1 significa que vaya a la pagina anterior
    navigate(-1,{
        replace:true
    })
  }

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeInLeft">
        <img src={imgPath} alt={superhero} className="img-thumbnail" />
      </div>
      <div className="col-8 animate__animated animate__fadeInUp">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Alter ego:</strong> {alter_ego}
          </li>
          <li className="list-group-item">
              <strong>publisher:</strong> {publisher}
          </li>
          <li className="list-group-item">
              <strong>First Appearance:</strong> {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>Back</button>
      </div>
    </div>
  );
};
