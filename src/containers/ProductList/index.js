
import React, { useState, useEffect } from 'react'
import { productListURL, addToCartURL } from "../../constants";
import axios from "axios";
import { authAxios } from "../../utils";
import NavAuth from '../../containers/NavAuth/index.js';
import { connect, } from "react-redux";
import { fetchCart } from "../../store/actions/cart";
import { Link, withRouter } from "react-router-dom";


import {
  Container,
  ProdWrapper,
  ContainerMain,
  DivMainSidebar,
  Img,
  DivMainRight
} from './productElement';
import {
  Image,
  Item,
  Label,
  Loader,
  Message,
  Segment,
} from "semantic-ui-react";

const Services = () => {
  const [data, setData] = useState([])
  const [err, setError] = useState('')

  useEffect(() => {
    
    axios
      .get(productListURL)
      .then(res => {
        setData(res.data );
      })
      // .catch(err => {
      //   this.setState({ error: err });
      // });

  }, []);

  const handleAddToCart = slug => {
    // this.setState({ loading: true });
    authAxios
      .post(addToCartURL, { slug })
      .then(res => {
        this.props.refreshCart();
        // this.setState({ loading: false });
      })
      .catch(err => {
        // this.setState({ error: err, loading: false });
        setError(err);
      });
  };

  // const { data, error, loading } = this.state;
  return (
    

    <ContainerMain>
     
        <DivMainSidebar>
          <h1 style={{fontSize: '1.5em'}}>OUR SHOP</h1>
        </DivMainSidebar>
        <DivMainRight>
        <Container>
      <ProdWrapper>
      {data.map(item => {
          return (
            <Img>
            <Item key={item.id} className='img'>
              <Item.Image size="medium" src={item.image} />
              <Item.Content>
                {/* <Link to={`/products/${item.id}`}> */}
                <Item.Header
                  as="a"
                  onClick={() =>
                    this.props.history.push(`/products/${item.id}`)
                  }
                >
                  {item.title}

                </Item.Header>
                {/* </Link> */}
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
                </Item.Extra>
              </Item.Content>
            </Item>
            </Img>
          );
        })}

        
      </ProdWrapper>
    </Container>
        </DivMainRight>
    </ContainerMain>

    
  );
};

// export default Services;


const mapDispatchToProps = dispatch => {
  return {
    refreshCart: () => dispatch(fetchCart())
  };
};


export default withRouter(
  connect(
    // mapStateToProps,
    mapDispatchToProps
  )(Services)
);
