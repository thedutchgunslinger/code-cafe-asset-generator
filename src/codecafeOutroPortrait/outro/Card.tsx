import React from 'react';
import {useVideoConfig} from 'remotion';
import styled from 'styled-components';
import QRCode from 'react-qr-code';
import {
	primaryColor,
	secondaryColor,
	fontFamily,
	textColor,
} from './../../assets/constants';
import {Title} from './Title';
import {Logo} from './logo';
import {Globe} from './globe';
import {Discord} from './discord';

interface QrProps {
	height: number;
	opacity: number;
	title: string;
	fadeInLogo: number;
	fadeInContentBox: number;
	fadeInFooter: number;
}

const Container: any = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: ${primaryColor};
	padding: 4rem;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	overflow: hidden;
`;

const Header: any = styled.div`
position: absolute;
top: 50%;
translate: 0 -50%;
	display: flex;
	justify-self: center;
`;
const Footer: any = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	flex-direction: column;
	position: absolute;
	bottom: 1rem;
`;
const TextBox: any = styled.p`
	font-size: 2.5rem;
	font-family: ${fontFamily};
	color: ${secondaryColor};
	font-weight: bold;

`;

const FooterText: any = styled.p`
	color: ${textColor};
	font-family: ${fontFamily};
	font-size: 2.5rem;

`;

export function Card(props: QrProps) {
	const config = useVideoConfig();
	const {height, opacity, title, fadeInLogo, fadeInContentBox, fadeInFooter} =
		props;

	return (
		<Container style={{height: `${height}%`, opacity: `${opacity}`}}>
			<Header>
				<Logo fadeIn={fadeInLogo}></Logo>
				<TextBox>
					<Title titleText={title} titleColor={'#ffffff'} />
				</TextBox>
			</Header>
			<Footer style={{scale: `${fadeInFooter}`}}>
				<FooterText>
					<Discord /> https://discord.com/invite/xwv8ptXUdh
				</FooterText>
				<FooterText>
					<Globe /> https://code-cafe.nl
				</FooterText>
			</Footer>
		</Container>
	);
}
