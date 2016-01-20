/***********************
 * 引入模块
 */
var React = require('react');

/***********************
 * 引入公共资源
 */

/***********************
 * 组件
 */

//单个link组件
var NavLink = React.createClass({
    propTypes: {
        'active': React.PropTypes.bool.isRequired,
        'title': React.PropTypes.string.isRequired
    },
    render: function(){
        var href = (this.props.href && this.props.href !=='')?this.props.href: 'javascript:;',
            classs = this.props.active? 'active': '';
        return (
            <a href={href} className={classs}>{this.props.title}</a>
            );
    }
});


//nav组 组件
var NavGroup = React.createClass({
    propTypes: {
    },
    getDefaultProps: function(){
        return {
        };
    },
    getInitialState: function(){
        return {
        };
    },
    render: function(){
        var linkArr = [];
        linkArr = this.props.links.map(function(item, i){
            return < NavLink
                key={item.title}
                {...item}/>;
        });
        return (
            <nav>
                {linkArr}
            </nav>
            );
    }
});




/**************************
 * 生产函数（暴露接口）
 */
/**
 * [NavGroup 导航栏]
 * @param  {[type]} props [props对象，需求例子：
 *      props = {
            'links': [array] 参数需求：href(Str) title(Str|required) active(Bool|required)
        };
 * ]
 * @return {[type]}       [none]
 */
module.exports = NavGroup;