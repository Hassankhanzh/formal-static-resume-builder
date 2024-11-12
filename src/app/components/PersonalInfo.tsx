// src/app/components/PersonalInfo.tsx
import React from 'react';

const PersonalInfo: React.FC = () => {
  return (
    <section className="bg-gray-200 p-6 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">Personal Information</h2>
      <div className="text-gray-700">
        <p><strong>Name:</strong> Muhammad Hassan Khan</p>
        <p><strong>Title:</strong> Mechanical Engineer</p>
        <p><strong>Email:</strong> m.hassankhan85@gmail.com</p>
        <p><strong>Phone:</strong> 0346-2112200</p>
      </div>
    </section>
  );
};

export default PersonalInfo;
