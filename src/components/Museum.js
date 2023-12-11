import React, { useState, useEffect } from 'react';
import Image1 from './flowers.jpg'; // Import the image file
import Image2 from './samburu-hand-knife.jpg';
import Image3 from './moran.jpg';
const Museum = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  

  useEffect(() => {
    const localArtifactsData = [
      {
        "id": 1,
        "name": "Natural Adherence",
        "description": "Samburu got and adopt ways to live with the wild and up to this age still practising it",
        "category": "mammalia",
        "image": Image3
      },
      {
        "id": 2,
        "name": "Samburu Flowers",
        "description": "This is a flower occuring from acacia plants. A dry land tree with thorns but beatiful flowers",
        "category": "plants",
        "image": Image1 // Use the imported image
      },
      {
        "id": 3,
        "name": "Samburu-hand-knife",
        "description": "This is a tool that was used by samburu people, as it was helpful to them with activity like; Goat eating, gathering and circumcision",
        "category": "arts",
        "image": Image2 // Use the imported image
      }
      // Add more artifacts with different categories and images
    ];
    // Set artifacts directly from local data
    setArtifacts(localArtifactsData);
  }, []); // Include localArtifactsData in the dependency array

  const filteredArtifacts = selectedCategory === 'all'
    ? artifacts
    : artifacts.filter(artifact => artifact.category === selectedCategory);

  return (
    <div className="container mt-4">
      <label>
        Select Category:
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="form-control"
        >
          <option value="all">All</option>
          <option value="mammalia">Mammalia</option>
          <option value="plants">Plants</option>
          <option value="arts">Arts</option>
          {/* Add more categories as needed */}
        </select>
      </label>

      <h2 className="mt-3">Enjoy Our Museum</h2>
      <div className="row">
        {filteredArtifacts.map((artifact) => (
          <div key={artifact.id} className="col-md-12 mb-3"> {/* Use col-md-12 to take up the full width */}
            <div className="card">
              <img src={artifact.image} className="card-img-top" alt={`Artifact ${artifact.id}`} />
              <div className="card-body">
                <h5 className="card-title">{artifact.name}</h5>
                <p className="card-text">{artifact.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Museum;









