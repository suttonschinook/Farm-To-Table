import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
	color: whitesmoke;
`;
const StyledDiv = styled.div`
	display: flex;
	flex: 1;
	min-height: 40vh;
	flex-direction: column;

	font-family: ’Lato’, sans-serif;
	margin: 0;
	padding: 0;
	justify-content: space-evenly;
`;
const StyledUl = styled.ul`
	color: whitesmoke;
	list-style: none;
	padding-left: 0;
`;
const StyledFooter = styled.footer`
	background-color: #007bff;
	height: 40vh;
	color: #bbb;
	line-height: 1.5;
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
	color: whitesmoke;
	padding: 1.25rem;
	min-width: 12.5rem /*200px*/;
`;

const StyledForm = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
const StyledInputEmail = styled.input`
	color: whitesmoke;
	border: 0;
	padding: 0.625rem;
	margin-top: 0.3125rem;
`;
const StyledInputSubmit = styled.input`
	background-color: red;
	color: whitesmoke;
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
					<StyledFtMainItem class='ft-main-item'>
						<StyledFtTitle>About</StyledFtTitle>
						<StyledUl>
							<li>
								<StyledLink to='/'>Home</StyledLink>
							</li>
							<li>
								<StyledLink to='/about'>About</StyledLink>
							</li>
							<li>
								<StyledLink to='/produce'>Produce</StyledLink>
							</li>
						</StyledUl>
					</StyledFtMainItem>
					<StyledFtMainItem class='ft-main-item'>
						<StyledFtTitle>Resources</StyledFtTitle>
						<StyledUl>
							<li>
								<StyledLink to='/recipes'>Recipes</StyledLink>
							</li>
							<li>
								<StyledLink to='/'>Blog</StyledLink>
							</li>
							<li>
								<StyledLink to='/'>eBooks</StyledLink>
							</li>
						</StyledUl>
					</StyledFtMainItem>
					<StyledFtMainItem class='ft-main-item'>
						<StyledFtTitle>Contact</StyledFtTitle>
						<StyledUl>
							<li>
								<StyledLink to='/'>Help</StyledLink>
							</li>
							<li>
								<StyledLink to='/'>Sales</StyledLink>
							</li>
							<li>
								<StyledLink to='/'>Advertise</StyledLink>
							</li>
						</StyledUl>
					</StyledFtMainItem>
					<StyledFtMainItem class='ft-main-item'>
						<h2>Stay Updated</h2>
						<p>
							Subscribe to our newsletter to get our latest news.
						</p>
						<StyledForm>
							<StyledInputEmail
								type='email'
								name='email'
								placeholder='Enter email address'
							/>
							<StyledInputSubmit
								type='submit'
								value='Subscribe'
							/>
						</StyledForm>
					</StyledFtMainItem>
				</StyledFtMain>

				<StyledFtSocial class='ft-social'>
					<StyledFtSocialList class='ft-social-list'>
						<StyledFtSocialListLi>
							<a
								href='https://facebook.com'
								target='_blank'
								rel='noopener noreferrer'
								alt=''
							>
								<img
									src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'
									height='30px'
									alt=''
								/>
							</a>
						</StyledFtSocialListLi>
						<StyledFtSocialListLi>
							<a
								href='https://twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								alt=''
							>
								<img
									src='https://www.museumofplay.org/sites/default/files/Twitter_Social_Icon_Circle_Color.png'
									height='30px'
									alt=''
								/>
							</a>
						</StyledFtSocialListLi>
						<StyledFtSocialListLi>
							<a
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								alt=''
							>
								<img
									src='https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300'
									height='30px'
									alt=''
								/>
							</a>
						</StyledFtSocialListLi>
						<StyledFtSocialListLi>
							<a
								href='https://github.com/'
								target='_blank'
								rel='noopener noreferrer'
								alt=''
							>
								<img
									src='http://pngimg.com/uploads/github/github_PNG83.png'
									height='30px'
									alt=''
								/>
							</a>
						</StyledFtSocialListLi>
						<StyledFtSocialListLi>
							<a
								href='https://linkedin.com'
								target='_blank'
								rel='noopener noreferrer'
								alt=''
							>
								<img
									src='http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-Download-PNG.png'
									height='30px'
									alt=''
								/>
							</a>
						</StyledFtSocialListLi>
						<StyledFtSocialListLi>
							<a
								href='https://youtube.com'
								target='_blank'
								rel='noopener noreferrer'
								alt=''
							>
								<img
									src='https://png2.cleanpng.com/sh/98084439ad743800f857f4596336e676/L0KzQYm3U8IxN5R5iZH0aYP2gLBuTgVvcaVqfJ98dHH3dcS0mf92fKZnfZ91b3fyPcr2lgR2apYyiN5qeT3lhcX7jB4ufKNmhuV5YYLofsW0kP5oNWZmeqNrZUC7SYW9g8E3Nmk9UKsDOUW8QYa5UcU6P2o7SKg5OD7zfri=/kisspng-united-states-youtube-logo-youtube-play-button-transparent-png-5ab1be08946c16.888989591521597960608.png'
									height='30px'
									alt=''
								/>
							</a>
						</StyledFtSocialListLi>
					</StyledFtSocialList>
				</StyledFtSocial>

				<StyledFtLegal>
					<StyledFtLegalList>
						<StyledFtLegalListLi>
							<StyledLink to='/'>
								Terms &amp; Conditions
							</StyledLink>
						</StyledFtLegalListLi>
						<StyledFtLegalListLi>
							<StyledLink to='/'>Privacy Policy</StyledLink>
						</StyledFtLegalListLi>
						<StyledFtLegalListLi>
							{' '}
							2020 Copyright Farm To Table LLC
						</StyledFtLegalListLi>
					</StyledFtLegalList>
				</StyledFtLegal>
			</StyledFooter>
		</StyledDiv>
	);
}
