// src/app/components/Experience.tsx
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="bg-white p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Experience</h2>
      <div className="text-gray-700">
        <h3 className="font-semibold">Sindh Education and Literacy Department</h3>
        <p>December 14, 2022 - Present</p>
        <p>Work as Junior Elementary School Teacher.</p>
      </div>
      <hr className="my-4" />
      <div className="text-gray-700">
      <h3 className="font-semibold">Sindh Education and Literacy Department</h3>
        <p>June 6,2022 - December 14, 2022</p>
        <p>Work as Primary School Teacher.</p>
      </div>
    </section>
  );
};

export default Experience;
