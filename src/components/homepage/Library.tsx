import React from 'react';


const getExerciseCard = async () => {
  try{
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog/');
    const data = await response.json();
    return data;
  }catch(error){
    console.error("Error fetching exercise data:", error);
    return [];
  }
};


const Library = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-4xl my-5'>THE LIBRARY</h2>
            <p className='text-[#A4A5AB] text-xl mb-5'>Twelve lifts covering every major muscle group.</p>
            <div>

            </div>
        </div>
    );
};

export default Library;