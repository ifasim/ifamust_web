import PropTypes from "prop-types";
import React, { Component } from "react";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    GridColumn,
    Sticky,
    Rail,

} from "semantic-ui-react";
import { NavLink, Redirect } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";

import { logout } from "../store/actions/auth";
import { connect } from "react-redux";







const getWidth = () => {
    const isSSR = typeof window === "undefined";
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='ABOUT US'
            color='white'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
                marginLeft: '150px',
                marginTop: '50px'
            }}
        />

    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
    state = {

    }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children, authenticated } = this.props
        const { fixed } = this.state


        return (
            <div >
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign=''
                        style={{
                            minHeight: 300,
                            padding: '5em 0em',
                            backgroundImage: `url('')`,

                            backgroundPosition: 'left',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundColor: 'black'
                        }}
                        vertical
                    >
                        
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </div >
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {};

    handleSidebarHide = () => this.setState({ sidebarOpened: false });

    handleToggle = () => this.setState({ sidebarOpened: true });

    render() {

        const { children, authenticated } = this.props;
        const { sidebarOpened } = this.state;


        return (
            <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >
                {children}
            </Responsive>
        );
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node
};

const AboutusLayout = () => (
    <ResponsiveContainer>


        <Segment style={{ padding: "5em 0em" }} vertical color='white'>
            <Container>
                <Grid>
                    <GridColumn width={16} style={{ padding: "6em 0em", textAlign: "center" }}>
                        

                        <p style={{ fontSize: "1.33em", fontFamily: "Helvetica", fontSize: "50",  letterSpacing: "0.03em" }}>
                        Fitever - a multifunctional lifestyle brand for men, women, and kids, as well as a progressive 
                        retail establishment. Our five brick-and-mortar flagship stores were designed in 
                        partnership with Snarkitecture, as we push the boundaries to deliver customers a 
                        completely unique experience. We offer an array of premium products, ranging from 
                        our own in-house label to a curated selection of multi-brand apparel and footwear. 
                        In 2015, Kith Treats was conceived from a childhood love for cereal and dreams of 
                        one day opening up a cereal bar - now operating in eight locations, Treats has become 
                        a staple within Kith. Our brand has also extended to three shop-in-shops at Bergdorf 
                        Goodman, Hirshleifers, and overseas at Selfridges. 
                        </p>

                    </GridColumn >

                    
                </Grid>
            </Container>


        </Segment>


    </ResponsiveContainer>
);


const mapStateToProps = state => {
    return {
        authenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(AboutusLayout)
);

