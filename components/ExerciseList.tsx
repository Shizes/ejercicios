import React from 'react';
import ExerciseItem from './ExerciseItem'; // Asegúrate de que el path sea correcto
import './ExerciseList.css';

const ExerciseList = () => {
  const exercises = [
    {
      image: 'https://via.placeholder.com/100',
      title: 'Puxada frontal',
      description: '3 séries x 12 repetições',
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Remada curvada',
      description: '3 séries x 12 repetições',
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Remada unilateral',
      description: '3 séries x 12 repetições',
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Levantamento terra',
      description: '3 séries x 12 repetições',
    },
  ];

  return (
    <div className="exercise-list">
      {exercises.map((exercise, index) => (
        <ExerciseItem
          key={index}
          image={exercise.image}
          title={exercise.title}
          description={exercise.description}
        />
      ))}
    </div>
  );
};

export default ExerciseList;
