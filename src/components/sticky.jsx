import React from 'react';
import './index.less';

class Sticky extends React.Component {
  componentWillUnmount() {
    document.querySelector('.header').scrollIntoView();
  }

  render() {
    return (
      <div className="wrap">
        <div className="header"></div>
        <div className="scroll-title sticky">使用 `position:sticky` 实现</div>
        <div className="scroll-body"></div>
      </div>
    )
  }
}
export default Sticky;