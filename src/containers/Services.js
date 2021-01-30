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

import promise from '../assets/images/promise3.png'
import banner from '../assets/images/banner_services.png'

import ServicePuresculpt from '../containers/ServicePuresculpt/index.js';
import {
    homeObjOne,
  } from '../containers/ServicePuresculpt/Data';

import ServiceBBL from '../containers/ServiceBBL/index.js';
import {
      homeObjTwo,
    } from '../containers/ServiceBBL/Data';

import ServiceCurativeLight from '../containers/ServiceCurativeLight/index.js';
import {
        homeObjThree,
    } from '../containers/ServiceCurativeLight/Data';

import ServiceLaserLipo from '../containers/ServiceLaserLipo/index.js';
import {
        homeObjFour,
    } from '../containers/ServiceLaserLipo/Data';

import ServicePostOpMassages from '../containers/ServicePostOpMassages/index.js';
import {
        homeObjFive,
    } from '../containers/ServicePostOpMassages/Data';

import ServiceRadioFrequency from '../containers/ServiceRadioFrequency/index.js';
import {
        homeObjSix,
    } from '../containers/ServiceRadioFrequency/Data';

import ServiceSaunaBlanket from '../containers/ServiceSaunaBlanket/index.js';
import {
        homeObjSeven,
    } from '../containers/ServiceSaunaBlanket/Data';

import ServiceUltrasonicCavitation from '../containers/ServiceUltrasonicCavitation/index.js';
import {
        homeObjEight,
    } from '../containers/ServiceUltrasonicCavitation/Data';

import ServiceWoodTherapy from '../containers/ServiceWoodTherapy/index.js';
import {
        homeObjNine,
    } from '../containers/ServiceWoodTherapy/Data';
    
import ServiceLipBlushing from '../containers/ServiceLipBlushing/index.js';
import {
        homeObjTen,
    } from '../containers/ServiceLipBlushing/Data';

import ServiceBleaching from '../containers/ServiceBleaching/index.js';
import {
        homeObjEleven,
    } from '../containers/ServiceBleaching/Data';
    
import Price from './Price';



const getWidth = () => {
    const isSSR = typeof window === "undefined";
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const HomepageHeading = ({ mobile }) => (
    <Container text>
        <Header
            as='h1'
            content='OUR SERVICES'
            color=''
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
                color: '#282828'
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

    componentDidMount() {
        window.scrollTo(0, 0) 
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
                            minHeight: 500,
                            padding: '5em 0em',
                            backgroundImage: `url(${banner})`,

                            backgroundPosition: 'left',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundColor: 'orange'
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
        
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node
};

const ServicesLayout = () => (
    <ResponsiveContainer>

        <Container style={{ margin: '5em 0em'}}>
            
                <div className="titleHeader" >
                      <div style={{ textAlign: 'center', marginBottom: '10px'}}>
                    
                        <Header horizontal style={{ fontSize: "1.1em", color: '#ef807c' }}>BEST</Header>
                        </div>

                        <div style={{ textAlign: 'center', marginBottom: '10px'}}>
                        <Header horizontal style={{ fontSize: "2em", color: '#707070' }}>New Treatments</Header>
                       </div>
                 </div>


        <div >
                <div className='left' style={{ margin: '0 50px'}}>
                    
                        {/* PRICING COMPONENT */}
                        <Price name="PURESCULPT" per="per single session" price=" $175  " hours="1 Hour" slug="puresculpt" />
                        <Price name="LASER LIPO" per="per single session" price=" $185  " hours="1 Hour" slug="laser-lipo" />
                        <Price name="ULTRASONIC CAVITATION" per="per single session" price="$150 " hours="1 Hour" slug="ultrasonic" />
                        <Price name="SAUNA BLANKET" per="per single session" price="$150" hours="1 Hour" slug="sauna" />
                        <Price name="WOOD THERAPY" per="per single session" price="$85 " hours="1 Hour" slug="wood" />
                        <Price name="POST OP MASSAGES" per="per single session" price="$120 " hours="1 Hour" slug="massages" />
                        <Price name="CURATIVE LIGHT" per="per single session" price="$65 " hours="1 Hour" slug="curative" />
                        <Price name="BABY GOT BACK " per="per single session" price="$100 " hours="1 Hour" slug="butt" />
                        <Price name="LIP BLUSHING " per="per single session" price="$450 " hours="1 Hour" slug="lip" />
                        <Price name="BLEACHING " per="per single session" price="$85 " hours="1 Hour" slug="bleaching" />

                </div>

            </div>
                        
        </Container>

            <ServicePuresculpt {...homeObjOne} />
            <ServiceBBL {...homeObjTwo} />
            <ServiceCurativeLight {...homeObjThree} />
            <ServiceLaserLipo {...homeObjFour} />
            <ServicePostOpMassages {...homeObjFive} />
            <ServiceRadioFrequency {...homeObjSix} />
            <ServiceSaunaBlanket {...homeObjSeven} />
            <ServiceUltrasonicCavitation {...homeObjEight} />
            <ServiceWoodTherapy {...homeObjNine} />

            <ServiceLipBlushing {...homeObjTen} />
            <ServiceBleaching {...homeObjEleven} />

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
    )(ServicesLayout)
);

