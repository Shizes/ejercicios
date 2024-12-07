import React from 'react';
import ExerciseList from '@/components/ExerciseList'; // Asegúrate de que el path sea correcto

export default function Home() {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#fff', margin: '20px 0' }}>
        Exercícios
      </h1>
      <ExerciseList />
    </>
  );
}
