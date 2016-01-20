/***********************
 * 引入模块
 */
var React = require('react'),
    ReactDOM = require('react-dom');
/***********************
 * 引入公共资源
 */
require('./layout.scss');
/***********************
 * 引入组件
 */
var Header = require('./compenents/Header/'),
    SearchGroup = require('./compenents/SearchGroup/');

//头部导航部分 组件
var linkArr = [
    {
        'title': '首页',
        'href': './',
        'active': false
    }, {
        'title': '例子1',
        'href': './demo1',
        'active': true
    }
];

/*内容块*/
//搜索数据
var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

/*页面*/
var Body = React.createClass({
    getDefaultProps: function(){
        return {
            'title': 'search组件演示'
        }
    },
    getInitialState: function(){
        return {
            'title': ''
        }
    },
    componentDidMount: function(){
        this.timer = setInterval(function(){
            var len = this.state.title.length,
                max = this.props.title.length,
                str;
            if(len === max){
                clearInterval(this.timer);
            }else{
                str = this.props.title.substr(0, len+1);
                this.setState({
                    'title': this.props.title.substr(0, len+1)
                });
            }
            len++;
        }.bind(this),100);
    },
    render: function(){
        return (
            <div>
                <Header linkArr={linkArr}/>
                <div className='m-content'>
                    <h1 className='i-block'>{this.state.title}</h1>
                    <div className='i-block'>
                        <SearchGroup className="component-search"  products={PRODUCTS} />
                    </div>
                </div>
            </div>
            );
    }
});


ReactDOM.render(
    <Body />,
    document.querySelector('.content')
    );






module.exports = {};