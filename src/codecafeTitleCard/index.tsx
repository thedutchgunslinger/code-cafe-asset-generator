import React from 'react';
import {Sequence} from 'remotion';
import {CardAsset} from './titleCard';

export function TitleCard() {
	return (
		<Sequence from={0} durationInFrames={150}>
			<CardAsset/>
		</Sequence>
	);
}
