import React from 'react';
import {Sequence} from 'remotion';
import {OutroAsset} from './outro';

export function OutroPortrait() {
	return (
		<Sequence from={0} durationInFrames={120}>
			<OutroAsset/>
		</Sequence>
	);
}
