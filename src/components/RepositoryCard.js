import React from 'react';
import { Link } from 'react-router-dom';

// RepositoryCard component
const RepositoryCard = ({ name, description, url, insightsUrl }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">View Repository</a>
      <Link to={insightsUrl}>View Insights</Link>
    </div>
  );
};

export default RepositoryCard;
