import React from "react";
import { Card, Row, Col, Avatar, Button, Input, Switch } from "antd";
import { PaperClipOutlined, AudioOutlined } from "@ant-design/icons";
import { PIC_URL } from "../../Constants/commonValues";

const { TextArea } = Input;

const cardStyle = {
  boxShadow: "1px 1px 5px 1px rgba(208, 216, 243, 0.6)",
  borderRadius: "10px",
};
const buttonStyle = { background: "black", color: "White", width: 110 };
const textAreaStyle = {
  border: "none",
  width: "100%",
  borderBottom: "1px solid lightgray",
};

const BOTTOM_ICONS = [
  { icon: <PaperClipOutlined />, label: "Upload", style: { fontSize: "12px" } },
  {
    icon: <AudioOutlined />,
    label: "Record",
    style: { fontSize: "12px", marginLeft: "5px" },
  },
];

const FeedInput = () => {
  return (
    <Card style={cardStyle}>
      <Row>
        <Col xs={3} sm={3} md={3} lg={3} xl={2}>
          <Avatar src={PIC_URL} />
        </Col>
        <Col xs={21} sm={21} md={21} lg={21} xl={22}>
          <div style={{ width: "100%" }}>
            <span className="float-right">
              Paid Content {"  "}
              <Switch size="small" />
            </span>
            <TextArea
              style={textAreaStyle}
              placeholder="Let's write some post..."
              rows={3}
            />
          </div>
          <div className="mt-4">
            <Row>
              <Col span={22}>
                <Row>
                  {BOTTOM_ICONS.map(({ icon, label, style }, i) => (
                    <Col key={i}>
                      <Row className="ml-3">{icon}</Row>
                      <Row style={style}>{label}</Row>
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col span={2}>
                <Button
                  style={buttonStyle}
                  shape="round"
                  size="small"
                  className="float-right "
                >
                  Post
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default FeedInput;
