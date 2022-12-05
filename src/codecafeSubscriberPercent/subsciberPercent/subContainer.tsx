import React from 'react';
import {useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {PercentBar} from './percentBar';


interface QrProps {
	top: number;
	opacity: number;
	percentSubscibed: number;
	percentNotSubscibed: number;
}

const Container: any = styled.div`
	display: flex;
	/* align-items: center; */
	justify-content: flex-start;
	background-color: #0be881;
	padding: 2rem;
	padding-bottom: 1rem;
	border-radius: 20px;
	flex-direction: column;
	/* height: 700px; */
	min-width: 1000px;
	position: absolute;
	left: 50%;
	translate: -50% -50%;
`;

const TitleContainer: any = styled.p`

`;
const Title: any = styled.p`
	font-size: 4rem;
	font-weight: bold;
	font-family: poppins;
	color: #743dfb;
	margin: 0;
`;

const SubTitle: any = styled.p`
	font-family: poppins;
	font-size: 2.5rem;
	color: white;
	margin: 0;
`;

export function SubContainer(props: QrProps) {
	const config = useVideoConfig();
	const {top, opacity, percentSubscibed, percentNotSubscibed} = props;
	return (
		<Container style={{top: `${top}%`, opacity: `${opacity}`}}>
			<TitleContainer>
				<Title>Kijktijd van abbonees</Title>
				<SubTitle>Percentage van abbonees</SubTitle>
			</TitleContainer>
			<PercentBar percent={percentSubscibed} isSubscribed={true}></PercentBar>
			<PercentBar
				percent={percentNotSubscibed}
				isSubscribed={false}
			></PercentBar>
		</Container>
	);
}
