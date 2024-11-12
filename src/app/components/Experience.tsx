// src/app/components/Experience.tsx
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section className="bg-gray-200 p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Experience</h2>
      <div className="text-gray-800">
        <h3 className="font-semibold">Orient</h3>
        <p>1st June, 2019 - Present</p>
        <p>Work as Sales Manager.</p>
      </div>
      <hr className="my-4" />
      <div className="text-gray-800">
      <h3 className="font-semibold">FSIPL</h3>
        <p>June 1,2015 - June 30, 2019</p>
        <p>Worked as Sales Engineer</p>
      </div>
    </section>
  );
};

export default Experience;
