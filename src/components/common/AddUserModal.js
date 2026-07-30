import { useEffect } from 'react';
import { DatePicker, Form, Input, Modal, Select, Space } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { categories } from '../data/mockData';

export default function AddUserModal({ open, editingUser, onClose, onSubmit }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (open) {
      if (editingUser) {
        form.setFieldsValue(editingUser);
      } else {
        form.resetFields();
      }
    }
  }, [open, editingUser, form]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      onSubmit(values);
    } catch {
      /* validation failed */
    }
  };

  return (
    <Modal
      title={
        <Space>
          <UserAddOutlined />
          {editingUser ? 'Edit User' : 'Add New User'}
        </Space>
      }
      open={open}
      onOk={handleOk}
      onCancel={onClose}
      okText={editingUser ? 'Save Changes' : 'Add User'}
      cancelText="Cancel"
      destroyOnHidden
    >
      <Form form={form} layout="vertical" name="user-form">
        <Form.Item
          name="name"
          label="Full name"
          rules={[{ required: true, message: 'Please enter the full name' }]}
        >
          <Input placeholder="e.g. Jordan Smith" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter an email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="jordan@company.com" />
        </Form.Item>
        <Form.Item name="category" label="Category" rules={[{ required: true, message: 'Please select a category' }]}>
          <Select placeholder="Select a category" options={categories} />
        </Form.Item>
        <Form.Item name="joinDate" label="Join date" rules={[{ required: true, message: 'Please pick a date' }]}>
          <DatePicker style={{ width: '100%' }} placeholder="Pick join date" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
