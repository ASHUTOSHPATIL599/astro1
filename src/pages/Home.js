import React, { useState } from "react";
import "./Home.css";

const images = [
  "https://via.placeholder.com/800x400?text=Image+1",
  "https://via.placeholder.com/800x400?text=Image+2",
  "https://via.placeholder.com/800x400?text=Image+3",
];

const videoLinks = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Example video URLs
  "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
  "https://www.youtube.com/watch?v=9bZkp7q19f0",
];
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px", // Space between videos
    padding: "20px",
  },
  videoItem: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    height: "200px", // Adjust height as needed
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
  },
};
const cardDetails = [
  {
    id: 1,
    title: "Card 1",
    info: "Information about card 1",
    backgroundImage: "https://via.placeholder.com/300x200?text=Background+1",
  },
  {
    id: 2,
    title: "Card 2",
    info: "Information about card 2",
    backgroundImage: "https://via.placeholder.com/300x200?text=Background+2",
  },
  {
    id: 3,
    title: "Card 3",
    info: "Information about card 3",
    backgroundImage: "https://via.placeholder.com/300x200?text=Background+3",
  },
  {
    id: 4,
    title: "Card 4",
    info: "Information about card 4",
    backgroundImage: "https://via.placeholder.com/300x200?text=Background+4",
  },
  {
    id: 5,
    title: "Card 5",
    info: "Information about card 5",
    backgroundImage: "https://via.placeholder.com/300x200?text=Background+5",
  },
  {
    id: 6,
    title: "Card 6",
    info: "Information about card 6",
    backgroundImage: "https://via.placeholder.com/300x200?text=Background+6",
  },
];

const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$25.00",
    image: "https://via.placeholder.com/300x200?text=Product+1",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$30.00",
    image: "https://via.placeholder.com/300x200?text=Product+2",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$45.00",
    image: "https://via.placeholder.com/300x200?text=Product+3",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-control-next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <h1>products</h1>
      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>
              <p className="card-price">{product.price}</p>
              <button className="card-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <h1>Category</h1>
      <div className="card-container">
        {cardDetails.map((card) => (
          <div
            className="info-card"
            key={card.id}
            style={{ backgroundImage: `url(${card.backgroundImage})` }}
          >
            <div className="info-card-body">
              <h3 className="info-card-title">{card.title}</h3>
              <p className="info-card-info">{card.info}</p>
            </div>
          </div>
        ))}
      </div>

      <h1>Videos</h1>
      <div style={styles.container}>
        {videoLinks.map((url, index) => (
          <div style={styles.videoItem} key={index}>
            <iframe
              src={`https://www.youtube.com/embed/${url.split("v=")[1]}`}
              title={`YouTube video ${index + 1}`}
              style={styles.iframe}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
