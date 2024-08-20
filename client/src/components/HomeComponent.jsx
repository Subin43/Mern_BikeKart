import React, { useState } from 'react';
import ImageComponent from '../ui/images';
import Icons from '../ui/Icons';

const HomeComponent = () => {
  const contentData = [
    {
      id: 2,
      src: "https://c4.wallpaperflare.com/wallpaper/129/22/327/hands-greeting-handshake-wallpaper-preview.jpg",
      alt: "Image 1",
      text: "Instant Bike Loan",
      headline: "Avail Emi Today!"
    },
    {
      id: 3,
      src: "https://media.istockphoto.com/id/1386156190/photo/indian-farmer-sitting-on-his-new-bike-and-showing-money.jpg?s=612x612&w=0&k=20&c=oUDpmNlfoH6a809BNnpKmsNCVuOm7EyxIHDMMFbpfGU=",
      alt: "Image 2",
      text: "Buy great quality bikes",
      headline: "Smart Choices"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg",
      alt: "Image 3",
      text: "Sell your bike in 1 day",
      headline: "Quick Sale. Big Smile"
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % contentData.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + contentData.length) % contentData.length
    );
  };

  const { id, text, headline } = contentData[currentImageIndex];

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
      <ImageComponent
        imageId={id}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', top: '50%', left: '5%', transform: 'translateY(-50%)' }}>
        <button onClick={handlePreviousImage} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
          <Icons iconId={8} size={30} />
        </button>
      </div>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <p>{text}</p>
        <h2>{headline}</h2>
      </div>
      <div style={{ position: 'absolute', top: '50%', right: '5%', transform: 'translateY(-50%)' }}>
        <button onClick={handleNextImage} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
          <Icons iconId={9} size={30}  />
        </button>
      </div>
    </div>
  );
};

export default HomeComponent;
