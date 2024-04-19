// Insights.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskModal from './TaskModal';
import { AnimatePresence } from 'framer-motion';
import ManageMembersModal from './ManageMembersModal';

const Insights = () => {
  const { reponame } = useParams();
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
 // Sample member data
 const [members, setMembers] = useState([
    { name: 'John Doe', email: 'john@example.com', position: 'Member' },
    { name: 'Jane Smith', email: 'jane@example.com', position: 'Moderator' },
    // Add more members as needed
  ]);

  // State to manage modal visibility
  const [isMembersModalOpen, setIsMembersModalOpen] = useState(false);

  const handleOpenMembersModal = () => {
    setIsMembersModalOpen(true);
  };

  const handleCloseMembersModal = () => {
    setIsMembersModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTaskSubmit = (task) => {
    setTasks([...tasks, task]);
    handleCloseModal();
  };

  return (
    <div>
      <h2 className='text-4xl font-bold'>Insights for {reponame}</h2>
      <button className='p-2 text-xl bg-orange-400 rounded-md my-7' onClick={handleOpenModal}>Set Task</button>
      <button onClick={handleOpenMembersModal}>Manage Members</button>

      <div>
        <h3 className='text-4xl font-bold'>Tasks</h3>
        {tasks.map((task, index) => (
          <div key={index}>
            <p>Task: {task.taskName}</p>
            <p>Deadline: {task.deadline}</p>
            <p>Description: {task.description}</p>
            {/* Add status and instructions for each task */}
          </div>
        ))}
      </div>
      {/* Manage Members Modal */}
      <AnimatePresence>
        {isMembersModalOpen && (
          <ManageMembersModal onClose={handleCloseMembersModal} members={members} />
        )}
      </AnimatePresence>

      {isModalOpen && <TaskModal onClose={handleCloseModal} onSubmit={handleTaskSubmit} />}
    </div>
  );
};

export default Insights;
