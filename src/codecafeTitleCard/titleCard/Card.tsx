import React from 'react';
import {useVideoConfig} from 'remotion';
import styled from 'styled-components';
import QRCode from 'react-qr-code';
import {primaryColor, secondaryColor, fontFamily} from './../../assets/constants';
import {Title} from './Title'

interface QrProps {
	height: number;
	opacity: number;
	title: string;
}

const Container: any = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${primaryColor};
	padding: 2rem;
	padding-bottom: 1rem;
	/* border-radius: 20px; */
	flex-direction: column;
	height: 100vh;
	width: 100%;
	/* position: absolute; */
	/* left: 0%; */
	overflow: hidden;
`;
const TextBox: any = styled.p`
	font-size: 4rem;
	font-family: ${fontFamily};
	color: ${secondaryColor};
	font-weight: bold;
	max-width: 800px;
	text-align: center;
`;

export function Card(props: QrProps) {
	const config = useVideoConfig();
	const {height, opacity, title} = props;

	return (
		<Container style={{height: `${height}%`, opacity: `${opacity}`}}>
			<TextBox>
				<Title titleText={title} titleColor={'#ffffff'} />
			</TextBox>
		</Container>
	);
}
