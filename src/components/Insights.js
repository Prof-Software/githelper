import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Insights = () => {
  // Get the repository name from the URL parameter
  const { reponame } = useParams();

  // State to store insights data
  const [insights, setInsights] = useState(null);

  // Fetch insights data when the component mounts
  useEffect(() => {
    // Dummy implementation: Fetch insights data based on the repository name
    // Replace this with your actual logic to fetch insights data from an API or database
    const fetchInsightsData = async () => {
      // Dummy data for demonstration purposes
      const dummyInsights = {
        commits: 100,
        contributors: 10,
        lastCommitDate: '2024-04-15',
        // Add more insights data as needed
      };

      // Set the insights data to state
      setInsights(dummyInsights);
    };

    fetchInsightsData();
  }, [reponame]); // Fetch data when the repository name changes

  // Render loading message if insights data is being fetched
  if (!insights) {
    return <div>Loading insights...</div>;
  }

  // Render insights data
  return (
    <div>
      <h2>Insights for {reponame}</h2>
      <p>Number of Commits: {insights.commits}</p>
      <p>Number of Contributors: {insights.contributors}</p>
      <p>Last Commit Date: {insights.lastCommitDate}</p>
      <p>Set task</p>
      <p>manage members</p>
      {/* Add more insights data as needed */}
    </div>
  );
};

export default Insights;
