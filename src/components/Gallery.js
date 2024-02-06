// Example export
import React, { useState, useEffect, useMemo } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);

  // Use useMemo to memoize the localGalleryData value
  const localGalleryData = useMemo(() => [
    {"id": 1, "type": "photo", "media": require("./images/rock.JPG"), "caption": "Caption 1"},

    {"id": 2, "type": "photo", "media": require("./images/baobab.png"), "caption": "Caption 2"},
    {"id": 3, "type": "photo", "media": require("./images/mzunye.jpg"), "caption": "Caption 3"},
    {"id": 4, "type": "photo", "media": require("./images/maua.JPG"), "caption": "Caption 4"},
    {"id": 4, "type": "photo", "media": require("./images/rock art.jpg"), "caption": "Caption 5"},
    {"id": 4, "type": "photo", "media": require("./images/mzee.jpg"), "caption": "Caption 6"},
    {"id": 4, "type": "photo", "media": require("./images/wawili.JPG"), "caption": "Caption 7"},
    {"id": 4, "type": "photo", "media": require("./images/rock1.jpg"), "caption": "Caption 8"},
    {"id": 4, "type": "photo", "media": require("./images/wasii.JPG"), "caption": "Caption 9"},
    {"id": 4, "type": "photo", "media": require("./images/cave.JPG"), "caption": "Caption 10"}
  ], []);

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
  }, [localGalleryData]);

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row xs={1} md={2} lg={3} className="g-4">
        {galleryData.map(item => (
          <Col key={item.id}>
            <Card>
              {item.type === 'photo' && (
                <Card.Img variant="top" src={item.media} alt={item.caption} />
              )}
              {item.type === 'video' && (
                <iframe
                  title={item.caption}
                  width="100%"
                  height="200"
                  src={item.media.replace('watch?v=', 'embed/')}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              <Card.Body>
                <Card.Title>{item.caption}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;





  