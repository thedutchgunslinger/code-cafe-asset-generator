import {Composition} from 'remotion';
import {LowerThird} from './codecafeLowerThird';
import {Qrcode} from './codecafeQRcode';
import {subscriberPercent} from './codecafeSubscriberPercent';
import {TitleCard} from './codecafeTitleCard';
import {TitleCardPortrait} from './codecafeTitleCardPortrait';
import {Outro} from './codecafeOutro';
import {OutroPortrait} from './codecafeOutroPortrait'
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
				width={4000}
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
			<Composition
				id="subscriberPercent"
				component={subscriberPercent}
				durationInFrames={360}
				height={1080}
				width={1920}
				fps={30}
			/>
			<Composition
				id="titleCard"
				component={TitleCard}
				durationInFrames={150}
				height={1080}
				width={1920}
				fps={30}
			/>
			<Composition
				id="titleCardPortrait"
				component={TitleCardPortrait}
				durationInFrames={150}
				height={1920}
				width={1080}
				fps={30}
			/>
			<Composition
				id="outro"
				component={Outro}
				durationInFrames={600}
				height={1080}
				width={1920}
				fps={30}
			/>
			<Composition
				id="outroPortrait"
				component={OutroPortrait}
				durationInFrames={120}
				height={1920}
				width={1080}
				fps={30}
			/>
		</>
	);
};
