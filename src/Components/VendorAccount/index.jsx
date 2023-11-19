import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import { logout } from "../../Redux/Actions/VendorActions";
import EditProfile from "./EditProfile";
import ListProperty from "../ListProperty/index";

import "./style.css"
function MyAccount() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    toast.success("You have been Logged out");
    return <Navigate replace to="/" />;
  }
  
  return (
    <div className="Container">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row className="mt-5">
      <Col sm={12} md={2} className="border ">
        <Nav variant="pills" className="flex-column mt-3 pb-5">

          <Nav.Item className="my-2 mx-0">
            <Nav.Link className="p-3" eventKey="first" style={{ backgroundColor: "#41b354", color: "white" }}>
              {" "}
              <i class="fa-solid fa-user-pen"></i> Edit Profile
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="my-2 mx-0">
            <Nav.Link className="p-3" eventKey="second" style={{ backgroundColor: "#41b354", color: "white" }}>
              {" "}
              <i class="fa-solid fa-user-pen"></i>List Property
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="my-2 mx-0">
            <Nav.Link
            style={{ backgroundColor: "#41b354", color: "white" }}
              className="p-3"
              eventKey="third"
              onClick={() => {
                dispatch(logout(setRedirect));
              }}
            >
              {" "}
              <i className="fas fa-sign-out-alt"></i> Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={12} md={10} className="border">
        <Tab.Content className="pb-5  ">
          <Tab.Pane eventKey="first">
            <EditProfile />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <ListProperty />
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  </div>
  );
}

export default MyAccount;
