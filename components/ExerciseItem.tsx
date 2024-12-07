import React from 'react';
import './ExerciseItem.css';

interface ExerciseItemProps {
  image: string;
  title: string;
  description: string;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ image, title, description }) => {
  return (
    <div className="exercise-item">
      <img src={image} alt={title} className="exercise-item-image" />
      <div className="exercise-item-info">
        <h3 className="exercise-item-title">{title}</h3>
        <p className="exercise-item-description">{description}</p>
      </div>
      <span className="exercise-item-arrow">›</span>
    </div>
  );
};

export default ExerciseItem;
