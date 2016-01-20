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
    RadiosGroup = require('./compenents/RadiosGroup/');

//头部导航部分 组件
var linkArr = [
    {
        'title': '首页',
        'href': './',
        'active': true
    }, {
        'title': '例子1',
        'href': './demo1',
        'active': false
    }
];

/*内容块*/
var props = {
            'label': '当前选择的',
            'choices': ['1', '2', '3'],
            'value': ''
        };

var Body = React.createClass({
    getDefaultProps: function(){
        return {
            'title': '单选框组合,最最基本的组件演示'
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
                    <h2 className="i-block title">{this.state.title}</h2>
                    <div className="i-block">
                        <RadiosGroup {...props} />
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