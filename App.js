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