import React from 'react';

const TableRow = ({ user, onDelete, isDeleting }) => {
  return (
    <tr className={`border-b group border-gray-200 dark:border-gray-700 transition-all duration-500 ${isDeleting ? "animate-fadeOut" : ""}`}>
      <td className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">{user.name}</td>
      <td className="px-6 py-4">{user.age}</td>
      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
        >
          <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
