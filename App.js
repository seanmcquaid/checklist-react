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


class SearchBar extends React.Component {
    render(){
        return(
            <div className="searchBar">
                <form>
                    <input type="text" name="userInput" placeholder="Search..."/>
                    <div className="checkbox">
                        <input type="checkbox" id="productCheckbox"/>
                        <label for="productCheckbox">Only show products in stock</label>
                    </div>
                </form>
            </div>
        )
    }
}

class ProductRow extends React.Component {
    render(){
        const productInfo = this.props.items.map((item)=>{
            return(
                <div className="itemInfo">
                    <span className="productName">{item.name}</span>
                    <span className="productPrice">{item.price}</span>
                </div>
            )
        })
        return(
            <div className="productRow">
                <h2>{this.props.title}</h2>
                {productInfo}
            </div>
        )
    }
}

class ProductTable extends React.Component {
    render(){
        // console.log(data)
        const products = data.map((product)=>{
            return(
            <ProductRow title={product.title} items={product.items}/>
            )
        })
        return(
            <div className="productTable">
                <div className="row">
                <h4><span>Name</span><span>Price</span></h4>
                </div>
                {products}
            </div>
        )
    }
}

class FilterableProductTable extends React.Component{
    render(){
        return(
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