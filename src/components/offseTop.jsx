import React from 'react';
import './index.less';

class OffsetTop extends React.Component {

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
    const stickyElement = document.querySelector('.scroll-title-box');
    const stickyTop = stickyElement.offsetTop || 0;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > stickyTop) {
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
          <div className={`scroll-title ${className}`}>使用原生的 `offsetTop` 实现</div>
        </div>
        <div className="scroll-body"></div>
      </div>
    )
  }
}
export default OffsetTop;