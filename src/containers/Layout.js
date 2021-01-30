import React from "react";
import {

  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Icon, GridColumn
} from "semantic-ui-react";


import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { fetchCart } from "../store/actions/cart";
import logo from '../assets/images/logo.jpg'
import Footer from '../containers/Footer/index.js';
import NavAuth from '../containers/NavAuth/index.js';
import Navbar from '../containers/Navbar/index.js';
import './Layout.css';
import NavLogo from '../containers/NavLogo/index.js';

import Button from '@material-ui/core/Button';






class CustomLayout extends React.Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  state = {
    isOpen: false
  }
  toggle = () => {
    this.setState({ isOpen: true })
  };

  handleResume = () => {
    
    console.log("downloading...resume")
  }; 


 

  render() {
    const { authenticated, cart, loading, toggle, token } = this.props;

    return (
      <div>
        {/* {authenticated ? (
          //  <NavAuth cart = {cart} />
          <Menu borderless='none' style={{ margin: '0px 0px', border: '0px'}}>
                  <Container style={{height: '80px'}}>

            <Menu.Item header onClick={() => this.props.history.push("/")}>
            <Image src={logo} style={{ marginRight: '0.3em', width: '30px', height: '30px', textAlign: 'center'}} />

              CITI.<span style={{ color: '#ff7878'}}>PUPS</span>
              </Menu.Item>
                  
                      <Menu.Item onClick={() => this.props.history.push("/")}>Home</Menu.Item>
                
                      <Menu.Item onClick={() => this.props.history.push("/products")}>Products</Menu.Item>

                      <Menu.Item onClick={() => this.props.history.push("/Services")}>Booking</Menu.Item>

                      <Menu.Item onClick={() => this.props.history.push("/chat")}>Chat</Menu.Item>
                 
                    {authenticated ? (
                      <React.Fragment>
                        <Menu.Menu position="right">
                            <Menu.Item onClick={() => this.props.history.push("/profile")}>Profile</Menu.Item>

                          <Dropdown
                            icon="cart"
                            loading={loading}
                            text={`${cart !== null ? cart.order_items.length : 0}`}
                            pointing
                            className="link item"
                          >
                            <Dropdown.Menu>
                              {cart !== null ? (
                                <React.Fragment>
                                  {cart.order_items.map(order_item => {
                                    return (
                                      <Dropdown.Item key={order_item.id}>
                                        {order_item.quantity} x {order_item.item.title}
                                      </Dropdown.Item>
                                    );
                                  })}
                                  {cart.order_items.length < 1 ? (
                                    <Dropdown.Item>No items in your cart</Dropdown.Item>
                                  ) : null}
                                  <Dropdown.Divider />

                                  <Dropdown.Item
                                    icon="arrow right"
                                    text="Checkout"
                                    onClick={() =>
                                      this.props.history.push("/order-summary")
                                    }
                                  />
                                </React.Fragment>
                              ) : (
                                <Dropdown.Item>No items in your cart</Dropdown.Item>
                              )}
                            </Dropdown.Menu>
                          </Dropdown>
                          <Menu.Item header onClick={() => this.props.logout()}>
                            Logout
                          </Menu.Item>
                        
                        </Menu.Menu>
                        
                      </React.Fragment>
                    ) : (
                      <span></span>
                    )}
                  </Container>
                  </Menu>
        ) : (

          <React.Fragment>

              {token ? (
                <Navbar toggle={toggle} />
              ):(
                <NavLogo />
              )}
               
          </React.Fragment>
          
        )} */}



         <Menu borderless='none' style={{ margin: '0px 0px', border: '0px', background: "#0d192e"}}>
                  <Container style={{height: '80px'}}>

            <Menu.Item header onClick={() => this.props.history.push("/")} style={{ color: "#75dfe6"}}>
            {/* <Image src={logo} style={{ marginRight: '0.3em', width: '30px', height: '30px', textAlign: 'center'}} /> */}
            {/* <Image src={logo} style={{ marginRight: '0.3em', width: '150px' }} /> */}
            <span  style={{ fontSize: "2em"}}> {`{IF}`} </span>

              {/* CITI.<span style={{ color: '#ff7878'}}>PUPS</span>x */}
              </Menu.Item>
                  
                      <Menu.Item onClick={() => this.props.history.push("/")} style={{ color: "#b6bfda"}}>About</Menu.Item>
                
                      <Menu.Item onClick={() => this.props.history.push("/products")} style={{ color: "#b6bfda"}} >Featured</Menu.Item>

                      <Menu.Item onClick={() => this.props.history.push("/aboutus")} style={{ color: "#b6bfda"}}>My Skills</Menu.Item>
                      <Menu.Item onClick={() => this.props.history.push("/aboutus")} style={{ color: "#b6bfda"}}>Experience</Menu.Item>

                      <Menu.Item onClick={() => this.props.history.push("/products")} style={{ color: "#b6bfda"}}>Shop</Menu.Item>

                 
                    {authenticated ? (
                      <React.Fragment>
                        <Menu.Item onClick={() => this.props.history.push("/chat")} style={{ color: "#b6bfda"}}>Live Chat</Menu.Item>

                        <Menu.Menu position="right">
                            <Menu.Item onClick={() => this.props.history.push("/profile")} style={{ color: "#b6bfda"}}>Profile</Menu.Item>

                          <Dropdown
                            icon="cart"
                            loading={loading}
                            text={`${cart !== null ? cart.order_items.length : 0}`}
                            pointing
                            className="link item"
                          >
                            <Dropdown.Menu>
                              {cart !== null ? (
                                <React.Fragment>
                                  {cart.order_items.map(order_item => {
                                    return (
                                      <Dropdown.Item key={order_item.id}>
                                        {order_item.quantity} x {order_item.item.title}
                                      </Dropdown.Item>
                                    );
                                  })}
                                  {cart.order_items.length < 1 ? (
                                    <Dropdown.Item>No items in your cart</Dropdown.Item>
                                  ) : null}
                                  <Dropdown.Divider />

                                  <Dropdown.Item
                                    icon="arrow right"
                                    text="Checkout"
                                    onClick={() =>
                                      this.props.history.push("/order-summary")
                                    }
                                  />
                                </React.Fragment>
                              ) : (
                                <Dropdown.Item>No items in your cart</Dropdown.Item>
                              )}
                            </Dropdown.Menu>
                          </Dropdown>
                          <Menu.Item header onClick={() => this.props.logout()} style={{ color: "#b6bfda"}}>
                            Logout
                          </Menu.Item>

                          <Menu.Item >

                              <Button onClick={this.handleResume} style={{color: "#75dfe6", border: "1px solid #75dfe6", width: "7em", height: "3em"}}> Resume </Button>      

                          </Menu.Item>
                       

                        
                        </Menu.Menu>
                        
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                      <Menu.Item header position="right" onClick={() => this.props.history.push("#")} style={{ color: "#b6bfda"}}>
                        Login 
                       </Menu.Item> 
                        <Menu.Item >

                        <Button onClick={this.handleResume} style={{color: "#75dfe6", border: "1px solid #75dfe6", width: "7em", height: "3em"}}> Resume </Button>      

                    </Menu.Item>
                    </React.Fragment>
                    )}
                  </Container>
                  </Menu>

        <div className="containerContent">
      
          {this.props.children}
          
        </div>
        
        {/* color
        pink #ff7878
        grey-black #282828 */}

            {token &&(
                 <Footer />
              )}

       
      </div >
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart,
    loading: state.cart.loading,
    token: state.auth.token

  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchCart: () => dispatch(fetchCart())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
