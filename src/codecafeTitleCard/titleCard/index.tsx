import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Card} from './Card';

export function CardAsset() {
	let frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const URL = 'http://localhost:3001/titleCard';
	const [value, setValue] = React.useState('');

	React.useEffect(() => {
		fetch(URL)
			.then((response) => response.json())
			.then((data) => setValue(data.value));
	}, []);

	//url van de qrcode
	const title = value;

	//voor de start animatie
	if (frame < 100) {
		const flyInOut = spring({
			from: 0,
			to: 100,
			frame,
			fps,
			config: {mass: 10, damping: 110, stiffness: 300},
		});
		const fadeIn = spring({
			from: 0,
			to: 1,
			frame,
			fps,
			config: {mass: 10, damping: 110, stiffness: 300},
		});

		return (
			<>
				<Card height={flyInOut} opacity={fadeIn} title={title} />
			</>
		);
	} else {
		// om ervoor te zorgen dat die ook terug animeert
		frame = frame - 330; // hierdoor start de animatie op het einde
		const flyInOut = spring({
			from: 100,
			to: 0,
			frame,
			fps,
			config: {mass: 10, damping: 110, stiffness: 300},
		});
		const fadeIn = spring({
			from: 1,
			to: 0,
			frame,
			fps,
			config: {mass: 10, damping: 110, stiffness: 300},
		});
		return (
			<>
				<Card height={flyInOut} opacity={fadeIn} title={title} />
			</>
		);
	}
}
