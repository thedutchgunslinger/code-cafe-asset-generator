import React from 'react';
import {Sequence} from 'remotion';
import styled from 'styled-components';
import {QrAsset} from './qrcode';

export function Qrcode() {
	return (
		<Sequence from={0} durationInFrames={360}>
			<QrAsset />
		</Sequence>
	);
}
