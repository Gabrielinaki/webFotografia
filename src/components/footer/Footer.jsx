
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="transparent" className="font-small darken-4 pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-4">
            <div className="mb-4 flex-center">
              
              <a href="https://www.facebook.com/agusparrafotografia-109635857608641" className="fb-ic">
                <i className="fab fa-facebook-f fa-lg black-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a href="https://mail.google.com/mail/u/0/?tab=om#inbox?compose=DmwnWsLKfhnmZhKTjLwtTzgnMCDtPMRphGxbBgZKvpNvPSrJfdRcWBxlGvGjSfVNbHzSSkWFWZBG" className="gplus-ic">
                <i className="fab fa-google-plus fa-lg black-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a href="https://instagram.com/agusparrafotografia?igshid=mtlapq7ewmzc" className="ins-ic">
                <i className="fab fa-instagram fa-lg black-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright black-text text-center py-3">
        <MDBContainer fluid>
          &hearts; {new Date().getFullYear()} fotografias:{" "}
          <a href="https://instagram.com/agusparrafotografia?igshid=mtlapq7ewmzc" > Agustina Parra. </a>
          &hearts; desarrollador:{" "}
          <a  href="https://www.linkedin.com/in/gabriel-i%C3%B1aki-coronel-43754a193/">Iñaki Coronel. </a>
        </MDBContainer>

      </div>
    </MDBFooter>
  );
}

export default Footer;