// src/components/Museum.js
//import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import artifactsData from '../db.json';

const Museum = () => {
    const artifacts = artifactsData.artifacts;
    const gallery = artifactsData.gallery;

  //useEffect(() => {
    //const fetchData = async () => {
      //const result = await axios.get('.../public/db.json');
      //setArtifacts(result.data.artifacts);
      //setGallery(result.data.gallery);
    //};

    //fetchData();
  //}, []);

  return (
    <div>
      <h2>Artifacts</h2>
      {artifacts.map((artifact) => (
        <div key={artifact.id}>
          <p>{artifact.name}</p>
          <p>{artifact.description}</p>
        </div>
      ))}
      <h2>Gallery</h2>
      {gallery.map((item) => (
        <div key={item.id}>
          {/* Render gallery data */}
          {/* ... */}
        </div>
      ))}
    </div>
  );
};

export default Museum;
