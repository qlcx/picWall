import React, { Component } from 'react'
import { Layout, Menu, Icon, Dropdown, Badge, Card } from 'antd'

const { Header, Content } = Layout

import './App.css' 
import logo from './logo.svg'

// 个人信息menu
const userMenu = (
	<Menu className='app_header-userMenu' >
		<Menu.Item key='0'>
			<a href='#'><Icon type='user' style={{marginRight: 10}} />个人信息</a>
		</Menu.Item>
		<Menu.Item key='1'>
			<a href='#'><Icon type='setting' style={{marginRight: 10}} />设置</a>
		</Menu.Item>
		<Menu.Divider />
		<Menu.Item key='2'>
			<a href='#'><Icon type='logout' style={{marginRight: 10}} />退出登录</a>
		</Menu.Item>
	</Menu>
)

// 通知信息menu
const notificationMenu = (
	<Menu className='app_header-notificationMenu'>
		<Menu.Item key='0'>
			<Card title='今天' bordered={false}>content</Card>
		</Menu.Item>
		<Menu.Item key='1'>
			<Card title='昨天' bordered={false}>content</Card>
		</Menu.Item>
		<Menu.Item key='2'>
			<Card title='昨天' bordered={false}>content</Card>
		</Menu.Item>
		<Menu.Item key='3'>
			<Card title='昨天' bordered={false}>content</Card>
		</Menu.Item>
	</Menu>
)

class App extends Component {
	render() {
		return(
			<Layout>
				<Header className='app_header'>
					<img src={logo} className='app_logo' alt='logo' />
					<div className='app_header-menu'>
						<Dropdown overlay={notificationMenu} trigger={['click']}>
							<Badge
								className='app_menu-notificationIcon' 
								count={5}
								overflowCount={100}>
								<Icon type='notification' />
							</Badge>
						</Dropdown>
						<Dropdown overlay={userMenu}>
							<Icon className='app_menu-userIcon' type='user' />
						</Dropdown>
					</div>
				</Header>
				<Content className='app_content'>
					<div>{this.props.children}</div>
				</Content>
			</Layout>
		)
	}
}

export default App