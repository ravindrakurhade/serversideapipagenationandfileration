import axios from "axios";
import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Trash } from "react-bootstrap-icons";
import { PencilSquare } from "react-bootstrap-icons";



const UsersInfo = ({ userInfo }) => {




  
  // const handleUserUpdate = async(user, id) => {
  //   await axios.put(
  //     `https://ixonotest.herokuapp.com/api/User/submit-profile/${id}`
  //   );
  // }

  // const userDelete = (id, e) => {
  //   e.preventDefault();
  //   axios.delete(`https://ixonotest.herokuapp.com/api/User/submit-profile/${id}`)
  //   .then((res) => {
  //     console.log('Deleted !!!', res);
  //     window.alert('User Delete Sucessfully.')
  //   }).catch((err) => {
  //     console.log(err);
  //     window.alert('Not User Delete!!!!')
  //   });
  // }

  return (
    <div className="d-flex p-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>User Name</th>
            <th>Mobile</th>
            {/* <th>Edit</th>
            <th>Delete</th> */}
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
                {/* <td>
                  <Button
                    onClick={() => handleUserUpdate(user)}
                    variant="outline-warning"
                  >
                    <PencilSquare />
                  </Button>
                </td> */}
                {/* <td>
                  <Button
                    onClick={(e) => userDelete(user.id, e)}
                    variant="outline-danger"
                  >
                    <Trash />
                  </Button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersInfo;
