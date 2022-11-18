import { useState, useEffect } from "react";
import UsersInfo from "./UsersInfo";
// import "./UserRegister.css";
import { Button, Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
const UserRegiser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobileNum: "",
  });

  const [userInfo, setUserInfo] = useState([]);

  const [isShowData, setShowData] = useState(true);

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (event) => {
    event.preventDefault();
    const { name, email, password, username, mobileNum } = user;

    const res = await fetch(
      "https://ixonotest.herokuapp.com/api/User/submit-profile",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobileNum,
          username,
          password,
        }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Profile");
      console.log("Invalid Profile");
    } else {
      window.alert("Profile Successful");
      console.log(" Successful");
    }
  };

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const requesUrl =
          "https://ixonotest.herokuapp.com/api/User/get-profiles";
        const response = await fetch(requesUrl);
        const responseJSON = await response.json();
        console.log(responseJSON);
        setUserInfo(responseJSON);
      } catch (error) {}
    }
    fetchUserInfo();
  }, []);

  // const clearData = () => {
  //   setShowData(null);
  // };
  


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
              <Button type="submit" onClick={PostData} variant="outline-dark">
                Sumbit
              </Button>
            </InputGroup>
          </form>
        </div>
      </Container>

      <div>
        <Button
          variant="outline-dark"
          onClick={() => setShowData(!isShowData)}
        >
          Show User
        </Button>
        {/* <Button className=" btn btn-lg btn-warning ms-100" onClick={clearData}>
          Clear User
        </Button> */}
        {isShowData && <UsersInfo userInfo={userInfo} />}
      </div>
    </>

    // <div>
    //   <section className="form__control">
    //     <form method="POST" className="form">
    //       <h1>Profile</h1>
    //       <label>
    //         Name:
    //         <input
    //           type="text"
    //           name="name"
    //           value={user.name}
    //           onChange={handleInputs}
    //         />
    //       </label>
    //       <br /> <br />
    //       <label>
    //         Email:
    //         <input
    //           type="email"
    //           name="email"
    //           value={user.email}
    //           onChange={handleInputs}
    //         />
    //       </label>
    //       <br /> <br />
    //       <label>
    //         Password:
    //         <input
    //           type="password"
    //           name="password"
    //           value={user.password}
    //           onChange={handleInputs}
    //         />
    //       </label>
    //       <br /> <br />
    //       <label>
    //         Mobile No:
    //         <input
    //           type="text"
    //           name="mobileNum"
    //           value={user.mobileNum}
    //           onChange={handleInputs}
    //         />
    //       </label>
    //       <br /> <br />
    //       <label>
    //         UserName:
    //         <input
    //           type="text"
    //           name="username"
    //           value={user.username}
    //           onChange={handleInputs}
    //         />
    //       </label>
    //       <br /> <br />
    //       <button type="submit" onClick={PostData}>
    //         Sumbit
    //       </button>
    //     </form>
    //   </section>

    //   <div>
    //     {/* {userInfo.map((user)=>{
    //     return (
    //       <p>
    //         {user.id}
    //         {user.name} -{user.email} -{user.mobileNum}
    //       </p>
    //     );
    //   })} */}
    //     <button onClick={() => setShowData(!isShowData)}>Show User</button>
    //     {isShowData && <UsersInfo userInfo={userInfo} />}
    //   </div>

    // </div>
  );
};

export default UserRegiser;
