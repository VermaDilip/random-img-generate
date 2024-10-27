import React, { useState } from 'react';

const RandomImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRandomImage = async () => {
    setLoading(true); // Show loader
    const response = await fetch('https://picsum.photos/800/600'); // Random image URL
    setImageUrl(response.url); // Set the image URL to state
    setLoading(false); // Hide loader
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'random-image.jpg'; // Set a default file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Random Image Generator</h1>
      <button onClick={fetchRandomImage} style={styles.button}>
        Generate Random Image
      </button>
      {loading && <div style={styles.loader}>Loading...</div>}
      {imageUrl && !loading && (
        <div style={styles.imageContainer}>
          <img src={imageUrl} alt="Random" style={styles.image} />
          <button onClick={downloadImage} style={styles.downloadBtn}>
            Download Image
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
    transition: 'background-color 0.3s',
    fontSize: '1rem',
  },
  loader: {
    fontSize: '1.2rem',
    color: '#007bff',
    marginTop: '10px',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  image: {
    width: '80%', // Responsive width
    maxWidth: '800px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  },
  downloadBtn: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    fontSize: '1rem',
  },
};

export default RandomImageGenerator;