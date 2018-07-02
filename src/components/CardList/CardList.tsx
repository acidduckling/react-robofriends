import * as React from 'react';
import Card from '../Card/Card';
import { IRobot } from 'state';

interface CardListProps {
  robots: IRobot[]
}

const CardList = ({ robots }: CardListProps) => {
  return (
    <div>
      {robots.map((robot, i) => {
        return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />;
      })}
    </div>
  );
};

export default CardList;
