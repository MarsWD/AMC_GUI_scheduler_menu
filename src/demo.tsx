import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { BellOutlined, AppstoreOutlined, CalendarOutlined, SettingOutlined, PlusOutlined, ImportOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';


const items: MenuProps['items'] = [
  {
    label: 'Schedules',
    key: 'schedules',
    icon: <CalendarOutlined />,
    children: [
      {
        label: 'New',
        key: 'newSchedule',
        icon: <PlusOutlined />,
      },
      {
        label: 'Import',
        key: 'importSchedule',
        icon: <ImportOutlined />
      },
    ],
  },
  {
    label: 'Locations',
    key: 'locations',
    icon: <AppstoreOutlined />,
    children: [
      {
        type: 'group',
        label: 'Create',
        children: [
          {
            label: 'New',
            key: 'setting:1',
            icon: <CalendarOutlined />,
          },
          {
            label: 'Import',
            key: 'setting:2',
          },
        ],
      },
    ],
  },
  {
    label: 'Methods',
    key: 'methods',
    icon: <SettingOutlined />,
  },
  {
    label: 'Alarm schemes',
    key: 'alarms',
    icon: <BellOutlined />,
  }
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;