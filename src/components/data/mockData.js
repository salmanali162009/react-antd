export const statCards = [
  {
    key: 'sales',
    title: 'Total Sales',
    value: 98420,
    prefix: '$',
    precision: 0,
    change: 12.4,
    trend: 'up',
    progress: 82,
    suffix: '% of target',
    color: '#1677ff',
  },
  {
    key: 'users',
    title: 'Active Users',
    value: 48213,
    precision: 0,
    change: 8.1,
    trend: 'up',
    progress: 74,
    suffix: '% of target',
    color: '#52c41a',
  },
  {
    key: 'revenue',
    title: 'Revenue',
    value: 156230,
    prefix: '$',
    precision: 2,
    change: -3.2,
    trend: 'down',
    progress: 61,
    suffix: '% of target',
    color: '#faad14',
  },
  {
    key: 'orders',
    title: 'Orders',
    value: 12650,
    precision: 0,
    change: 5.6,
    trend: 'up',
    progress: 68,
    suffix: '% of target',
    color: '#722ed1',
  },
];

export const goals = [
  {
    key: 'sales',
    title: 'Monthly Sales Goal',
    percent: 78,
    status: 'active',
    color: '#1677ff',
    detail: '$78.4k of $100k',
  },
  {
    key: 'users',
    title: 'User Acquisition',
    percent: 45,
    status: 'normal',
    color: '#52c41a',
    detail: '4,512 of 10,000',
  },
  {
    key: 'storage',
    title: 'Storage Usage',
    percent: 68,
    status: 'active',
    color: '#faad14',
    detail: '68 GB of 100 GB',
  },
  {
    key: 'uptime',
    title: 'Server Uptime',
    percent: 99.9,
    status: 'success',
    color: '#13c2c2',
    detail: '99.9% availability',
  },
];

export const categories = [
  { value: 'retail', label: 'Retail' },
  { value: 'saas', label: 'SaaS' },
  { value: 'services', label: 'Services' },
  { value: 'ecommerce', label: 'E-commerce' },
];

export const statuses = [
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'Pending' },
  { value: 'failed', label: 'Failed' },
];

export const transactions = [
  {
    id: 'TX-1042',
    customer: 'Olivia Martin',
    category: 'retail',
    amount: 1240.0,
    date: '2026-07-29',
    status: 'completed',
    method: 'Credit Card',
  },
  {
    id: 'TX-1043',
    customer: 'Jackson Lee',
    category: 'saas',
    amount: 540.75,
    date: '2026-07-28',
    status: 'pending',
    method: 'PayPal',
  },
  {
    id: 'TX-1044',
    customer: 'Sophia Turner',
    category: 'ecommerce',
    amount: 89.99,
    date: '2026-07-28',
    status: 'completed',
    method: 'Credit Card',
  },
  {
    id: 'TX-1045',
    customer: 'Liam Walker',
    category: 'services',
    amount: 3200.0,
    date: '2026-07-27',
    status: 'failed',
    method: 'Bank Transfer',
  },
  {
    id: 'TX-1046',
    customer: 'Emma Davis',
    category: 'saas',
    amount: 210.4,
    date: '2026-07-26',
    status: 'completed',
    method: 'PayPal',
  },
  {
    id: 'TX-1047',
    customer: 'Noah Anderson',
    category: 'retail',
    amount: 75.5,
    date: '2026-07-25',
    status: 'pending',
    method: 'Credit Card',
  },
  {
    id: 'TX-1048',
    customer: 'Ava Thompson',
    category: 'services',
    amount: 960.0,
    date: '2026-07-24',
    status: 'completed',
    method: 'Bank Transfer',
  },
  {
    id: 'TX-1049',
    customer: 'Mason Harris',
    category: 'ecommerce',
    amount: 156.3,
    date: '2026-07-23',
    status: 'failed',
    method: 'Credit Card',
  },
];

export const announcements = [
  {
    key: 'sale',
    color: 'linear-gradient(135deg, #1677ff 0%, #69b1ff 100%)',
    icon: 'fire',
    title: 'Mid-Year Mega Sale is Live!',
    description: 'Up to 40% off on all subscriptions until August 15. Upgrade now to unlock exclusive deals.',
  },
  {
    key: 'feature',
    color: 'linear-gradient(135deg, #722ed1 0%, #b37feb 100%)',
    icon: 'rocket',
    title: 'New Analytics Dashboard',
    description: 'Explore the brand-new real-time analytics module with advanced filtering and export options.',
  },
  {
    key: 'security',
    color: 'linear-gradient(135deg, #13c2c2 0%, #5cdbd3 100%)',
    icon: 'shield',
    title: 'Security Update',
    description: 'Two-factor authentication is now available for all accounts. Enable it to keep your data safe.',
  },
];

export const feedback = [
  {
    id: 1,
    customer: 'Olivia Martin',
    comment: 'Fast checkout and great product quality. Highly recommended!',
    rating: 5,
    date: '2026-07-29',
    status: 'completed',
  },
  {
    id: 2,
    customer: 'Jackson Lee',
    comment: 'Support replied a bit slowly, but the solution worked in the end.',
    rating: 3,
    date: '2026-07-28',
    status: 'pending',
  },
  {
    id: 3,
    customer: 'Sophia Turner',
    comment: 'Loved the new UI. Everything is intuitive and smooth.',
    rating: 5,
    date: '2026-07-27',
    status: 'completed',
  },
  {
    id: 4,
    customer: 'Liam Walker',
    comment: 'Order arrived damaged, hoping for a faster refund process.',
    rating: 2,
    date: '2026-07-26',
    status: 'failed',
  },
];

export const satisfactionDistribution = [
  { label: '5 stars', percent: 58, color: '#52c41a' },
  { label: '4 stars', percent: 24, color: '#a0d911' },
  { label: '3 stars', percent: 10, color: '#faad14' },
  { label: '2 stars', percent: 5, color: '#fa8c16' },
  { label: '1 star', percent: 3, color: '#f5222d' },
];

export const userProfile = {
  name: 'Alex Morgan',
  role: 'Product Manager',
  email: 'alex.morgan@company.com',
  location: 'San Francisco, CA',
  team: 'Growth',
  phone: '+1 (555) 012-3456',
  scanUrl: 'https://ant.design',
  joinDate: '2023-04-12',
};
