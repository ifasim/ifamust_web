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
  Segment,
} from "semantic-ui-react";
import { productListURL, addToCartURL } from "../../constants";
import { fetchCart } from "../../store/actions/cart";
import { authAxios } from "../../utils";
import NavAuth from '../../containers/NavAuth/index.js';
import './product.css';




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
      <Container fluid >
        <NavAuth />
        <Container fluid className="body" >
          {/* <Container className="body" > */}
          <div className="body__wrapper">
          <div className="body__sidebar">
              <h1> side bar </h1>
          </div>
          <div className="body__right">
              <Container fluid className="product__body" >
             
              <div className="productBody__wrapper">

                    {data.map(item => {
                      return (
                        
                        <Item key={item.id} className='img'>
                          <Item.Image size="medium" src={item.image} />
                          <Item.Content>
                            <Item.Header
                              as="a"
                              onClick={() =>
                                this.props.history.push(`/products/${item.id}`)
                              }
                            >
                              {item.title}
                            </Item.Header>
                            <Item.Meta>
                              <span className="cinema">{item.category}</span>
                            </Item.Meta>
                            <Item.Description>{item.description}</Item.Description>
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
                              {item.discount_price && (
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
                              )}
                            </Item.Extra>
                          </Item.Content>
                        </Item>
                      );
                    })}

            </div>
            
            {/* </Container> */}
            </Container>
          
           <h1>hello</h1>
        
        
          </div>
        </div>
        
        {/* </Container> */}
        </Container>
      </Container>
    );
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