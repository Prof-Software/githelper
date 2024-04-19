import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ManageMembersModal = ({ onClose, members }) => {
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
          <div className="member-list">
            <h2 className="text-xl font-bold mb-2">Manage Members</h2>
            <ul>
              {members.map((member, index) => (
                <li key={index} className="mb-1">
                  <span className="font-bold">{member.name}</span> - {member.email} ({member.position})
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ManageMembersModal;
