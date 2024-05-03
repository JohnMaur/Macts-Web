// export default CustomSidebar;
// import React, { useState } from 'react';
// import { Layout, Menu, theme } from 'antd';
// import { Link } from 'react-router-dom'; // Import Link component
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
//   UserAddOutlined,
//   AppstoreOutlined,
//   IdcardOutlined,
//   SolutionOutlined,
//   FileDoneOutlined,
//   LogoutOutlined,
// } from '@ant-design/icons';

// const { Sider } = Layout;
// const { SubMenu } = Menu;

// function getItem(label, key, icon, children, link) {
//   if (children) {
//     return {
//       key,
//       icon,
//       label,
//       link,
//       children: children.map((child) =>
//         getItem(child.label, child.key, null, child.children, child.link)
//       ),
//     };
//   }
//   return {
//     key,
//     icon,
//     label,
//     link,
//   };
// }

// const items = [
//   getItem('Dashboard', '1', <IdcardOutlined />, null, '/dashboard'),
//   getItem('Add Faculty', 'sub1', <UserAddOutlined />, [
//     getItem('Teacher', '2', null, null, '/tom'),
//     getItem('Registrar', '3', null, null, '/bill'),
//     getItem('Librarian', '4', null, null, '/alex'),
//     getItem('Gym personel', '5', null, null, '/alex'),
//     getItem('Guard', '6', null, null, '/alex'),
//   ]),
//   getItem('Report', 'sub2', <SolutionOutlined />, [
//     getItem('Entrance/Gate', '7', null, null, '/team1'),
//     getItem('Registrar', '8', null, null, '/team2'),
//     getItem('Gym', '9', null, null, '/team2'),
//     getItem('Library', '10', null, null, '/team2'),
//     getItem('Meeting', '11', null, null, '/team2'),
//     getItem('Attendance', '12', null, null, '/team2'),
//   ]),
//   getItem('Student Attendance', 'sub2', <FileDoneOutlined />, [
//     getItem('Entrance/Gate', '13', null, null, '/team1'),
//     getItem('Registrar', '14', null, null, '/team2'),
//     getItem('Gym', '15', null, null, '/team2'),
//     getItem('Library', '16', null, null, '/team2'),
//     getItem('Meeting', '17', null, null, '/team2'),
//     getItem('Attendance', '18', null, null, '/team2'),
//   ]),
//   getItem('Logout', 'logout', <LogoutOutlined />, null, '/login'),
// ];

// const CustomSidebar = ({ collapsed, onCollapse }) => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
//       <div className="demo-logo-vertical" />
//       <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//         {items.map((item) => {
//           if (item.children) {
//             return (
//               <SubMenu key={item.key} icon={item.icon} title={item.label}>
//                 {item.children.map((child) => (
//                   <Menu.Item key={child.key}>
//                     <Link to={child.link}>{child.label}</Link>
//                   </Menu.Item>
//                 ))}
//               </SubMenu>
//             );
//           }
//           return (
//             <Menu.Item key={item.key} icon={item.icon}>
//               <Link to={item.link}>{item.label}</Link>
//             </Menu.Item>
//           );
//         })}
//       </Menu>
//     </Sider>
//   );
// };

// export default CustomSidebar;
// import React, { useContext } from 'react';
// import { Layout, Menu, theme } from 'antd';
// import { Link } from 'react-router-dom';
// import {
//   UserAddOutlined,
//   IdcardOutlined,
//   SolutionOutlined,
//   FileDoneOutlined,
//   LogoutOutlined,
// } from '@ant-design/icons';
// import { SidebarContext } from '../SidebarContext';

// const { Sider } = Layout;
// const { SubMenu } = Menu;

// function getItem(label, key, icon, children, link) {
//   if (children) {
//     return {
//       key,
//       icon,
//       label,
//       link,
//       children: children.map((child) =>
//         getItem(child.label, child.key, null, child.children, child.link)
//       ),
//     };
//   }
//   return {
//     key,
//     icon,
//     label,
//     link,
//   };
// }

// const items = [
//   getItem('Dashboard', '1', <IdcardOutlined />, null, '/dashboard'),
//   getItem('Add Faculty', 'Add Faculty', <UserAddOutlined />, [
//     getItem('Teacher', '2', null, null, '/Faculty_registration'),
//     getItem('Registrar', '3', null, null, '/bill'),
//     getItem('Librarian', '4', null, null, '/alex'),
//     getItem('Gym personel', '5', null, null, '/alex'),
//     getItem('Guard', '6', null, null, '/alex'),
//   ]),
//   getItem('Report', 'Report', <SolutionOutlined />, [
//     getItem('Entrance/Gate', '7', null, null, '/team1'),
//     getItem('Registrar', '8', null, null, '/team2'),
//     getItem('Gym', '9', null, null, '/team2'),
//     getItem('Library', '10', null, null, '/team2'),
//     getItem('Meeting', '11', null, null, '/team2'),
//     getItem('Attendance', '12', null, null, '/team2'),
//   ]),
//   getItem('Student Attendance', 'Student Attendance', <FileDoneOutlined />, [
//     getItem('Entrance/Gate', '13', null, null, '/team1'),
//     getItem('Registrar', '14', null, null, '/team2'),
//     getItem('Gym', '15', null, null, '/team2'),
//     getItem('Library', '16', null, null, '/team2'),
//     getItem('Meeting', '17', null, null, '/team2'),
//     getItem('Attendance', '18', null, null, '/team2'),
//   ]),
//   getItem('Logout', 'logout', <LogoutOutlined />, null, '/login'),
// ];

