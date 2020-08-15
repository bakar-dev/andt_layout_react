import React from "react";
import { Row, Col, Avatar } from "antd";

import { PIC_URL } from "../../Constants/commonValues";

const Profile = ({ user: { name, email, followers } }) => {
  return (
    <div>
      <Row>
        <Col xs={5} sm={5}>
          <Avatar src={PIC_URL} />
        </Col>
        <Col>
          <b>{name}</b>
          <p className="mb-4">{email}</p>
          <i>
            <b>{followers}</b> followers
          </i>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
