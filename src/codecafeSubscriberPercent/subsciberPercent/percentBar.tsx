import React from 'react';
import {useVideoConfig} from 'remotion';
import styled from 'styled-components';

interface percentBarProps {
	percent: number;
	isSubscribed: boolean;
}

const Container: any = styled.div`
  display: flex;
  align-items: center;
  min-width: 900px;
`;
const Meter: any = styled.div`
	height: 20px;
	width: 100%;
	position: relative;
	background: #0be881;
	border-radius: 25px;
	padding: 10px 0;
	margin: 0 2rem;
	overflow: hidden;
`;
const InnerBar: any = styled.span`
	display: block;
	height: 30px;
  border-radius: 20px;
	background-color: #743dfb;
	margin-top: -1rem;
	position: relative;
	overflow: hidden;
  transition: all 10ms linear;
`;
const Text: any = styled.p`
  font-family: poppins;
  color: white;
  font-size: 2rem;
  white-space: nowrap;
`;

export function PercentBar(props: percentBarProps) {
	const config = useVideoConfig();
	const {percent, isSubscribed} = props;
  const legendHide = isSubscribed ? '#0be881' : 'White';

	return (
		// style={{top: `${top}%`, opacity: `${opacity}`}}
		<Container>
			<Text><span style={{color: `${legendHide}`}}>Niet</span> Geabboneerd</Text>
			<Meter>
				<InnerBar style={{width: `${percent}%`}}></InnerBar>
			</Meter>
			<Text>{percent}%</Text>
		</Container>
	);
}
