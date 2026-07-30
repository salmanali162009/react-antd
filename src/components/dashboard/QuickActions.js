import { Button, Card, Divider, Space, Typography } from 'antd';
import {
  DownloadOutlined,
  FileTextOutlined,
  PlusOutlined,
  ReloadOutlined,
} from '@ant-design/icons';

export default function QuickActions({ onExport, onAddUser, onRefresh, onSendReport }) {
  return (
    <Card className="app-card" title="Quick Actions" size="small">
      <Space orientation="vertical" style={{ width: '100%' }}>
        <Button block type="primary" icon={<PlusOutlined />} onClick={onAddUser}>
          Add New User
        </Button>
        <Button block icon={<DownloadOutlined />} onClick={onExport}>
          Export Data
        </Button>
        <Button block icon={<ReloadOutlined />} onClick={onRefresh}>
          Refresh Metrics
        </Button>
        <Divider style={{ margin: '4px 0' }} />
        <Typography.Text type="secondary" style={{ fontSize: 12 }}>
          Generate and share the weekly performance report with your team.
        </Typography.Text>
        <Button block type="dashed" icon={<FileTextOutlined />} onClick={onSendReport}>
          Send Weekly Report
        </Button>
      </Space>
    </Card>
  );
}
