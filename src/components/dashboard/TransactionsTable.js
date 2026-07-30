import { Button, Card, Space, Table, Tag } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import { transactions } from '../data/mockData';

const statusTag = {
  completed: { color: 'success', label: 'Completed' },
  pending: { color: 'processing', label: 'Pending' },
  failed: { color: 'error', label: 'Failed' },
};

const categoryLabel = {
  retail: 'Retail',
  saas: 'SaaS',
  services: 'Services',
  ecommerce: 'E-commerce',
};

export default function TransactionsTable({ filters, onStatusAction }) {
  const filtered = transactions.filter((tx) => {
    const matchCategory = !filters.category || tx.category === filters.category;
    const matchStatus = !filters.status || tx.status === filters.status;
    const txTime = new Date(tx.date).getTime();
    const matchRange =
      !filters.range || !filters.range[0] || !filters.range[1] ||
      (txTime >= filters.range[0].startOf('day').valueOf() &&
        txTime <= filters.range[1].endOf('day').valueOf());
    return matchCategory && matchStatus && matchRange;
  });

  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <Tag color="geekblue">{id}</Tag>,
    },
    { title: 'Customer', dataIndex: 'customer', key: 'customer' },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category) => categoryLabel[category] || category,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => `$${amount.toFixed(2)}`,
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date) => <Tag color="default">{date}</Tag>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <Tag color={statusTag[status].color}>{statusTag[status].label}</Tag>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button
            size="small"
            type="link"
            disabled={record.status !== 'pending'}
            icon={<CheckCircleOutlined />}
            onClick={() => onStatusAction(record, 'completed')}
          >
            Approve
          </Button>
          <Button
            size="small"
            type="link"
            danger
            disabled={record.status !== 'pending'}
            icon={<CloseCircleOutlined />}
            onClick={() => onStatusAction(record, 'failed')}
          >
            Reject
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Card
      className="app-card"
      title="Recent Transactions"
      extra={<ReloadOutlined title="Refresh" style={{ color: 'rgba(0,0,0,0.45)' }} />}
    >
      <Table
        rowKey="id"
        columns={columns}
        dataSource={filtered}
        pagination={{ pageSize: 5, showSizeChanger: false }}
        scroll={{ x: 720 }}
      />
    </Card>
  );
}
