import React from 'react';
import Image from 'next/image';

export default function OurTeam() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Team</h1>
      
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* You can add an image here if available */}
            <div className="w-48 h-48 relative">
              <Image 
                src="/dami.jpg" 
                alt="Oluwadamilola Akintewe" 
                fill
                className="rounded-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Oluwadamilola Akintewe</h2>
              <p className="text-gray-600 italic mb-4">(Founder and Team Lead)</p>
              <p className="text-gray-800 mb-4">
                A social entrepreneur and change leader, she founded Project Rebirth inspired by her experience 
                growing up on a farming settlement in a rural community. She is committed to smashing every form 
                of oppression against women empowerment.
              </p>
              <a 
                href="mailto:dami@rebirth4change.org?subject=Contact%20from%20Website" 
                className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
              >
                Contact Dami
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 