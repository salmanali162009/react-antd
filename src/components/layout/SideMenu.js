import { Layout, Menu, Typography } from 'antd';
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  BarChartOutlined,
  TeamOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const menuItems = [
  { key: 'dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
  {
    key: 'analytics',
    icon: <BarChartOutlined />,
    label: 'Analytics',
    children: [
      { key: 'analytics-overview', label: 'Overview' },
      { key: 'analytics-reports', label: 'Reports' },
    ],
  },
  { key: 'orders', icon: <ShoppingCartOutlined />, label: 'Orders' },
  { key: 'customers', icon: <TeamOutlined />, label: 'Customers' },
  { key: 'settings', icon: <SettingOutlined />, label: 'Settings' },
  { key: 'help', icon: <QuestionCircleOutlined />, label: 'Help Center' },
];

export default function SideMenu({ collapsed, onBreakpoint, onSelect }) {
  return (
    <Sider
      className="app-sider"
      breakpoint="lg"
      collapsedWidth="0"
      collapsible
      collapsed={collapsed}
      trigger={null}
      onBreakpoint={onBreakpoint}
      width={240}
    >
      <div className="app-logo">
        <Typography.Title level={4} className="app-logo-text">
          Acme<span>Dash</span>
        </Typography.Title>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['analytics']}
        items={menuItems}
        onClick={onSelect}
      />
    </Sider>
  );
}
