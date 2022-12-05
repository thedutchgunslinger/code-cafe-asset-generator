import React from 'react';
import {Sequence} from 'remotion';
import styled from 'styled-components';
import {LowerThirdAsset} from './lowerThird';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';

const queryClient = new QueryClient();

const BackgroundContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CenteredContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	color: white;
	justify-content: center;
`;

export function LowerThird() {
	return (
		<QueryClientProvider client={queryClient}>
			<BackgroundContainer>
				<Sequence from={0} durationInFrames={210}>
					<CenteredContainer>
						<LowerThirdAsset />
					</CenteredContainer>
				</Sequence>
			</BackgroundContainer>
		</QueryClientProvider>
	);
}
