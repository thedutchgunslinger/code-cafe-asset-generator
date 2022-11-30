import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Qrcode} from './qrcode';

export function QrAsset() {
	let frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	//url van de qrcode
	const qrUrl = 'https://google.com/';

	//voor de start animatie
	if (frame < 100) {
		const flyInOut = spring({
			from: 20,
			to: 50,
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
				<Qrcode top={flyInOut} opacity={fadeIn} url={qrUrl} />
			</>
		);
	} else {
		// om ervoor te zorgen dat die ook terug animeert
		frame = frame - 330; // hierdoor start de animatie op het einde
		const flyInOut = spring({
			from: 50,
			to: 20,
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
				<Qrcode top={flyInOut} opacity={fadeIn} url={qrUrl} />
			</>
		);
	}
}
