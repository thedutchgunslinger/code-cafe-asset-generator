import React from 'react';
import {Sequence} from 'remotion';
import styled from 'styled-components';
import {CardAsset} from './titleCard';

export function TitleCard() {
	return (
		<Sequence from={0} durationInFrames={360}>
			<CardAsset/>
		</Sequence>
	);
}
