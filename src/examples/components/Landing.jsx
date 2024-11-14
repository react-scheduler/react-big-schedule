import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Slider from './Slider.jsx';

function Landing() {
  return (
    <Layout className="main-layout">
      <Layout.Header className="main-header">
        <Header />
      </Layout.Header>
      <Layout hasSider>
        <Layout.Sider breakpoint="md" theme="light">
          <Slider />
        </Layout.Sider>
        <Layout.Content className="main-content">
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default Landing;
