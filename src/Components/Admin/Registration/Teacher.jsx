import React from 'react';
import { Layout } from 'antd';

const { Content: AntdContent } = Layout;

const TeacherRegistration = ({ colorBgContainer, borderRadiusLG }) => {
  return (
    <AntdContent
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      
    </AntdContent>
  );
};

export default TeacherRegistration;