import { useState } from 'react';
import { App as AntApp, Col, Layout, Row } from 'antd';
import SideMenu from './layout/SideMenu';
import DashboardHeader from './layout/DashboardHeader';
import FilterBar from './common/FilterBar';
import AddUserModal from './common/AddUserModal';
import ProfileDrawer from './common/ProfileDrawer';
import StatCards from './dashboard/StatCards';
import GoalsProgress from './dashboard/GoalsProgress';
import QuickActions from './dashboard/QuickActions';
import AnnouncementCarousel from './dashboard/AnnouncementCarousel';
import TransactionsTable from './dashboard/TransactionsTable';
import CustomerFeedback from './dashboard/CustomerFeedback';

const { Content, Header } = Layout;

export default function Dashboard() {
  const { message, notification } = AntApp.useApp();

  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [filters, setFilters] = useState({ category: undefined, status: undefined, range: undefined });

  const handleExport = () => {
    notification.success({
      message: 'Export started',
      description: 'Your report is being generated and will be emailed to you shortly.',
      placement: 'bottomRight',
    });
  };

  const handleRefresh = () => {
    message.loading({ content: 'Refreshing metrics...', key: 'refresh' });
    setTimeout(() => {
      message.success({ content: 'Metrics are up to date', key: 'refresh' });
    }, 1200);
  };

  const handleSendReport = () => {
    notification.info({
      message: 'Report scheduled',
      description: 'The weekly performance report will be sent to all managers on Monday.',
      placement: 'bottomRight',
    });
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setModalOpen(true);
  };

  const handleSubmitUser = (values) => {
    setModalOpen(false);
    message.success(
      editingUser
        ? `User "${values.name}" was updated successfully.`
        : `User "${values.name}" was added successfully.`
    );
    notification.success({
      message: editingUser ? 'User updated' : 'New user added',
      description: `${values.name} (${values.email}) has been ${editingUser ? 'updated in' : 'added to'} your workspace.`,
      placement: 'bottomRight',
    });
  };

  const handleStatusAction = (record, nextStatus) => {
    message.success(
      nextStatus === 'completed'
        ? `Transaction ${record.id} approved.`
        : `Transaction ${record.id} rejected.`
    );
  };

  const handleHeaderMenu = ({ key }) => {
    if (key === 'profile') {
      setDrawerOpen(true);
    } else if (key === 'logout') {
      notification.warning({
        message: 'Signed out',
        description: 'You have been signed out (demo).',
        placement: 'bottomRight',
      });
    }
  };

  return (
    <Layout className="app-shell">
      <SideMenu
        collapsed={collapsed}
        onBreakpoint={(broken) => setCollapsed(broken)}
        onSelect={() => setCollapsed(false)}
      />
      <Layout className="app-main">
        <Header className="app-header">
          <DashboardHeader
            collapsed={collapsed}
            onToggle={() => setCollapsed(!collapsed)}
            onOpenDrawer={() => setDrawerOpen(true)}
            onDateChange={(range) => setFilters((prev) => ({ ...prev, range }))}
            onMenuClick={handleHeaderMenu}
          />
        </Header>
        <Content className="app-content">
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <AnnouncementCarousel />
            </Col>
            <Col xs={24}>
              <StatCards />
            </Col>
            <Col xs={24}>
              <FilterBar filters={filters} onChange={setFilters} />
            </Col>
            <Col xs={24} xl={16}>
              <TransactionsTable filters={filters} onStatusAction={handleStatusAction} />
            </Col>
            <Col xs={24} xl={8}>
              <QuickActions
                onExport={handleExport}
                onAddUser={handleAddUser}
                onRefresh={handleRefresh}
                onSendReport={handleSendReport}
              />
            </Col>
            <Col xs={24} xl={8}>
              <GoalsProgress />
            </Col>
            <Col xs={24} xl={16}>
              <CustomerFeedback />
            </Col>
          </Row>
        </Content>
      </Layout>

      <ProfileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <AddUserModal
        open={modalOpen}
        editingUser={editingUser}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmitUser}
      />
    </Layout>
  );
}
