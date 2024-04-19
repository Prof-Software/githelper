import React from 'react';
import RepositoryCard from './RepositoryCard'; // Import the RepositoryCard component

const Home = () => {
  // Sample repository data
  const repositories = [
    {
      name: 'Example Repository 1',
      description: 'This is the description for Example Repository 1.',
      url: 'https://github.com/example-repo-1',
      insightsUrl: '/username/insights/repo1' // Define the insights URL for repo 1
    },
    {
      name: 'Example Repository 2',
      description: 'This is the description for Example Repository 2.',
      url: 'https://github.com/example-repo-2',
      insightsUrl: '/username/insights/repo2' // Define the insights URL for repo 2
    }
    // Add more repository objects as needed
  ];

  return (
    <div>
      <h2>Home</h2>
      {/* Render RepositoryCard for each repository */}
      {repositories.map((repo, index) => (
        <RepositoryCard
          key={index}
          name={repo.name}
          description={repo.description}
          url={repo.url}
          insightsUrl={repo.insightsUrl} // Pass the insights URL to RepositoryCard
        />
      ))}
    </div>
  );
}

export default Home;
