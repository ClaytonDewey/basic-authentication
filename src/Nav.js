import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
  HomeOutlined,
  ProfileOutlined,
  FileProtectOutlined,
} from '@ant-design/icons';

const Nav = ({ current }) => {
  return (
    <div>
      <Menu selectedKeys={[current]} mode='horizontal'>
        <Menu.Item key='home'>
          <Link to='/'>
            <HomeOutlined />
            Home
          </Link>
          <Menu.Item key='profile'>
            <Link to='/profile'>
              <ProfileOutlined />
              Profile
            </Link>
          </Menu.Item>
          <Menu.Item key='protected'>
            <Link to='/protected'>
              <FileProtectOutlined />
              Protected
            </Link>
          </Menu.Item>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
