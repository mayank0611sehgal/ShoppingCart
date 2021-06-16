import React from 'react';
import Cart from'./Cart';
import Navbar from'./Navbar';

class App extends React.Component {
  
  constructor(){
    super();
    this.state={
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.pexels.com/photos/705868/pexels-photo-705868.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 1
            },
            {
                price: 999,
                title: 'Phone',
                qty: 10,
                img: 'https://images.pexels.com/photos/265658/pexels-photo-265658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 2
            },
            {
                price: 9999,
                title: 'Laptop',
                qty: 4,
                img: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                id: 3
            },
        ]
    }
  }
  handleDecreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      if(products[index].qty === 0){
          return;
      }
      products[index].qty -= 1;
      this.setState({
          products:products
      });

  }
  handleIncreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty += 1;
      this.setState({
          products:products
      });

  }
  handleDeleteProduct = (id) => {
      const {products} = this.state;
      const items = products.filter((item) => (item.id !== id) );
      this.setState({
          products:items
      });
  }
  getCartCount = () => {
    const {products} = this.state;
    let count=0;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }
  getCartTotal = () => {
    const {products} = this.state;
    let total=0;
    products.forEach((product) => {
      total += product.qty * product.price;
    })
    return total;
  }

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar 
          count = {this.getCartCount()}
        />
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct =  {this.handleDeleteProduct}
        />
        <div style={{fontSize:20, padding:10}} >TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
