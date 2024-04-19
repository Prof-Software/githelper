import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TaskModal = ({ onClose, onSubmit }) => {
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (taskName && deadline && description) {
      onSubmit({ taskName, deadline, description });
      setTaskName('');
      setDeadline('');
      setDescription('');
      setIsFormValid(false); // Reset form validity
    } else {
      // If any field is empty, set form validity to false
      setIsFormValid(true);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-background bg-[#00000076] flex items-center justify-center absolute h-screen w-screen top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal bg-white p-3 rounded-md"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-button border border-black rounded-md" onClick={onClose}>Close</button>
          <form onSubmit={handleSubmit}>
            <label>Task Name:</label>
            <input type="text" value={taskName} className=' border border-black rounded-md p-3' onChange={(e) => setTaskName(e.target.value)} />
            <label>Deadline:</label>
            <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
            <label>Description:</label>
            <textarea value={description}  className=' border border-black rounded-md p-3' onChange={(e) => setDescription(e.target.value)} />
            {isFormValid && <p className="text-red-500">Please fill in all fields.</p>}
            <button type="submit" disabled={!taskName || !deadline || !description}>Submit</button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TaskModal;
