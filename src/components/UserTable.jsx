import React from 'react';
import TableRow from './TableRow';

const UserTable = ({ users, deletingId, onDelete }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-4xl mx-auto">
      <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
          <tr>
            <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Name</th>
            <th className="px-6 py-3">Age</th>
            <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length ? (
            users.map(user => (
              <TableRow
                key={user.id}
                user={user}
                onDelete={onDelete}
                isDeleting={deletingId === user.id}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-4 text-gray-500 dark:text-gray-400">No data available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
