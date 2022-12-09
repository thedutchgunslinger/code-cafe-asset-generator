import React from 'react';
import {Sequence} from 'remotion';
import {OutroAsset} from './outro';

export function Outro() {
	return (
		<Sequence from={0} durationInFrames={600}>
			<OutroAsset/>
		</Sequence>
	);
}
