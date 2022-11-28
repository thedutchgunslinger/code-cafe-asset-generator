import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {ArrowLeft} from './arrowLeft';
import {ArrowRight} from './arrowRight';
import {Bar} from './bar';

export function LowerThirdAsset() {
	let frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	
	if(frame < 100){

		const arrowXPositionRight = spring({
			from: 200,
			to: 0,
			frame,
			fps,
			config: {mass: 10, damping: 110, stiffness: 300},
		});
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
			frame,
			fps,
			config: {mass: 10, damping: 110, stiffness: 300},
		});
		return (
			<>
			<ArrowLeft
				transformY={0}
				transformX={arrowXPositionLeft}
				opacity={fadeIn}
				></ArrowLeft>
			<Bar width={expand} opacity={fadeIn} title="Test Title"></Bar>
			<ArrowRight
				transformY={0}
				transformX={arrowXPositionRight}
				opacity={fadeIn}
				></ArrowRight>
		</>
	);
}else {
	frame = frame -180;
	const arrowXPositionRight = spring({
			from: 0,
			to: 200,
			frame,
			fps,
			config: {mass: 10, damping: 110, stiffness: 300},
		});
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
			frame,
			fps,
			config: {mass: 10, damping: 110, stiffness: 300},
		});
		return (
			<>
			<ArrowLeft
				transformY={0}
				transformX={arrowXPositionLeft}
				opacity={fadeIn}
				></ArrowLeft>
			<Bar width={expand} opacity={fadeIn} title="Test Title"></Bar>
			<ArrowRight
				transformY={0}
				transformX={arrowXPositionRight}
				opacity={fadeIn}
				></ArrowRight>
		</>
		);
}
}
