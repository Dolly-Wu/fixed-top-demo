import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import App from '../App';
import OffsetTop from '../../components/offseTop';
import Sticky from '../../components/sticky';
import JqueryDom from '../../components/jquery';
import clientRect from '../../components/clientRect';
import ReactSticky from '../../components/ReactSticky';
import './index.less';

const { Header, Sider, Content } = Layout;
class RouterConfig extends React.Component {
    render() {
        return (
            <Layout>
                <Layout>
                    <Sider trigger={null} collapsible>
                        <div className='logo'>
                            <h1>Fixed-Top-Demo</h1>
                        </div>
                        <Menu mode="inline" selectedKeys={location.hash}>
                            <Menu.Item key='#/offset_top'>
                                <a href="#/offset_top">OffsetTop</a>
                            </Menu.Item>
                            <Menu.Item key='#/position_sticky'>
                                <a href="#/position_sticky">Sticky</a>
                            </Menu.Item>
                            <Menu.Item key='#/jquery_dom'>
                                <a href="#/jquery_dom">Jquery</a>
                            </Menu.Item>
                            <Menu.Item key='#/client_rect'>
                                <a href="#/client_rect">clientRect</a>
                            </Menu.Item>
                            <Menu.Item key='#/react_sticky'>
                                <a href="#/react_sticky">reactSticky</a>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content>
                        <div className="content-wrap">
                            <Switch>
                                <Route path="/offset_top" exact component={OffsetTop}/>
                                <Route path="/position_sticky" exact component={Sticky} />
                                <Route path="/jquery_dom" exact component={JqueryDom} />
                                <Route path="/client_rect" exact component={clientRect} />
                                <Route path="/react_sticky" exact component={ReactSticky} />
                                <Redirect to="/offset_top" />
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(RouterConfig);