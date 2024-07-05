import React from "react";

const User = ({ user }) => {
  return (
    <li key={user.id} className="py-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>
    </li>
  );
};

export default User;
