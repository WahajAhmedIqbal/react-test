import React, { useState } from 'react';

const AddUserModal = ({ onClose, onAddUser }) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !userAge) return;

    const newUser = {
      id: Date.now(),
      name: userName,
      age: parseInt(userAge)
    };

    onAddUser(newUser);
    onClose();
  };

  return (
    <div className="fixed z-[4] bg-white max-w-[450px] w-full rounded-lg py-10 px-5 left-1/2 top-1/2 -translate-1/2">
      <div onClick={onClose} className="absolute right-4 top-5 cursor-pointer hover:rotate-12 transition">
        <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path></svg>
      </div>
      <h5 className="text-2xl text-center font-semibold text-gray-800">Add User</h5>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="Enter name" className="border p-2 rounded" required />
        <input type="number" value={userAge} onChange={e => setUserAge(e.target.value)} placeholder="Enter age" className="border p-2 rounded" required />
        <button type="submit" className="cursor-pointer bg-gray-800 text-white py-2 rounded hover:bg-gray-700">Submit</button>
      </form>
    </div>
  );
};

export default AddUserModal;
