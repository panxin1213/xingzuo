import Taro from '@tarojs/taro';
import { Component } from 'react'
import './app.scss'
import { Login } from './common/api';

class App extends Component {

  componentDidMount() {
    Login();
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
