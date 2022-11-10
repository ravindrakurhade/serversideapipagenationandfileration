import React from "react";

const UsersInfo = ({ userInfo }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Name</th>
            <th>Mobile</th>
          </tr>
        </thead>

        <tbody>
          {userInfo.map((user) => {
            return (
              <tr>
                <td>{user.id}</td>
                <td> {user.name} </td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.mobileNum}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UsersInfo;
