import { Card, Col, Progress, Row, Typography } from 'antd';
import { FlagOutlined } from '@ant-design/icons';
import { goals } from '../data/mockData';

export default function GoalsProgress() {
  return (
    <Card
      className="app-card"
      title={
        <span>
          <FlagOutlined style={{ marginRight: 8 }} />
          Goals &amp; Targets
        </span>
      }
    >
      <Row gutter={[16, 16]}>
        {goals.map((goal) => (
          <Col key={goal.key} xs={24} sm={12}>
            <div className="app-goal">
              <div className="app-goal-head">
                <Typography.Text strong>{goal.title}</Typography.Text>
                <Typography.Text type="secondary">{goal.detail}</Typography.Text>
              </div>
              <Progress
                percent={goal.percent}
                status={goal.status}
                strokeColor={goal.color}
                format={(percent) => `${percent}%`}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Card>
  );
}
