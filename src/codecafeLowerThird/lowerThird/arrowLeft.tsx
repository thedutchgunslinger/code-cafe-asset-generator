import React from 'react';
import {useVideoConfig} from 'remotion';
import styled from 'styled-components';

interface ArrowLeftProps {
	transformY: number;
	transformX: number;
    opacity: number;
}

const Container = styled.div`
	width: 500px;
	height: 500px;
	display: flex;
	align-items: center;
	justify-content: center;
	
`;

export function ArrowLeft(props: ArrowLeftProps) {
    const {transformY, transformX, opacity} = props;
	const config = useVideoConfig();

	return (
		<Container>
			<svg viewBox={`0 0 383 658`} height="100%"
            transform={`translate(${transformX}, ${transformY})`}
            opacity={opacity}
            >
				<g transform="matrix(0.737362,0,0,0.873741,28.0427,26.1764)">
					<rect
						id="Artboard2"
						x="-38.031"
						y="-29.959"
						width="519.419"
						height="753.084"
						fill="none"
					/>
					<clipPath id="_clip1">
						<rect
							id="Artboard21"
							x="-38.031"
							y="-29.959"
							width="519.419"
							height="753.084"
						/>
					</clipPath>
					<g clip-path="url(#_clip1)">
						<g transform="matrix(1.35619,0,0,1.1445,639.4,195.045)">
							<g id="arrowLeft">
								<g>
									<clipPath id="_clip2">
										<rect
											x="-503.672"
											y="-200.361"
											width="391.701"
											height="665.652"
										/>
									</clipPath>
									<g clip-path="url(#_clip2)">
										<g transform="matrix(1,0,0,1,-513,-493.5)">
											<g>
												<clipPath id="_clip3">
													<rect x="0" y="0" width="1026" height="987" />
												</clipPath>
												<g clip-path="url(#_clip3)">
													<g
														id="Artboard1"
														transform="matrix(0.72766,0,0,0.974327,-122.974,-123.988)"
													>
														<rect
															x="169"
															y="127.255"
															width="1410"
															height="1012.75"
															fill="none"
														/>
														<g transform="matrix(5.72612,0,0,4.27646,-26478.9,-18038.3)">
															<path
																d="M4749,4319L4717,4319L4657.15,4397L4720,4476.85L4749,4476.85L4694,4397L4749,4319Z"
																fill="rgb(11,231,128)"
															/>
															<path
																d="M4749,4319L4717,4319L4657.15,4397L4720,4476.85L4749,4476.85L4694,4397L4749,4319ZM4729.71,4329L4685.83,4391.24C4683.41,4394.66 4683.39,4399.22 4685.76,4402.67L4729.97,4466.85L4724.86,4466.85C4724.86,4466.85 4684.03,4414.98 4669.82,4396.92C4669.82,4396.92 4710.43,4343.99 4721.93,4329L4729.71,4329Z"
																fill="rgb(11,231,128)"
															/>
														</g>
													</g>
												</g>
											</g>
										</g>
									</g>
								</g>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</Container>
	);
}
