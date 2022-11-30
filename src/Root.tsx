import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import { LowerThird } from './codecafeLowerThird';
import { Qrcode } from './codecafeQRcode';
// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="codecafeLowerThird"
				component={LowerThird}
				durationInFrames={210}
				fps={30}
				width={3500}
				height={1080}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				// defaultProps={{
				// 	titleText: 'Welcome to Remotion',
				// 	titleColor: 'black',
				// }}
			/>
			<Composition
				id="qrcode"
				component={Qrcode}
				durationInFrames={360}
				height={1080}
				width={1920}
				fps={30}
			/>
		</>
	);
};
