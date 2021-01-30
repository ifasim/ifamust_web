import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  Container,
  Dimmer,
  Image,
  Item,
  Label,
  Loader,
  Message,
  Segment
} from "semantic-ui-react";
import { productListURL, addToCartURL } from "../constants";
import { fetchCart } from "../store/actions/cart";
import { authAxios } from "../utils";
import NavAuth from '../containers/NavAuth/index.js';
import './ProductList.css';

import TuneIcon from '@material-ui/icons/Tune';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



class ProductList extends React.Component {
  state = {
    loading: false,
    error: null,
    data: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(productListURL)
      .then(res => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  }

  handleAddToCart = slug => {
    this.setState({ loading: true });
   
    authAxios
      .post(addToCartURL, { slug })
      .then(res => {
        this.props.refreshCart();
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ error: err, loading: false });
      });
  };

  render() {
    const { data, error, loading } = this.state;
    return (
      <React.Fragment>
      <div  style={{margin: "40px 80px ", display: "flex", justifyContent: "space-between"}}>
          <span className="product__header" >New Releases ({data.length}) 
        

          </span>
          <div className="product__headerFilter" style={{ display: "flex", margin: "0px 10px"}}> 
            <p className="product__headerFilter" style={{ margin: "0px 5px",  fontSize: "1.08em", fontFamily: " Helvetica"}}> Show Filters</p>
            <TuneIcon  />
          </div>
          <div className="product__headerSort" style={{ display: "flex", margin: "0px 10px"}}>
            <p className="product__headerSort" style={{ margin: "0px 5px",  fontSize: "1.08em", fontFamily: " Helvetica"}}> Sort By </p>
            <ExpandMoreIcon className="product__headerSort" />

          </div>
    </div>
      <Container style={{marginTop: "-20px"}}>
       
        {/* <NavAuth /> */}
        {error && (
          <Message
            error
            header="There was some errors with your submission"
            content={JSON.stringify(error)}
          />
        )}
        {loading && (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>

            <Image src="/images/wireframe/short-paragraph.png" />
          </Segment>
        )}
        <Item.Group divided>
          <div className='itemWrapper' >
          {data.map(item => {
            return (
              
              <Item key={item.id}>
               
               <div className='itemImage' style={{ backgroundImage: `url(${item.image})`}} as="a"
                    onClick={() =>
                      this.props.history.push(`/products/${item.id}`)
                    }>
                {/* <Item.Image size="medium" src={item.image} /> */}


                <div >
                    <Item.Extra style={{ paddingTop: "10px", marginBottom: "5px", marginLeft: "10px"}}>
                        <span >
                        {item.label === "Sold Out" ? (
                           <Label basic style={{ fontSize: ".6em"}}
                           color={
                             item.label === "Available"
                               ? "green"
                               : item.label === "Sold Out"
                               ? "grey"
                               : "orange"
                           }
                         >
                           {item.label}
                           
                         </Label>
                        ) : ("") }
                             
                              </span>
                    </Item.Extra>
                  </div>
                </div>
                
                <Item.Content>
                  <Item.Header
                    as="a"
                    onClick={() =>
                      this.props.history.push(`/products/${item.id}`)
                    }
                  >
                    <div style={{ fontSize: "1.2em", fontFamily: " Helvetica", color: 'black', marginBottom: "0px", marginTop: "5px", display: "flex", justifyContent: "space-around", alignItems: "center" }}> 
                        <div style={{ flex: "1" }}>
                            {item.title}
                          </div>

                          

                      </div>
                  </Item.Header>
                  <Item.Meta style={{ marginTop: "-30px", color: '#757575', marginBottom: "2px"}}>
                    <span className="cinema">{item.category}</span>
                  </Item.Meta>
                  {/* <Item.Description>{item.description}</Item.Description> */}

                  <Item.Extra>
                    {/* <Button
                      primary
                      floated="right"
                      icon
                      labelPosition="right"
                      onClick={() => this.handleAddToCart(item.slug)}
                    >
                      Add to cart
                      <Icon name="cart plus" />
                    </Button> */}

                    {/* // label section  */}
                  

                  {item.discount_price ? (
                    <div style={{ display: "flex"}}>
                        <h4 style={{color: '#282828', marginBottom: "30px", marginTop: "15px", fontFamily: "Helvetica Neue", fontWeight: "350"}}> ${item.discount_price}</h4>
                        <h4 style={{color: "#757575", marginBottom: "30px", marginTop: "15px", marginLeft: "5px", textDecoration: "line-through", fontFamily: "Helvetica Neue", fontWeight: "350"}}> ${item.price}</h4>
                    </div>
                      
                    ): (
                        <h4 style={{color: '#282828', marginBottom: "30px", marginTop: "15px", fontFamily: "Helvetica Neue", fontWeight: "350"}}> ${item.price}</h4>
                    )}


                      
                    {/* {item.discount_price && (
                      <Label
                        color={
                          item.label === "primary"
                            ? "blue"
                            : item.label === "secondary"
                            ? "green"
                            : "olive"
                        }
                      >
                        {item.label}
                      </Label>
                    )} */}

                  {/* // end label section  */}
                  </Item.Extra>
                 
                </Item.Content>
                
              </Item>
              
            );
          })}
          </div>
        </Item.Group>
      </Container>
      </React.Fragment>);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refreshCart: () => dispatch(fetchCart())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductList);
