import React from 'react';
import {useVideoConfig} from 'remotion';
import styled from 'styled-components';

interface BarProps {
    width: number
    opacity: number;
    title: string;
}

const Container: any = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

`;
const TextBox: any = styled.p`
    font-size: 15rem;
	font-family: poppins;
	color: white;
	text-decoration: underline solid rgb(116, 61, 251) 2rem;
    white-space: nowrap;
`;

export function Bar(props: BarProps) {
	const config = useVideoConfig();
    const {width, opacity, title} = props;

	return (
		<Container>
			<TextBox><p style={{width: `${width}%`, overflow: `hidden`, opacity: `${opacity}` }}>{title}</p></TextBox>
		</Container>
	);
}
