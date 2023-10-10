import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import { logout } from "../../Redux/Actions/auth.action";
import AccountSetting from "./AccountSetting";
import "./style.css"
function VendorPortal() {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    toast.success("You have been Logged out");
    return <Navigate replace to="/" />;
  }
  
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="mt-5" style={{ margin: '5vw' }}>
        <Col sm={12} md={2} className="border ">
          <Nav variant="pills"  className="flex-column mt-3 pb-5">
            <Nav.Item className="my-2 mx-0">
              <Nav.Link className="p-3" eventKey="first"  style={{backgroundColor:"#41b354"}}>
                {" "}
                <i className="fas fa-user-circle"></i> Account Setting
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="my-2 mx-0">
              <Nav.Link
              style={{color:"#41b354"}}
                className="p-3"
                eventKey="fourth"
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
              <AccountSetting />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default VendorPortal;
