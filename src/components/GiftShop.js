import React from 'react';
import ArtifactItem from './ArtifactItem';

const App = () => {
  const handleBuyClick = () => {
    // Handle buy/like action
    console.log('Item bought or liked!');
  };

  return (
    <div>
      <ArtifactItem
        imageSrc="path/to/your/image.jpg"
        price="$100"
        description="An ancient artifact with a rich history."
        dateAcquired="January 1, 2022"
        onBuyClick={handleBuyClick}
      />
      {/* Add more ArtifactItem components as needed */}
    </div>
  );
};

export default App;

