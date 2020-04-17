import React, {Component} from 'react';

import DataPage from './pages/DataPage'
import 'antd/dist/antd.css';
import './index.css';
import logo from './logo.png'
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {
    render() {
    return (
      <Layout className="layout">
    <Header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content">
        <h1>Tabla generación de energía</h1>
        <DataPage />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ricardo Trejos</Footer>
  </Layout>

    );
  }
}
export default App;
