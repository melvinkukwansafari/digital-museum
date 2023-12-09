// Example export
import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);

  // Local variable with gallery data
  const localGalleryData = [
    {"id": 1, "type": "photo", "media": "image1.jpg", "caption": "Caption 1"},
    {"id": 2, "type": "photo", "media": "image2.jpg", "caption": "Caption 2"},
    {"id": 3, "type": "video", "media": "https://www.youtube.com/watch?v=video1", "caption": "Video Caption 1"},
    {"id": 4, "type": "video", "media": "https://www.youtube.com/watch?v=video2", "caption": "Video Caption 2"}
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate fetching data from an external source (e.g., JSON server)
        // For demonstration purposes, you can comment out this block when using real data
        // const response = await fetch('http://localhost:3001/gallery');
        // const data = await response.json();

        // For demonstration, use local variable instead of external data
        const data = localGalleryData;

        setGalleryData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {galleryData.map(item => (
        <div key={item.id}>
          {item.type === 'photo' && (
            <div>
              <img src={item.media} alt={item.caption} />
              <p>{item.caption}</p>
            </div>
          )}
          {item.type === 'video' && (
            <div>
              <iframe
                title={item.caption}
                width="560"
                height="315"
                src={item.media.replace('watch?v=', 'embed/')}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>{item.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;


  