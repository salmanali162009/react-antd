import { Avatar, Badge, Button, DatePicker, Dropdown, Space, Tag, Typography } from 'antd';
import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  UserOutlined,
  CalendarOutlined,
} from '@ant-design/icons';

const { RangePicker } = DatePicker;

const notificationItems = [
  { key: '1', label: 'New order received from Olivia Martin' },
  { key: '2', label: 'Server uptime dropped below 99%' },
  { key: '3', label: 'Weekly report is ready to download' },
];

export default function DashboardHeader({
  collapsed,
  onToggle,
  onOpenDrawer,
  onDateChange,
  onMenuClick,
}) {
  return (
    <div className="app-header-inner">
      <Space size="middle" className="app-header-left">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={onToggle}
          className="app-header-trigger"
        />
        <div className="app-header-title">
          <Typography.Title level={4} style={{ margin: 0 }}>
            Dashboard
          </Typography.Title>
          <Typography.Text type="secondary">Welcome back, Alex!</Typography.Text>
        </div>
      </Space>

      <Space size="middle" wrap className="app-header-right">
        <RangePicker
          className="app-header-date"
          onChange={onDateChange}
          placeholder={['Start date', 'End date']}
        />
        <Dropdown
          menu={{
            items: notificationItems.map((item) => ({
              key: item.key,
              label: item.label,
            })),
            onClick: onMenuClick,
          }}
          placement="bottomRight"
        >
          <Badge count={3} size="small">
            <Button type="text" icon={<BellOutlined />} aria-label="Notifications" />
          </Badge>
        </Dropdown>
        <Tag color="processing">
          <CalendarOutlined /> Pro Plan
        </Tag>
        <Dropdown
          menu={{
            items: [
              { key: 'profile', label: 'View Profile' },
              { key: 'logout', label: 'Sign Out' },
            ],
            onClick: onMenuClick,
          }}
        >
          <Avatar
            size={38}
            icon={<UserOutlined />}
            className="app-header-avatar"
            onClick={onOpenDrawer}
          />
        </Dropdown>
        <DownOutlined className="app-header-chevron" />
      </Space>
    </div>
  );
}