// const CustomSidebar = () => {
//   const { collapsed } = useContext(SidebarContext);

//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <Sider
//       collapsible
//       collapsed={collapsed}
//       onCollapse={() => {}} // This is a placeholder since onCollapse is not used in this component
//       width={250} 
//       style={{
//         overflow: 'auto',
//         height: '100vh',
//         left: 0,
//       }}
//     >
//       <div className="demo-logo-vertical" />
//       <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//         {items.map((item) => {
//           if (item.children) {
//             return (
//               <SubMenu key={item.key} icon={item.icon} title={item.label}>
//                 {item.children.map((child) => (
//                   <Menu.Item key={child.key}>
//                     <Link to={child.link}>{child.label}</Link>
//                   </Menu.Item>
//                 ))}
//               </SubMenu>
//             );
//           }
//           return (
//             <Menu.Item key={item.key} icon={item.icon}>
//               <Link to={item.link}>{item.label}</Link>
//             </Menu.Item>
//           );
//         })}
//       </Menu>
//     </Sider>
//   );
// };

// export default CustomSidebar;


import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { Link, useLocation } from 'react-router-dom'; // Import Link component and useLocation hook
import {
  UserAddOutlined,
  IdcardOutlined,
  SolutionOutlined,
  FileDoneOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

function getItem(label, key, icon, children, link) {
  if (children) {
    return {
      key,
      icon,
      label,
      link,
      children: children.map((child) =>
        getItem(child.label, child.key, null, child.children, child.link)
      ),
    };
  }
  return {
    key,
    icon,
    label,
    link,
  };
}

const items = [
  getItem('Dashboard', 'dashboard', <IdcardOutlined />, null, '/dashboard'),
  getItem('Teacher', 'teacher', <IdcardOutlined />, null, '/Faculty_registration'),
  getItem('Add Faculty', 'addFaculty', <UserAddOutlined />, [
    getItem('Teacher', 'teacher', null, null, '/Faculty_registration'),
    getItem('Registrar', 'registrar', null, null, '/bill'),
    getItem('Librarian', 'librarian', null, null, '/alex'),
    getItem('Gym personnel', 'gymPersonnel', null, null, '/alex'),
    getItem('Guard', 'guard', null, null, '/alex'),
  ]),
  getItem('Report', 'report', <SolutionOutlined />, [
    getItem('Entrance/Gate', 'entrance', null, null, '/team1'),
    getItem('Registrar', 'reportRegistrar', null, null, '/team2'),
    getItem('Gym', 'gymReport', null, null, '/team2'),
    getItem('Library', 'libraryReport', null, null, '/team2'),
    getItem('Meeting', 'meetingReport', null, null, '/team2'),
    getItem('Attendance', 'attendanceReport', null, null, '/team2'),
  ]),
  getItem('Student Attendance', 'studentAttendance', <FileDoneOutlined />, [
    getItem('Entrance/Gate', 'studentEntrance', null, null, '/team1'),
    getItem('Registrar', 'studentRegistrar', null, null, '/team2'),
    getItem('Gym', 'studentGym', null, null, '/team2'),
    getItem('Library', 'studentLibrary', null, null, '/team2'),
    getItem('Meeting', 'studentMeeting', null, null, '/team2'),
    getItem('Attendance', 'studentAttendanceReport', null, null, '/team2'),
  ]),
  getItem('Logout', 'logout', <LogoutOutlined />, null, '/login'),
];

const CustomSidebar = ({ collapsed, onCollapse }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState('');

  // Find the matching key for the current pathname
  const findSelectedKey = (pathname, items) => {
    for (const item of items) {
      if (item.children) {
        const foundInChildren = findSelectedKey(pathname, item.children);
        if (foundInChildren) return item.key;
      } else {
        if (item.link === pathname) return item.key;
      }
    }
    return null;
  };

  useState(() => {
    const selectedKey = findSelectedKey(location.pathname, items);
    setSelectedKey(selectedKey);
  }, [location.pathname, items]);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={250} 
      style={{
        overflow: 'auto',
        height: '100vh',
        left: 0,
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={[selectedKey]} mode="inline">
        {items.map((item) => {
          if (item.children) {
            return (
              <SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map((child) => (
                  <Menu.Item key={child.key}>
                    <Link to={child.link}>{child.label}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          }
          return (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.link}>{item.label}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default CustomSidebar;



