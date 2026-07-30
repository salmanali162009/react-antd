import {
  Avatar,
  Button,
  Descriptions,
  Divider,
  Drawer,
  QRCode,
  Rate,
  Space,
  Switch,
  Tag,
  Typography,
} from 'antd';
import { App as AntApp } from 'antd';
import {
  QrcodeOutlined,
  SaveOutlined,
  StarOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { userProfile } from '../data/mockData';

export default function ProfileDrawer({ open, onClose }) {
  const { notification } = AntApp.useApp();

  const handleRate = (value) => {
    notification.info({
      message: 'Thanks for the feedback!',
      description: `You rated your dashboard experience ${value} star${value > 1 ? 's' : ''}.`,
      placement: 'bottomRight',
    });
  };

  const handleSave = () => {
    notification.success({
      message: 'Settings saved',
      description: 'Your profile preferences have been updated.',
      placement: 'bottomRight',
    });
    onClose();
  };

  return (
    <Drawer
      title="Profile Settings"
      placement="right"
      size="default"
      open={open}
      onClose={onClose}
      extra={<Tag color="green">Online</Tag>}
    >
      <div className="app-profile-head">
        <Avatar size={72} icon={<UserOutlined />} />
        <Typography.Title level={4} style={{ margin: '12px 0 0' }}>
          {userProfile.name}
        </Typography.Title>
        <Typography.Text type="secondary">{userProfile.role}</Typography.Text>
      </div>

      <Divider />

      <Descriptions column={1} size="middle">
        <Descriptions.Item label="Email">{userProfile.email}</Descriptions.Item>
        <Descriptions.Item label="Location">{userProfile.location}</Descriptions.Item>
        <Descriptions.Item label="Team">{userProfile.team}</Descriptions.Item>
        <Descriptions.Item label="Phone">{userProfile.phone}</Descriptions.Item>
        <Descriptions.Item label="Joined">
          <Tag color="blue">{userProfile.joinDate}</Tag>
        </Descriptions.Item>
      </Descriptions>

      <Divider />

      <div className="app-profile-qr">
        <Space orientation="vertical" align="center" size={8}>
          <Typography.Text type="secondary">
            <QrcodeOutlined /> Scan to open the app
          </Typography.Text>
          <QRCode value={userProfile.scanUrl} size={160} />
        </Space>
      </div>

      <Divider />

      <Space direction="vertical" style={{ width: '100%' }} size="small">
        <Typography.Text type="secondary">
          <StarOutlined /> Rate your dashboard experience
        </Typography.Text>
        <Rate allowHalf defaultValue={4.5} onChange={handleRate} />

        <div className="app-setting-row">
          <span>Push notifications</span>
          <Switch defaultChecked />
        </div>
        <div className="app-setting-row">
          <span>Weekly email summary</span>
          <Switch />
        </div>

        <Button
          type="primary"
          block
          icon={<SaveOutlined />}
          onClick={handleSave}
          style={{ marginTop: 8 }}
        >
          Save Settings
        </Button>
      </Space>
    </Drawer>
  );
}
