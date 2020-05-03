import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardFooter,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBAnimation,
  MDBFooter
} from 'mdbreact';
import './HomePage.css';
import { ReactComponent as Wallet } from '../assets/wallet.svg';
import { ReactComponent as Target } from '../assets/target.svg';
import { ReactComponent as Money } from '../assets/money.svg';
import { ReactComponent as Commercial } from '../assets/commercial.svg';
import { ReactComponent as Residential } from '../assets/residential.svg';
import { ReactComponent as Wherehouse } from '../assets/wherehouse.svg';
import { ReactComponent as Alternative } from '../assets/alternative.svg';
import propertyData from '../assets/data.json';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyList: [],
      activeTab: 'commercial',
      loading: true
    }
  }

  componentDidMount() {
    this.setState({ propertyList: propertyData, loading: false})
    // fetch('http://demo-web.in/api/property-search.php')
    //     .then(response => response.json())
    //     .then(data => this.setState({ propertyList: data, loading: false}));
  }

  handleTabChange = (activeTab) => {
    this.setState({activeTab});
  }

  render() {
    const {propertyList, activeTab, loading} = this.state;
    return (
      <>
        <div className="mb-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mt-1'>
                <MDBRow id='categories'>
                  {
                    propertyList.length > 0 && propertyList.map((item, index) => (
                      <MDBCol md='6' key={item.Id} className={index + 1 === propertyList.length ? 'mb-4' : ''}>
                        <MDBAnimation reveal type='fadeInDown'>
                          <MDBCard cascade className='my-3 grey lighten-4'>
                            <div className="cardbody">
                              <div className="col6">
                                <MDBCarousel activeItem={1} length={item.Photos.length} showControls className='z-depth-1' id={'carousel-' + item.Id}>
                                  <MDBCarouselInner>
                                    {
                                      item.Photos.map((url, idx) => (
                                        <MDBCarouselItem itemId={item.Id + '-' + idx} key={item.Id + '-' + idx} className={idx === 0 ? 'active' : ''}>
                                          <MDBView>
                                            <img className='d-block w-100' src={url} alt={"Banner" + (idx + 1)}/>
                                          </MDBView>
                                        </MDBCarouselItem>
                                      ))
                                    }
                                  </MDBCarouselInner>
                                </MDBCarousel>
                              </div>
                              <div className="col6">
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                  <div className="col6" style={{ borderBottom: "solid 1px #ccc", borderRight: "solid 1px #ccc" }}>
                                    <div className="stat">
                                      <div className="stat-icon3">
                                        <i className="fa fa-inr"></i>
                                      </div>
                                      <div className="stat-content3">
                                        <strong>{item.PerSqureRate}</strong>
                                        <p>Per square feet</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col6" style={{ borderBottom: "solid 1px #ccc" }}>
                                    <div className="stat">
                                      <div className="stat-content4">
                                        <strong>{item.TotalArea}</strong>
                                        <p>Total square feet</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-2">
                                  <div className="stat">
                                    <div className="stat-icon2">
                                      <i className="fa fa-map-marker"></i>
                                    </div>
                                    <div className="stat-content2">
                                      <strong>{item.Address1}</strong>
                                      <p>{item.Address2}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="bottom-strip">
                                  <div className="col4">
                                    <strong>{item.Funded}%</strong>
                                    <p>Funded</p>
                                  </div>
                                  <div className="col4">
                                    <strong>{item.Investors}</strong>
                                    <p>Investors</p>
                                  </div>
                                  <div className="col4">
                                    <strong>{item.DaysToGo}</strong>
                                    <p>Days To Go</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <MDBCardFooter>
                              <div className="col4">
                                <div className="stat">
                                  <div className="stat-icon">
                                    <Wallet style={{ height: '100%', width: '100%' }}/>
                                  </div>
                                  <div className="stat-content">
                                    <p>Rental Yield</p>
                                    <strong>{item.RentalYield}%</strong>
                                  </div>
                                </div>
                              </div>
                              <div className="col4">
                                <div className="stat">
                                  <div className="stat-icon">
                                    <Target style={{ height: '100%', width: '100%' }}/>
                                  </div>
                                  <div className="stat-content">
                                    <p>Return Target</p>
                                    <strong>{item.ReturnTarget}%</strong>
                                  </div>
                                </div>
                              </div>
                              <div className="col4">
                                <div className="stat">
                                  <div className="stat-icon">
                                    <Money style={{ height: '100%', width: '100%' }}/>
                                  </div>
                                  <div className="stat-content">
                                    <p>Min Investment</p>
                                    <strong>{item.MinInvestment}</strong>
                                  </div>
                                </div>
                              </div>
                            </MDBCardFooter>
                          </MDBCard>
                        </MDBAnimation>
                      </MDBCol>
                    ))
                  }
                  {
                    loading && <div className="col text-center">
                      <div className="d-flex justify-content-center">
                        <div className="spinner-border" style={{ width: "3rem", height: "3rem", color: "#3594fa"}} role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    </div>
                  }
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          
          <MDBFooter color='indigo'>
            <MDBRow style={{ flexDirection: 'row' }}>
              <div className={activeTab === 'commercial' ? "col3 business-options active" : "col3 business-options"} onClick={() => this.handleTabChange('commercial')}>
                <Commercial/>
                <p>Commercial</p>
              </div>
              <div className={activeTab === 'residential' ? "col3 business-options active" : "col3 business-options"} onClick={() => this.handleTabChange('residential')}>
                <Residential/>
                <p>Residential</p>
              </div>
              <div className={activeTab === 'wherehouse' ? "col3 business-options active" : "col3 business-options"} onClick={() => this.handleTabChange('wherehouse')}>
                <Wherehouse/>
                <p>Wherehouse</p>
              </div>
              <div className={activeTab === 'alternative' ? "col3 business-options active" : "col3 business-options"} onClick={() => this.handleTabChange('alternative')}>
                <Alternative/>
                <p>Alternative</p>
              </div>
            </MDBRow>
          </MDBFooter>
        </div>
      </>
    );
  }
}

export default SearchPage;
