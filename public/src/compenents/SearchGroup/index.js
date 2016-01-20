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
//具体产品
var Product = React.createClass({
    render: function(){
        return (
            <div className="products">
                <span>{this.props.product.name}</span>&nbsp;
                <span>{this.props.product.price}</span>
            </div>
            );
    }
});
//具体分类数据的呈现
var ResultGroup = React.createClass({
    getDefaultProps: function(){
        return {
            'searchName': 'search'
        };
    },
    render: function(){
        var len = this.props.products.length,
            i = 0,
            row = [];
        while(i<len){
            row.push([<Product product={this.props.products[i]} />]);
            i++;
        };
        return (
            <div className="resultGroup">
                <h4 className="category">{this.props.products[0].category}</h4>
                {row}
            </div>
            );
    }
});
//搜索框
var SearchBar = React.createClass({
    getDefaultProps: function(){
        return {
            'searchName': 'search',
            'promptMsg': '请输入搜索关键字'
        };
    },
    inpChange: function(){
        var input = this.refs.searchInp,
            state = {
                'filterText': input.value
            };
        this.props.onUserInput(state);
    },
    render: function(){
        return (
            <div className="searchBar">
                <input
                    name = {this.props.searchName}
                    className = "u-input search"
                    type = "search"
                    placeholder = '请输入搜索关键字'
                    ref = 'searchInp'
                    onChange = {this.inpChange}
                    value = {this.props.filterText} />
            </div>
            );
    }
});
//搜索组件
var SearchGroup = React.createClass({
    getInitialState: function(){
        return {
            'filterText': '',
            'inStockOnly': false
        };
    },
    handleUserInput: function(state){
        this.setState({
            'filterText': state.filterText
        });
    },
    render: function(){
        var categoryObj = {},
            row = [],
            filterText = this.state.filterText,
            pattern = new RegExp(filterText, 'i'),
            inStockOnly = this.state.inStockOnly;
        //console.log(this.state.filterText);
        //按category分类,获得新的分组数据
        this.props.products.forEach(function(product) {
            if(!pattern.test(product.name)){
                return;
            }
            if (!categoryObj[product.category]) {
                categoryObj[product.category] = [];
            }
            categoryObj[product.category].push(product);
        });
        for(var obj in categoryObj){
            if(inStockOnly && categoryObj[obj].stocked){}
            row.push(<ResultGroup key={obj} products={categoryObj[obj]}/>);
        }
        return (
            <div className={this.props.class}>
                <SearchBar
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                    onUserInput={this.handleUserInput} />
                {row}
            </div>
            );
    }
});
/**************************
 * 生产函数（暴露接口）
 */

module.exports = SearchGroup;