import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex: 1
  min-height: 100vh;
  flex-direction: column;
  box-sizing: border-box;
  font-family: ’Lato’, sans-serif;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
`;
const StyledUl = styled.ul`
  list-style: none;
  padding-left: 0;
`;
const StyledFooter = styled.footer`
  background-color: #555;
  color: #bbb;
  line-height: 1.5;
`;
const StyledFooterA = styled.footer`
  text-decoration: none;
  color: #eee;
`;
const StyledFtTitle = styled.h2`
  color: #fff;
  font-family: ’Merriweather’, serif;
  font-size: 1.375rem;
  padding-bottom: 0.625rem;
`;
const StyledFtMain = styled.footer`
  padding: 1.25rem 1.875rem;
  display: flex;
  flex-wrap: wrap;
`;
const StyledFtMainItem = styled.footer`
  padding: 1.25rem;
  min-width: 12.5rem /*200px*/;
`;

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const StyledInputEmail = styled.input`
  border: 0;
  padding: 0.625rem;
  margin-top: 0.3125rem;
`;
const StyledInputSubmit = styled.input`
  background-color: #00d188;
  color: #fff;
  cursor: pointer;
  border: 0;
  padding: 0.625rem 0.9375rem;
  margin-top: 0.3125rem;
`;
const StyledFtSocial = styled.footer`
  padding: 0 1.875rem 1.25rem;
`;
const StyledFtSocialList = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 1px #777 solid;
  padding-top: 1.25rem;
`;
const StyledFtSocialListLi = styled.li`
  margin: 0.5rem;
  font-size: 1.25rem;
`;

const StyledFtLegal = styled.footer`
  padding: 0.9375rem 1.875rem;
  background-color: #333;
`;
const StyledFtLegalList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const StyledFtLegalListLi = styled.li`
  margin: 0.125rem 0.625rem;
  white-space: nowrap;
`;

export default function Footer() {
  return (
    <StyledDiv>
      <StyledFooter>
        <StyledFtMain>
          <StyledFtMainItem class="ft-main-item">
            <StyledFtTitle>About</StyledFtTitle>
            <StyledUl>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </StyledUl>
          </StyledFtMainItem>
          <StyledFtMainItem class="ft-main-item">
            <StyledFtTitle>Resources</StyledFtTitle>
            <StyledUl>
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">eBooks</a>
              </li>
              <li>
                <a href="#">Webinars</a>
              </li>
            </StyledUl>
          </StyledFtMainItem>
          <StyledFtMainItem class="ft-main-item">
            <StyledFtTitle>Contact</StyledFtTitle>
            <StyledUl>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
            </StyledUl>
          </StyledFtMainItem>
          <StyledFtMainItem class="ft-main-item">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter to get our latest news.</p>
            <StyledForm>
              <StyledInputEmail
                type="email"
                name="email"
                placeholder="Enter email address"
              />
              <StyledInputSubmit type="submit" value="Subscribe" />
            </StyledForm>
          </StyledFtMainItem>
        </StyledFtMain>

        <StyledFtSocial class="ft-social">
          <StyledFtSocialList class="ft-social-list">
            <StyledFtSocialListLi>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
            </StyledFtSocialListLi>
            <StyledFtSocialListLi>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </StyledFtSocialListLi>
            <StyledFtSocialListLi>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </StyledFtSocialListLi>
            <StyledFtSocialListLi>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
            </StyledFtSocialListLi>
            <StyledFtSocialListLi>
              <a href="#">
                <i class="fab fa-Linkedin"></i>
              </a>
            </StyledFtSocialListLi>
            <StyledFtSocialListLi>
              <a href="#">
                <i class="fab fa-youtube"></i>
              </a>
            </StyledFtSocialListLi>
          </StyledFtSocialList>
        </StyledFtSocial>

        <StyledFtLegal>
          <StyledFtLegalList>
            <StyledFtLegalListLi>
              <a href="#">Terms &amp; Conditions</a>
            </StyledFtLegalListLi>
            <StyledFtLegalListLi>
              <a href="#">Privacy Policy</a>
            </StyledFtLegalListLi>
            <StyledFtLegalListLi>
              {" "}
              2020 Copyright Farm To Table LLC
            </StyledFtLegalListLi>
          </StyledFtLegalList>
        </StyledFtLegal>
      </StyledFooter>
    </StyledDiv>
  );
}
