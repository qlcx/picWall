import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
const { Header, Content } = Layout

class App extends Component {
	render() {
		return(
			<Layout className='layout'>
				<Header>
					<Menu
						theme='dark'
						mode='horizontal'
						style={{ lineHeight: '64px' }}>
						<Menu.Item key='1'>Nav 1</Menu.Item>
						<Menu.Item key='2'>Nav 2</Menu.Item>
						<Menu.Item key='3'>Nav 3</Menu.Item>
					</Menu>
				</Header>
				<Content style={{ padding: '0 50px' }}>
					<div>{this.props.children}</div>
				</Content>
			</Layout>
		)
	}
}

export default App