import React from 'react';
import {useVideoConfig} from 'remotion';
import styled from 'styled-components';
import QRCode from 'react-qr-code';

interface QrProps {
	top: number;
	opacity: number;
  url: string;
}

const Container: any = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #0be881;
	padding: 2rem;
  padding-bottom: 1rem;
	border-radius: 20px;
	flex-direction: column;
  height: 700px;
  position: absolute;
  left: 50%;
  translate: -50% -50%;
`;
const TextBox: any = styled.p`
	font-size: 3rem;
	font-family: poppins;
	color: white;
	white-space: nowrap;
  font-weight: bold;
`;

export function Qrcode(props: QrProps) {
	const config = useVideoConfig();
	const {top, opacity, url} = props;

	return (
		<Container style={{top: `${top}%`, opacity: `${opacity}`}}>
			<QRCode
				size={500}
				style={{height: 'auto', maxWidth: '100%', width: '100%'}}
				value={url}
				viewBox={`0 0 500 500`}
				fgColor="#743dfb"
			/>
			<TextBox>Scan me!</TextBox>
		</Container>
	);
}
