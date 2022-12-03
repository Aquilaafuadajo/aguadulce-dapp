import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Divider, Space, Typography } from 'antd';

const Header = () => {
  return (
    <div className="header bg-white w-full fixed t-0 py-6 px-4">
      <Row justify="center" align="middle">
        <Col span={12}>
          <Space size={3}>
            <Typography.Title level={3}>Aguaduace</Typography.Title>
          </Space>
        </Col>
        <Col flex="flex" span={12}>
          <div className="links flex justify-end">
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
