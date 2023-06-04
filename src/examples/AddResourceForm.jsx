import { forwardRef } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

const AddResourceForm = forwardRef((props, ref) => {
  const { visible, onCancel, onCreate } = props;
  return (
    <Modal open={visible} title='New Resource' okText='Create' onCancel={onCancel} onOk={onCreate}>
      <Form ref={ref} layout='vertical'>
        <FormItem label='Name' name='name' rules={[{ required: true, message: 'Please input the name of the resource!' }]}>
          <Input />
        </FormItem>
      </Form>
    </Modal>
  );
});

export default AddResourceForm;
