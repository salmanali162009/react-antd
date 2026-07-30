import { Card, Col, Progress, Row, Statistic, Tag, Tooltip } from 'antd';
import {
  ShoppingOutlined,
  TeamOutlined,
  DollarOutlined,
  InboxOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { statCards } from '../data/mockData';

const icons = {
  sales: <ShoppingOutlined />,
  users: <TeamOutlined />,
  revenue: <DollarOutlined />,
  orders: <InboxOutlined />,
};

export default function StatCards() {
  return (
    <Row gutter={[16, 16]}>
      {statCards.map((item) => (
        <Col key={item.key} xs={24} sm={12} lg={6}>
          <Card className="app-stat-card" variant="borderless">
            <div className="app-stat-head">
              <div className="app-stat-icon" style={{ background: `${item.color}1f`, color: item.color }}>
                {icons[item.key]}
              </div>
              <Tooltip title={`${item.value} is ${item.progress}% of the monthly target`}>
                <QuestionCircleOutlined className="app-stat-help" />
              </Tooltip>
            </div>
            <Statistic
              title={item.title}
              value={item.value}
              prefix={item.prefix}
              precision={item.precision}
            />
            <div className="app-stat-foot">
              <Tag color={item.trend === 'up' ? 'green' : 'red'} style={{ marginRight: 8 }}>
                {item.trend === 'up' ? <ArrowUpOutlined /> : <ArrowDownOutlined />} {item.change}%
              </Tag>
              <span className="app-stat-vs">vs last week</span>
            </div>
            <Progress
              percent={item.progress}
              strokeColor={item.color}
              size="small"
              format={(percent) => `${percent}%`}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
}
