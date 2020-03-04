import React from 'react';
import $ from 'jquery';
import './index.less';

class JqueryDom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      className: ''
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.querySelector('.header').scrollIntoView();
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let scrollTop = $('html').scrollTop();
    let offsetTop = $('.scroll-title-box').offset().top;
    if (scrollTop > offsetTop) {
      this.setState({
        className: 'fixed-top'
      });
    }
    else {
      this.setState({
        className: ''
      })
    }
  }

  render() {
    const { className } = this.state;
    return (
      <div className="wrap">
        <div className="header"></div>
        <div className="scroll-title-box">
          <div className={`scroll-title ${className}`}>使用 JQuery 的 `offset().top` 实现</div>
        </div>
        <div className="scroll-body"></div>
      </div>
    )
  }
}
export default JqueryDom;