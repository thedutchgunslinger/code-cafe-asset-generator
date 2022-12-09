import React from 'react';
import {useVideoConfig} from 'remotion';
import styled from 'styled-components';
import QRCode from 'react-qr-code';
import {primaryColor, secondaryColor, fontFamily, textColor} from './../../assets/constants';
import {Title} from './Title'
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
	/* align-items: center; */
	justify-content: flex-start;
	background-color: ${primaryColor};
	padding: 4rem;
	/* border-radius: 20px; */
	flex-direction: column;
	height: 100vh;
	width: 100%;
	/* position: absolute; */
	/* left: 0%; */
	overflow: hidden;
`;

const Header: any = styled.div`
	display: flex;
	height: 200px;
	/* align-items: center; */
`;
const Footer: any = styled.div`
	display: flex;
	height: 200px;
	gap: 2rem;
	align-items: flex-end;
	margin-left: 3rem;	
`;
const TextBox: any = styled.p`
	font-size: 2.5rem;
	font-family: ${fontFamily};
	color: ${secondaryColor};
	font-weight: bold;
`;

const CTA: any = styled.div`
	height: 600px;
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: space-evenly;
`;
const CTAText: any = styled.p`
	color: ${textColor};
	font-size: 2rem;
	width: 100%;
	text-align: center;
	font-family: ${fontFamily};
	font-weight: bold;
	align-items: center;
`;

const FooterText: any = styled.p`
	color: ${textColor};
	font-family: ${fontFamily};
	font-size: 2rem;
`;

export function Card(props: QrProps) {
	const config = useVideoConfig();
	const {height, opacity, title, fadeInLogo, fadeInContentBox, fadeInFooter} = props;

	return (
		<Container style={{height: `${height}%`, opacity: `${opacity}`}}>
			<Header>
				<Logo fadeIn={fadeInLogo}></Logo>
				<TextBox>
					<Title titleText={title} titleColor={'#ffffff'} />
				</TextBox>
			</Header>
			<CTA style={{scale: `${fadeInContentBox}`}}>
				<CTAText>Mischien ook leuk</CTAText>
				<CTAText>Abboneer</CTAText>
				<CTAText>Vorige video</CTAText>
			</CTA>
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
