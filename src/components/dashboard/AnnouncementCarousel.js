import { Button, Carousel, Tag, Typography } from 'antd';
import { FireOutlined, RocketOutlined, SafetyOutlined } from '@ant-design/icons';
import { announcements } from '../data/mockData';

const icons = {
  fire: <FireOutlined />,
  rocket: <RocketOutlined />,
  shield: <SafetyOutlined />,
};

export default function AnnouncementCarousel() {
  return (
    <div className="app-carousel-wrap">
      <Carousel autoplay autoplaySpeed={4000} dots dotPlacement="right">
        {announcements.map((slide) => (
          <div key={slide.key}>
            <div className="app-carousel-slide" style={{ background: slide.color }}>
              <span className="app-carousel-icon">{icons[slide.icon]}</span>
              <Typography.Title level={4} style={{ color: '#fff', margin: '0 0 8px' }}>
                {slide.title}
              </Typography.Title>
              <Typography.Paragraph style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 12 }}>
                {slide.description}
              </Typography.Paragraph>
              <Button ghost size="small">
                Learn more
              </Button>
              <Tag color="blue" className="app-carousel-tag">
                Featured
              </Tag>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
