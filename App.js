const data = [
    {
        title: "Sporting Goods",
        items:[
            {
                name: "Football",
                price: "$49.99"
            },
            {
                name: "Baseball",
                price: "$9.99"
            },
            {
                name: "Basketball",
                price: "$29.99"
            }
        ]
    },
    {
        title: "Electronics",
        items:[
            {
                name: "iPod Touch",
                price: "$99.99"
            },
            {
                name: "iPhone 5",
                price: "$399.99"
            },
            {
                name: "Nexus 7",
                price: "$199.99"
            }
        ]
    },
]

class SearchBar extends React.Component{
    render(){
        return(
        <div className="searchBar">
            <form>
                <input type="text" placeholder="Search..."/>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

class ProductTable extends React.Component{
    render(){
        let productCategories = data.map((category)=>{
            return (<ProductCategoryRow title={category.title}/>)
        })
        return(
            <div className="productTable">
                {productCategories}
            </div>
        )
    }
}

class ProductCategoryRow extends React.Component{
    render(){
        let productInformation = data[0].items[0].name
        let productArray = data.map((item)=>{
            return (item.items)
        })
        console.log(productArray)
        return(
            <div className="productCategoryRow">
            <h4 className="category">{this.props.title}</h4>
            {productInformation}
            </div>
        )
    }
}

class ProductRow extends React.Component {
    render(){
        return(
            <div className="productRow">
                <div className="productInfo">
                    <div className="name">
                    {this.props.name}
                    </div>
                    <div className="price">
                    {this.props.price}
                    </div>
                </div>
            </div>
        )
    }
}


class FilterableProductTable extends React.Component{
    render(){
        return (
            <div className="container">
                <SearchBar/>
                <ProductTable/>
            </div>
        )
    }
}

ReactDOM.render(
    <FilterableProductTable/>,
    document.getElementById("root")
)