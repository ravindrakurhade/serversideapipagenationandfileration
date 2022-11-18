import React, { useState, useEffect } from "react";
import axios from "axios";
import UsersInfo from "./UsersInfo";
import { Button, Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import DataTable,{createTheme} from "react-data-table-component";

createTheme("solarized", {
  text: {
    default: "#000",
  },
  background: {
    default: "#19a5a1",
  },
  striped: {
    default: "#fff",
  },
})
  

const columns = [
  {
    name: " ID",
    selector: (row) => row.id,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Password",
    selector: (row) => row.password,
  },
  {
    name: "UserName",
    selector: (row) => row.username,
    sortable: true,
  },
  {
    name: "Mobile No",
    selector: (row) => row.mobileNum,
  },
];

const UserPostData = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobileNum: "",
  });

  const [userInfo, setUserInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [filterUsers, setFilterUsers] = useState([]);
  const [isShowData, setShowData] = useState(true);


  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };


  //post call 
  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password, username, mobileNum } = user;
    try {
      const res = await axios.post(
        "https://ixonotest.herokuapp.com/api/User/submit-profile",
        { name, email, password, username, mobileNum }
      );
      console.log(res.data);
      window.alert('Post Data ')
    } catch (error) {
      console.log(error.res);
      window.alert("Invalid Profile");
      
    }
  };


    
//get call
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        "https://ixonotest.herokuapp.com/api/User/get-profiles"
      );
      console.log(res.data);
      setUserInfo(res.data);
      setFilterUsers(res.data);
    }

    getData();
  }, []);

// filter code 

 useEffect(() => {
   const result = userInfo.filter((user) => {
     return user.name.toLowerCase().match(search.toLowerCase());
   });
   setFilterUsers(result);
 }, [search]);


  return (
    <>
      <Container>
        <div className="d-flex justify-content-around ">
          <form method="POST">
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Name
              </InputGroup.Text>
              <Form.Control
                placeholder="Name"
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputs}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Email
              </InputGroup.Text>
              <Form.Control
                placeholder="Email"
                id="typeEmail"
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputs}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Password
              </InputGroup.Text>
              <Form.Control
                placeholder="Password"
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputs}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                UserName
              </InputGroup.Text>
              <Form.Control
                placeholder="Username"
                type="username"
                name="username"
                value={user.username}
                onChange={handleInputs}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Mobile No
              </InputGroup.Text>
              <Form.Control
                placeholder="Mobile No"
                id="typePhone"
                type="tel"
                name="mobileNum"
                value={user.mobileNum}
                onChange={handleInputs}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Button type="submit" variant="outline-dark" onClick={PostData}>
                Sumbit
              </Button>
            </InputGroup>
          </form>
        </div>
      </Container>
      <div className="">
        <Button variant="outline-dark" onClick={() => setShowData(!isShowData)}>
          Show User
        </Button>
          <div className="mt-5 square border border-dark">
            {isShowData && (
              <DataTable
                title="Users List"
                columns={columns}
                theme="solarized"
                // data={userInfo}
                data={filterUsers}
                pagination
                // paginationRowsPerPageOptions={[5, 15, 50, 100]}
                fixedHeader
                fixedHeaderScrollHeight="450px"
                highlightOnHover
                subHeader
                subHeaderComponent={
                  <input
                    type="text"
                    placeholder="Search Users here.."
                    className="w-25 form-control"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                }
                // subHeaderAlign='left'
              />
            )}
          </div>
        </div>

        {/* {isShowData && <UsersInfo userInfo={userInfo} />} */}
        {/* <button onCli`ck={(e) => userDelete(data.id, e)}>Delete</button> */}
    </>
  );
};

export default UserPostData;
