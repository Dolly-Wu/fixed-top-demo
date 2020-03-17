# fixed-top-demo

#### 1.使用原生的offsetTop
HTMLElement.offsetTop为只读属性，返回当前元素相对其offsetParent（相对定位父级，即position!=static)元素的顶部内边距距离。到页面滚动距离（scrollTop）大于当前元素的顶部距离（offsetTop），则将当前元素的position设为fixed（通常是设置class）

**踩坑1**：documen.body.scrollTop一直为0

解决：1）body的height设置为auto；2）兼容不同的浏览器使用doucment.body.scrollTop || documnet.documentElement.scrollTop 进行获取

**踩坑2**：当满足元素的置顶条件后，元素置顶offsetTop变为0。

解决：给置顶的元素设置一个父级元素，去获取父级元素的offsetTop与scrollTop进行比较，这样能保证offsetTop是个固定值。

**踩坑3**：removeElementListener scroll无效

解决：addElementListener时，调用this.handleScroll不绑定this，在constructor中绑定。

#### 2.使用position：sticky

sticky称为粘性定位，是相对定位relative和固定定位fixed的结合。在页面滚动的过程中，某个元素距离父元素的距离达到sticky的要求时，元素的相对定位就变成固定定位。设为sticky的元素根据文档流进行正常定位，然后相对于它的最近滚动祖先和最近块祖先基本top、right、bottom和left进行偏移，偏移值不会影响其他元素的位置，需要考虑兼容性；

注意：

* 父元素不能是overflow：hidden或overflow：auto属性；
* 必须指定top、bottom、left、right4个值之一，否则只会处于相对定位；（满足这个条件后就会fixed定位）
* 父元素的高度不能低于sticky元素的高度；
* sticky元素只能在其父元素内生效；

**踩坑1**：使用antd-design，其中ant-layout-content有属性overflow-x:hidden导致无法生效
解决：需要重新设置ant-layout-content的overflow-x，例如设为visilble；

#### 3.使用jQuery的offset().top
这种方法与原生的offsetTop类似，只不过获取offsetTop和scrollTop时使用jQuery提供的DOM API进行操作。这种方法存在两个问题，一是Jquery现在使用的很少，在React使用的就更少；二是$('html').scrollTop在微信浏览器、IE浏览器和某些版本的firefox上无效，所以没有第一种方法兼容性好。


#### 4.使用getBoundingClientRect().top实现
Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置，使用Element.getBoundingClientRect()代替scrollTop - offsetTop进行判断。

#### 5.使用react-sticky实现
利用react的组件库实现，把要吸顶的元素包在StickyContainer和Sticky里面，再设置吸顶条件，默认的吸顶条件是距离顶部为0（即topOffset为0）。

### ß