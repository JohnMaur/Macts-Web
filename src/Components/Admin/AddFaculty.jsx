import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import CustomHeader from './Header';
import CustomSidebar from './Sidebar';
import TeacherRegistration from './Registration/Teacher';

const { Content: AntdContent } = Layout;

const AddFaculty = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <CustomSidebar collapsed={collapsed} />
    <Layout>
      <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
      <AntdContent style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
        <TeacherRegistration />
      </AntdContent>
    </Layout>
  </Layout>
  );
};

export default AddFaculty;