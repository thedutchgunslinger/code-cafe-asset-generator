import React from 'react';
import {Sequence} from 'remotion';
import styled from 'styled-components';
import {SubAsset} from './subsciberPercent';

export function subscriberPercent() {
	return (
		<Sequence from={0} durationInFrames={360}>
			<SubAsset />
		</Sequence>
	);
}
