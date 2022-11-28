import React from "react";
import { Sequence } from "remotion";
import styled from "styled-components";
import { LowerThirdAsset } from "./lowerThird";


const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-diraction: column;
    justify-content: center;
    align-items: center;
    background-color: #111;
`;

const CenteredContainer = styled.div`
	width: 100%;
	heigt: 100%;
	display: flex;
	align-items: center;
	color: white;
	justify-content: center;
`;

export function LowerThird(){
    return <BackgroundContainer>
        <Sequence from={0} durationInFrames={210}>
        <CenteredContainer>
            <LowerThirdAsset/>
        </CenteredContainer>
        </Sequence>
    </BackgroundContainer>
}