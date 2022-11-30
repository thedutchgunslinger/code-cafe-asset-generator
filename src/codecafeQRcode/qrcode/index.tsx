import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Qrcode} from './qrcode';


export function QrAsset() {
	let frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const qrUrl = "https://code-cafe.nl/"
	
	if(frame < 100){

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
				<Qrcode top={flyInOut} opacity={fadeIn} url={qrUrl}/>
		</>
	);
}else {
	frame = frame -330;
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
				<Qrcode top={flyInOut} opacity={fadeIn} url={qrUrl}/>
			</>
		);
}
}
