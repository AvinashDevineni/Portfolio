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

import NodeLogo from './public/skill-logos/nodejs.png';
import DjangoLogo from './public/skill-logos/django.png';
import SpringLogo from './public/skill-logos/spring.png';

import GitLogo from './public/skill-logos/git.png';
import AwsLogo from './public/skill-logos/aws.png';

import './App.css';

export default function App() {
	const linksImgSize = 22;
	const skillsImgSize = 25;
	const carouselLabeledTextGap = 7;

	return (
		<>
			<div id='dashboard'>
				<div className='card' id='about'>
					<h1>About</h1>
					<h2 style={{marginTop: '10px'}}>Hi, I'm Avinash</h2>
					<h3>16 y/o <strong style={{fontFamily: 'Lexend'}}>Full-Stack</strong> Developer</h3>
					<p>Bentonville, Arkansas</p>

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
				</div>

				<div className='card' id='skills'>
					<h1>Skills</h1>

					<h2 style={{marginTop: '10px', marginBottom: '5px'}}>Frontend</h2>
					<Carousel styles={{
						fontSize: '20px', border: 'black 2px solid',
						borderRadius: '10px', padding: '5px 0px',
					 }}
					 childGap={20} pixelsMove={1} moveDelayMs={10}
					 carouselItems={[
						<LabeledText text="React" gap={carouselLabeledTextGap}
						 labelAttributes={{
							src: ReactLogo, width: skillsImgSize,
							height: skillsImgSize
						 }}/>,
						<LabeledText text="HTML" gap={carouselLabeledTextGap}
						 labelAttributes={{
							src: HtmlLogo, width: skillsImgSize,
							height: skillsImgSize
						 }}/>,
						<LabeledText text="CSS" gap={carouselLabeledTextGap}
						 labelAttributes={{
							src: CssLogo, width: skillsImgSize,
							height: skillsImgSize
						 }}/>,
						<LabeledText text="TypeScript" gap={carouselLabeledTextGap}
						 labelAttributes={{
							src: TypeScriptLogo, width: skillsImgSize,
							height: skillsImgSize
						 }}/>,
						<LabeledText text="JavaScript" gap={carouselLabeledTextGap}
						 labelAttributes={{
							src: JavaScriptLogo, width: skillsImgSize,
							height: skillsImgSize
						 }}/>
					 ]}/>

					<h2 style={{marginTop: '20px', marginBottom: '5px'}}>Backend</h2>
					<Carousel styles={{
						fontSize: '20px', border: 'black 2px solid',
						borderRadius: '10px', padding: '5px 0px',
					 }}
					 childGap={20} pixelsMove={1} moveDelayMs={20}
					 carouselItems={[
						<LabeledText text="NodeJS" gap={carouselLabeledTextGap}
						 labelAttributes={{
							src: NodeLogo, width: skillsImgSize,
							height: skillsImgSize
						 }}/>,
						<LabeledText text="Django" gap={carouselLabeledTextGap}
						 labelAttributes={{
							src: DjangoLogo, width: skillsImgSize,
							height: skillsImgSize
						 }}/>,
						 <LabeledText text="Spring" gap={carouselLabeledTextGap}
						 labelAttributes={{
							src: SpringLogo, width: skillsImgSize,
							height: skillsImgSize
						 }}/>
					 ]}/>

					<h2 style={{marginTop: '20px', marginBottom: '5px'}}>Services</h2>
					<Carousel styles={{
						fontSize: '20px', border: 'black 2px solid',
						borderRadius: '10px', padding: '5px 0px',
					 }}
					 childGap={20} pixelsMove={1} moveDelayMs={10}
					 carouselItems={[
						<LabeledText text="Git" gap={carouselLabeledTextGap}
						 labelAttributes={{
							src: GitLogo, width: skillsImgSize,
							height: skillsImgSize
						 }}/>,
						<LabeledText text="GitHub" gap={carouselLabeledTextGap}
						 labelAttributes={{
							src: GithubDarkLogo, width: skillsImgSize,
							height: skillsImgSize
						 }}/>,
						 <LabeledText text="AWS" gap={carouselLabeledTextGap}
						 labelAttributes={{
							src: AwsLogo, width: skillsImgSize,
							height: skillsImgSize
						 }}/>,
					 ]}/>
				</div>
				
				<div className='card' id='projects'>
					<h1>Projects</h1>
					<p>Project ABC</p>
					<p>Project DEF</p>
					<p>Project XYZ</p>
				</div>

				<div className='card' id='XYZ'>
					<h1>XYZ</h1>
				</div>

				<div className='card' id='XYZ'>
					<h1>XYZ</h1>
				</div>

				<div className='card' id='XYZ'>
					<h1>XYZ</h1>
				</div>

				<div className='card' id='XYZ'>
					<h1>XYZ</h1>
				</div>
			</div>
		</>
	);
};