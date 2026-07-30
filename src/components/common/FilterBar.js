import { DatePicker, Select, Space, Typography } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { categories, statuses } from '../data/mockData';

const { RangePicker } = DatePicker;

export default function FilterBar({ filters, onChange }) {
  const update = (key, value) => onChange({ ...filters, [key]: value });

  return (
    <Space wrap className="app-filterbar">
      <Typography.Text type="secondary" className="app-filterbar-label">
        <FilterOutlined /> Filters
      </Typography.Text>
      <Select
        allowClear
        placeholder="All categories"
        style={{ width: 160 }}
        value={filters.category}
        options={categories}
        onChange={(value) => update('category', value)}
      />
      <Select
        allowClear
        placeholder="All statuses"
        style={{ width: 160 }}
        value={filters.status}
        options={statuses}
        onChange={(value) => update('status', value)}
      />
      <RangePicker
        value={filters.range}
        placeholder={['From', 'To']}
        onChange={(value) => update('range', value)}
      />
    </Space>
  );
}
