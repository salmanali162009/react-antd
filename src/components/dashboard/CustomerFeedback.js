import { Card, Col, Divider, Progress, Rate, Row, Space, Statistic, Tag, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { feedback, satisfactionDistribution } from '../data/mockData';

const statusTag = {
  completed: { color: 'success', label: 'Completed' },
  pending: { color: 'processing', label: 'Pending' },
  failed: { color: 'error', label: 'Failed' },
};

const averageRating = (
  feedback.reduce((sum, item) => sum + item.rating, 0) / feedback.length
).toFixed(1);

export default function CustomerFeedback() {
  return (
    <Card className="app-card" title="Customer Satisfaction">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <div className="app-rating-summary">
            <Statistic
              title="Average Rating"
              value={averageRating}
              prefix={<StarFilled style={{ color: '#faad14' }} />}
            />
            <Rate disabled value={Number(averageRating)} />
            <Typography.Text type="secondary">
              Based on {feedback.length} recent reviews
            </Typography.Text>
          </div>
          <div className="app-rating-distribution">
            {satisfactionDistribution.map((row) => (
              <div key={row.label} className="app-rating-row">
                <Typography.Text type="secondary" className="app-rating-label">
                  {row.label}
                </Typography.Text>
                <Progress
                  percent={row.percent}
                  strokeColor={row.color}
                  size="small"
                  showInfo={false}
                />
              </div>
            ))}
          </div>
        </Col>
        <Col xs={24} md={16}>
          {feedback.map((item) => (
            <div key={item.id} className="app-feedback-item">
              <div className="app-feedback-head">
                <Typography.Text strong>{item.customer}</Typography.Text>
                <Space size={8}>
                  <Rate disabled allowHalf value={item.rating} style={{ fontSize: 14 }} />
                  <Tag color={statusTag[item.status].color}>{statusTag[item.status].label}</Tag>
                </Space>
              </div>
              <Typography.Paragraph type="secondary" style={{ marginBottom: 0 }}>
                {item.comment}
              </Typography.Paragraph>
              <Divider style={{ margin: '12px 0' }} />
            </div>
          ))}
        </Col>
      </Row>
    </Card>
  );
}
