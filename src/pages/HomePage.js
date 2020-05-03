import React from 'react';
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBFooter,
  MDBBtn
} from 'mdbreact';
import './HomePage.css';

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);

  render() {
    return (
      <>
        <MDBEdgeHeader color='indigo' className='sectionPage' />
        <div className='mt-3 mb-5'>
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md='10'
                className='mx-auto float-none white z-depth-1 py-2 px-2'
              >
                <MDBCardBody className='text-center'>
                  <h2 className='h2-responsive mb-4'>
                      <img
                        src='https://media1.propertyshare.in/images/propshare-black-logo.svg'
                        alt='logo'
                        className='pr-2'
                      />
                  </h2>
                  <MDBRow />
                  <p>PropShare, the Major Commercial and Residential Real Estate Marketplace</p>
                  <p className='pb-2'>
                    Our mission is to modernize and progress the experience of buying and selling real estate by 
                    cultivating a spirit of collaboration, innovation, and integrity.
                  </p>
                  <MDBRow className='d-flex flex-row justify-content-center row'>
                    <MDBCol md='9'>
                      <input
                        className='form-control search-field'
                        type='text'
                        placeholder='Type to Search Property'
                        aria-label='Search'
                      />
                    </MDBCol>
                    <MDBCol md='3'>
                      <a href='/search'>
                        <MDBBtn onClick={this.toggleModal}>
                          Search Property
                        </MDBBtn>
                      </a>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          
          <MDBFooter color='indigo'>
            <p className='footer-copyright mb-0 py-3 text-center'>
              &copy; {new Date().getFullYear()} Copyright:
              <a href='/'> MobileApp.com </a>
            </p>
          </MDBFooter>
        </div>
      </>
    );
  }
}

export default HomePage;
