	import React from 'react';
	import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
	const title: React.CSSProperties = {
	};
const word: React.CSSProperties = {
	marginLeft: 10,
	marginRight: 10,
	display: 'inline-block',
};
export const Title: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const words = titleText.split(' ');
	return (
		<h1 style={title}>
			{words.map((t, i) => {
				const delay = i * 5;
				const scale = spring({
					fps: videoConfig.fps,
					frame: frame - delay - 30,
					config: {
						damping: 200,
					},
				});
				return (
					<span
						key={t}
						style={{
							...word,
							transform: `scale(${scale})`,
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};