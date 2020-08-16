import React from "react";
import { Card, Row, Col, Avatar, Button } from "antd";
import {
  DownOutlined,
  UserDeleteOutlined,
  AudioMutedOutlined,
  CloseCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import DropDown from "../../Components/Dropdown/dropdown";

const DROPDOWN_iTEMS = [
  { label: "Unfollow", key: "unfollow", icon: <UserDeleteOutlined /> },
  { label: "Mute", key: "mute", icon: <AudioMutedOutlined /> },
  { label: "Block", key: "block", icon: <CloseCircleOutlined /> },
  { label: "Report Content", key: "report", icon: <WarningOutlined /> },
];

const Feed = ({ feed: { avatar, name, designation, bio, fee } }) => {
  return (
    <Card className="mt-4" style={{ borderRadius: "10px" }}>
      <Row>
        <Col>
          <Row>
            <Col xs={3} sm={3} md={3} lg={3} xl={2}>
              <Avatar src={avatar} className="mr-1" />
            </Col>
            <Col xs={21} sm={21} md={21} lg={21} xl={22}>
              <span className="float-right">
                <DropDown items={DROPDOWN_iTEMS} selectedKeys={["unfollow"]}>
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
