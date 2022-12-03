import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {SubContainer} from './subContainer';

export function SubAsset() {
	let frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	//procent van de kijkers die geabboneerd zijn.
	const percentageOfSubscibed = 16;
	const percentageOfNotSubscibed = 100 - percentageOfSubscibed;

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
		const tweenPercentSubscibed = spring({
			from: 0,
			to: percentageOfSubscibed,
			frame: frame - 30,
			fps,
			config: {mass: 10, damping: 110, stiffness: 300},
		});
		const tweenPercentNotSubscibed = spring({
			from: 0,
			to: percentageOfNotSubscibed,
			frame: frame - 30,
			fps,
			config: {mass: 10, damping: 110, stiffness: 300},
		});
		var roundedTweenPercentSubscibed =
			Math.round(tweenPercentSubscibed * 1) / 1;
		var roundedTweenPercentNotSubscibed =
			Math.round(tweenPercentNotSubscibed * 1) / 1;
		return (
			<>
				<SubContainer
					top={flyInOut}
					opacity={fadeIn}
					percentSubscibed={roundedTweenPercentSubscibed}
					percentNotSubscibed={roundedTweenPercentNotSubscibed}
				/>
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
				<SubContainer
					top={flyInOut}
					opacity={fadeIn}
					percentSubscibed={percentageOfSubscibed}
					percentNotSubscibed={percentageOfNotSubscibed}
				/>
			</>
		);
	}
}
