import React, { useState } from 'react';
import UserTable from './UserTable';
import AddUserModal from './AddUserModal';
import Overlay from './Overlay';
import Toast from './Toast';

const initialUsers = [
    { id: 1, name: "Alice", age: 23 },
    { id: 2, name: "Bob", age: 27 },
    { id: 3, name: "Charlie", age: 21 },
    { id: 4, name: "Dave", age: 29 },
    { id: 5, name: "Eve", age: 25 },
];

const UserList = () => {
    const [userList, setUserList] = useState(initialUsers);
    const [toggleModal, setToggleModal] = useState(false);
    const [deletingId, setDeletingId] = useState(null);
    const [userAdded, setUserAdded] = useState(false);

    const handleDelete = (id) => {
        setDeletingId(id);
        setTimeout(() => {
            setUserList(prev => prev.filter(user => user.id !== id));
            setDeletingId(null);
        }, 500);
    };

    const handleAddUser = (user) => {
        setUserList([user, ...userList]);
        setUserAdded(true);
        setTimeout(() => setUserAdded(false), 1000);
    };

    return (
        <div className="p-4 bg-[#111827] font-montserrat h-screen flex justify-center flex-col">
            <Toast message="User Added" visible={userAdded} />
            {toggleModal && <Overlay onClick={() => setToggleModal(false)} />}

            <h1 className="max-w-4xl mx-auto text-4xl text-white mb-9">User List</h1>

            <UserTable users={userList} deletingId={deletingId} onDelete={handleDelete} />

            <button
                onClick={() => setToggleModal(true)}
                className="fixed bottom-10 right-10 z-[2] cursor-pointer bg-gray-50 dark:bg-gray-800 w-fit text-white flex items-center text-xl py-2 px-3.5 rounded-md gap-2 border-[0.5px] border-white"
            >
                Add User
                <span className="p-1 rounded-md bg-[#111827]">
                    <svg className="size-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
                    </svg>
                </span>
            </button>

            {toggleModal && (
                <AddUserModal
                    onClose={() => setToggleModal(false)}
                    onAddUser={handleAddUser}
                />
            )}

            <a target='_blank' href='https://www.linkedin.com/in/wahaj-ahmed-iqbal-4ba3b4170/'
                className="fixed top-10 right-10 z-[2] cursor-pointer bg-gray-50 dark:bg-gray-800 w-fit text-white flex items-center text-xl py-2 px-3.5 rounded-md gap-2 border-[0.5px] border-white"
            >
                <span className="p-1 rounded-md ">
                <svg className='size-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path></svg>
                </span>
            </a>


        </div>
    );
};

export default UserList;
