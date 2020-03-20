import React from 'react';
import { action } from '@storybook/addon-actions';
import Alert from '../components/Alert';

import 'element-theme-default'

export default {
  title: 'Alert',
  component: Alert,
};


export const view = () => {
	return (
	  <div>
      <Alert message="成功提示的文案" type="success" />
      <Alert message="消息提示的文案" type="info" />
      <Alert message="警告提示的文案" type="warning" />
      <Alert message="错误提示的文案" type="error" />
    </div>
	)
};
