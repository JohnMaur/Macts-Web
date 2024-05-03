import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import CustomHeader from './Header';
import CustomSidebar from './Sidebar';
import CustomContent from './Content';

const { Content } = Layout;

const Admin_landingPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <CustomSidebar collapsed={collapsed} />
      <Layout>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <CustomContent colorBgContainer={colorBgContainer} borderRadiusLG={borderRadiusLG} />
      </Layout>
    </Layout>
  );
};

export default Admin_landingPage;