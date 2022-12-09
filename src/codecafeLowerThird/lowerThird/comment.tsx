import React from 'react';
import {useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {
	primaryColor
} from './../../assets/constants';

interface commentProps {
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

export function Comment(props: commentProps) {
	const {transformY, transformX, opacity} = props;
	const config = useVideoConfig();

	return (
		<Container>
			<svg
				viewBox={`0 0 617 658`}
				height="100%"
				transform={`translate(${transformX}, ${transformY})`}
				opacity={opacity}
			>
				<g transform="matrix(1.18909,0,0,0.873741,45.2224,26.1764)">
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
						<g transform="matrix(0.832528,0,0,1.1445,-36.0124,-221.099)">
							<g
								id="logo-codecafe.svg"
								transform="matrix(1,0,0,1,492.811,363.602)"
							>
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
																d="M4749,4319L4717,4319L4686.16,4397.78L4657.13,4476.85L4686.13,4476.85L4718,4397L4749,4319Z"
																fill={primaryColor}
															/>
														</g>
													</g>
												</g>
											</g>
										</g>
									</g>
								</g>
							</g>
							<g transform="matrix(4.16667,0,0,4.16667,-19169.6,-17829.1)">
								<path
									d="M4749,4319L4717,4319L4686.16,4397.78L4657.13,4476.85L4686.13,4476.85L4718,4397L4749,4319Z"
									fill={primaryColor}
								/>
							</g>
						</g>
					</g>
				</g>
			</svg>
		</Container>
	);
}
