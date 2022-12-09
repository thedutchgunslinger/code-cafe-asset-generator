import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Card} from './Card';

export function OutroAsset() {
	let frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const title = 'Bedankt voor het kijken!';

	//voor de start animatie

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
	const fadeInLogo = spring({
		from: 0,
		to: 1,
		frame: frame - 20,
		fps,
		config: {mass: 10, damping: 110, stiffness: 300},
	});
	const fadeInContentBox = spring({
		from: 0,
		to: 1,
		frame: frame - 40,
		fps,
		config: {mass: 10, damping: 110, stiffness: 300},
	});
	const fadeInFooter = spring({
		from: 0,
		to: 1,
		frame: frame - 50,
		fps,
		config: {mass: 10, damping: 110, stiffness: 300},
	});

	return (
		<>
			<Card
				height={flyInOut}
				opacity={fadeIn}
				title={title}
				fadeInLogo={fadeInLogo}
				fadeInContentBox={fadeInContentBox}
				fadeInFooter={fadeInFooter}
			/>
		</>
	);
}
