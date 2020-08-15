import React from "react";
import { Card, Row, Col, Avatar, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import DropDown from "../../Components/Dropdown/dropdown";

const Feed = ({ feed: { avatar, name, designation, bio, fee } }) => {
  return (
    <Card className="mt-4">
      <Row>
        <Col>
          <Row>
            <Col span={2}>
              <Avatar src={avatar} className="mr-1" />
            </Col>
            <Col span={22}>
              <span className="float-right">
                <DropDown items={[{ label: "Logout" }]}>
                  <DownOutlined />
                </DropDown>
              </span>
              <b>{name}</b>
              <p>{designation}</p>
              <p>{bio}</p>
              <div className="mt-4 pt-4">
                <b>Access Fee: ${fee}</b>
                <Button
                  style={{ background: "black", color: "White", width: 110 }}
                  shape="round"
                  size="small"
                  className="float-right "
                >
                  Purchase
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default Feed;