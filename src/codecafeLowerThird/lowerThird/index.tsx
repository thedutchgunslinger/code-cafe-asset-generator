import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Comment} from './comment';
import {Bar} from './bar';

export function LowerThirdAsset() {
	let frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	// variabele voor de tekst
	const title = 'Zet hier je tekst';

	//start van de animatie
	if (frame < 100) {
		const arrowXPositionLeft = spring({
			from: -200,
			to: 0,
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
		const expand = spring({
			from: 0,
			to: 100,
			frame: frame - 10,
			fps,
			config: {mass: 10, damping: 110, stiffness: 300},
		});
		return (
			<>
				<Comment
					transformY={0}
					transformX={arrowXPositionLeft}
					opacity={fadeIn}
				></Comment>
				<Bar width={expand} opacity={fadeIn} title={title}></Bar>
			</>
		);
	} else {
		// animatie aan het einde
		frame = frame - 180; //start de animatie aan het einde
		const arrowXPositionLeft = spring({
			from: 0,
			to: -200,
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
		const expand = spring({
			from: 100,
			to: 0,
			frame: frame + 10,
			fps,
			config: {mass: 10, damping: 110, stiffness: 300},
		});
		return (
			<>
				<Comment
					transformY={0}
					transformX={arrowXPositionLeft}
					opacity={fadeIn}
				></Comment>
				<Bar width={expand} opacity={fadeIn} title={title}></Bar>
			</>
		);
	}
}
