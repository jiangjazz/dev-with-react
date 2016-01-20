/***********************
 * 引入模块
 */
var React = require('react');

/***********************
 * 引入公共资源
 */

/***********************
 * 引入模块
 */
var $ = require('jquery');
/***********************
 * 引入组件
 */
var NavLink = require('../NavLink/');
/***********************
 * 组件
 */

//头部导航部分 组件
var PageHeader = React.createClass({
    propTypes: {
        // 'value': React.PropTypes.string,
        // 'choices': React.PropTypes.array.isRequired,
        //'onCompleted': React.PropTypes.func.isRequired
    },
    tabNav: function(e){
        $('.header-collgroup').toggleClass('active');
    },
    render: function(){
        return (
            <header className="m-topNavGroup">
                <div className="logo f-di f-fl">
                    Janson
                </div>
                <div className="header-collaspe" onClick={this.tabNav}>
                    <span className="bars"></span>
                    <span className="bars"></span>
                    <span className="bars"></span>
                </div>
                <NavLink links={this.props.linkArr} />
                <div className="f-cb"></div>
                <div className="header-collgroup">
                    <NavLink links={this.props.linkArr} />
                </div>
            </header>
            );
    }
});





/***************************
 * 公用函数
 */
//随机数时间戳
function uniqueId(str) {
    var a = Math.random,
        b = parseInt;
    return str + Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());
}


/**************************
 * 生产函数（暴露接口）
 */
module.exports = PageHeader;