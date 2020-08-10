import React, {Component} from 'react'
import Product from '../product'
import UserContext from '../../Context'


class Products
 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: []
         }
    }
    static contextType = UserContext
    
    getProducts = async ()=> {
        const promise = await fetch('http://localhost:9999/api/product')
        const products = await promise.json()
        this.setState({
            products
        })
    }
    renderProducts(){
        const {products} =this.state

        return products.map((product, index)=>{

            return(

                <Product key={product._id} index={index} {...product}/>

            )
        })
    }
    componentDidMount(){
        this.getProducts()
    }
    render() { 
        return ( <div>
            {
                this.renderProducts()
            }
        </div> );
    }
}
 
export default Products
;