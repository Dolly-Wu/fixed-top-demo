import React from 'react';
import './index.less';
import { StickyContainer, Sticky } from 'react-sticky';

class ReactSticky extends React.Component {

  componentWillUnmount() {
    document.querySelector('.header').scrollIntoView();
  }

  render() {
    return (
      <div className="wrap">
        <div className="header"></div>
        <StickyContainer className="scroll-title-box">
          <Sticky>
            {({ style }) => {
              return <div style={style} className="scroll-title">
                使用原生的 `react-sticky` 实现
              </div>
            }}
          </Sticky>
          <div className="scroll-body"></div>
        </StickyContainer>
      </div>
    )
  }
}
export default ReactSticky;