import React from 'react';
import {useVideoConfig} from 'remotion';
import styled from 'styled-components';

interface ArrowRightProps {
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

export function ArrowRight(props: ArrowRightProps) {
    const {transformY, transformX, opacity} = props;
	const config = useVideoConfig();

	return (
		<Container>
			<svg
				viewBox={`0 0 383 658`}
				height="100%"
				transform={`translate(${transformX}, ${transformY})`}
                opacity={opacity}
			>
				<g transform="matrix(0.943821,0,0,0.97834,-2.29863,-3.20021)">
					<rect
						id="Artboard2"
						x="2.435"
						y="3.271"
						width="404.762"
						height="672.384"
						fill="none"
					/>
					<clipPath id="clip10">
						<rect
							id="Artboard21"
							x="2.435"
							y="3.271"
							width="404.762"
							height="672.384"
						/>
					</clipPath>
					<g clip-path="url(clip10)">
						<g transform="matrix(1.05952,0,0,1.02214,-115.003,204.548)">
							<g id="arrowRight">
								<g>
									<clipPath id="clip20">
										<rect
											x="92.668"
											y="-206.86"
											width="408.996"
											height="672.83"
										/>
									</clipPath>
									<g clip-path="url(#clip20)">
										<g transform="matrix(1,0,0,1,-513,-493.5)">
											<g>
												<clipPath id="clip30">
													<rect x="0" y="0" width="1026" height="987" />
												</clipPath>
												<g clip-path="url(#clip30)">
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
														<g transform="matrix(-5.72612,0,0,4.27646,28218.7,-18038.3)">
															<path
																d="M4749,4319L4717,4319L4657.15,4397L4720,4476.85L4749,4476.85L4694,4397L4749,4319Z"
																fill="rgb(11,231,128)"
															/>
															<path
																d="M4749,4319L4717,4319L4657.15,4397L4720,4476.85L4749,4476.85L4694,4397L4749,4319ZM4729.71,4329L4721.93,4329C4712.23,4341.65 4681.64,4381.51 4669.82,4396.92C4682.17,4412.62 4714.79,4454.06 4724.86,4466.85L4729.97,4466.85L4685.76,4402.67C4683.39,4399.22 4683.41,4394.66 4685.83,4391.24C4685.83,4391.24 4713.64,4351.79 4729.71,4329Z"
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
