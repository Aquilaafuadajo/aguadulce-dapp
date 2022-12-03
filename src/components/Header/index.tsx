import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Col, Row, Divider, Space, Typography } from 'antd';

const Header = () => {
  return (
    <div className="header">
      <Row justify="center" align="middle">
        <Col span={12}>
          <Space size={3}>
            <Typography.Title level={3}>Aguaduace</Typography.Title>
          </Space>
        </Col>
        <Col flex="flex" span={12}>
          <div className="links">
            <Space split={<Divider type="vertical" />}>
              <Link to="/">Members</Link>
              <Link to="/roles">Roles</Link>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
