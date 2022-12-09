import React from 'react';
import {Sequence} from 'remotion';
import {CardAsset} from './titleCard';

export function TitleCardPortrait() {
	return (
		<Sequence from={0} durationInFrames={150}>
			<CardAsset/>
		</Sequence>
	);
}
