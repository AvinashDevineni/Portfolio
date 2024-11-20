import Carousel from "./components/Carousel";
import LabeledText from "./components/LabeledText";

import GmailLogo from './public/links-logos/gmail.png';
import GithubLightLogo from './public/links-logos/github-light.png';
import GithubDarkLogo from './public/links-logos/github-dark.png';
import LinkedInLogo from './public/links-logos/linkedin.png';

import ReactLogo from './public/skill-logos/react.png';
import HtmlLogo from './public/skill-logos/html.png';
import CssLogo from './public/skill-logos/css.png';
import TypeScriptLogo from './public/skill-logos/typescript.png';
import JavaScriptLogo from './public/skill-logos/javascript.png';

import Headshot from './public/headshot.jpg';

import './App.css';

export default function App() {
	const linksImgSize = 22;
	const skillsImgSize = 25;

	return (
		<>
			<div className='card' id='about'>
				<div>
					<h1>About</h1>
					<h2 style={{marginTop: '10px'}}>Hi, I'm Avinash</h2>
					<h3>16 y/o Software Developer</h3>

					<div id='links' style={{marginTop: '5px'}}>
						<a href="mailto:devad50211@gmail.com" target="_blank">
							<img src={GmailLogo} alt="Gmail logo"
							 width={linksImgSize} height={linksImgSize}/>
						</a>
						<a href="https://github.com/AvinashDevineni" target="_blank">
							<img src={GithubDarkLogo} alt="Github logo"
							 width={linksImgSize} height={linksImgSize}/>
						</a>
						<a href="https://linkedin.com/in/avinash-devineni" target="_blank">
							<img src={LinkedInLogo} alt="LinkedIn logo"
							 width={linksImgSize} height={linksImgSize}/>
						</a>
					</div>

					<Carousel styles={{
						fontSize: '20px', border: 'black 2px solid',
						borderRadius: '10px', padding: '5px 0px',
						marginTop: '10px'
					 }}
					 childGap={20} pixelsMove={1} moveDelayMs={25}
					 carouselItems={[
						<LabeledText text="React" gap={10} labelStyles={{
							src: ReactLogo, width: skillsImgSize,
							height: skillsImgSize
						}}/>,
						<LabeledText text="HTML" gap={10} labelStyles={{
							src: HtmlLogo, width: skillsImgSize,
							height: skillsImgSize
						}}/>,
						<LabeledText text="CSS" gap={10} labelStyles={{
							src: CssLogo, width: skillsImgSize,
							height: skillsImgSize
						}}/>,
						<LabeledText text="TypeScript" gap={10} labelStyles={{
							src: TypeScriptLogo, width: skillsImgSize,
							height: skillsImgSize
						}}/>,
						<LabeledText text="JavaScript" gap={10} labelStyles={{
							src: JavaScriptLogo, width: skillsImgSize,
							height: skillsImgSize
						}}/>
					 ]}/>
				</div>
				<div>
					<img src={Headshot} alt="Headshot of me" width={150} height={150}/>
				</div>
			</div>
		</>
	);
};