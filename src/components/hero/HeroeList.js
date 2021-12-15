import React, { useMemo } from 'react';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

export const HeroeList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-sm-2 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {
      heroes.map((heroe) => (
        //   haciendo uso del operados spread puedo desestructurar todas las props
        <HeroCard key={heroe.id} {...heroe} />
      ))
      }
    </div>
  );
};
