import { ReactElement, useLayoutEffect, useState } from "react";

import Box from "./components/Box";
import Carousel from "./components/Carousel";
import LabeledText from "./components/LabeledText";
import Project from './components/Project';

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

import ChessSiteImage from './public/project-imgs/chesssite.png';

import './App.css';

//#region Constants
const linksImgSize = 22;

const skillsImgSize = 25;

const carouselLabeledTextGap = 7;

const projectImgWidth = '300px';
const projectImgHeight = '140px';

const borderSize = 2;
const boxSize = 200;
//#endregion

export default function App() {
	const [boxes, setBoxes] = useState<ReactElement[]>([]);

	useLayoutEffect(() => {
		// if (isOnTouchscreenDevice)
		//     return;
		
		document.body.style.overflow = 'hidden';

		const width = window.innerWidth;
		const height = window.innerHeight;

		const centerPos = {
			x: Math.floor(width / 2 - boxSize / 2),
			y: Math.floor(height / 2 - boxSize / 2)
		};

		const maxNumBoxesHoriz = Math.ceil((width - (centerPos.x + boxSize / 2)) / boxSize) + 1;
		const maxNumBoxesVert = Math.ceil((centerPos.y - boxSize / 2) / boxSize) + 1;
		console.log(maxNumBoxesVert);

		//#region Creating grid
		for (let x = 0; x <= maxNumBoxesHoriz; x++) {
			for (let y = 0; y <= maxNumBoxesVert; y++) {
				setBoxes(boxes => {
					return boxes.concat(
						<Box left={centerPos.x + x * boxSize} top={centerPos.y + y * boxSize}
						 idleColor="gray" hoverColor="yellow" width={boxSize} height={boxSize}
						 borderSize={borderSize} timeToHoverColor={0.25} timeToIdleColor={1}
						 hoverColorDelay={100}/>
					);
				});
			}
		}

		for (let x = 1; x <= maxNumBoxesHoriz; x++) {
			for (let y = 0; y <= maxNumBoxesVert; y++) {
				setBoxes(boxes => {
					return boxes.concat(
						<Box left={centerPos.x - x * boxSize} top={centerPos.y + y * boxSize}
						 idleColor="gray" hoverColor="yellow" width={boxSize} height={boxSize}
						 borderSize={borderSize} timeToHoverColor={0.25} timeToIdleColor={1}
						 hoverColorDelay={100}/>
					);
				});
			}
		}

		for (let x = 0; x <= maxNumBoxesHoriz; x++) {
			for (let y = 1; y <= maxNumBoxesVert; y++) {
				setBoxes(boxes => {
					return boxes.concat(
						<Box left={centerPos.x + x * boxSize} top={centerPos.y - y * boxSize}
						 idleColor="gray" hoverColor="yellow" width={boxSize} height={boxSize}
						 borderSize={borderSize} timeToHoverColor={0.25} timeToIdleColor={1}
						 hoverColorDelay={100}/>
					);
				});
			}
		}

		for (let x = 1; x <= maxNumBoxesHoriz; x++) {
			for (let y = 1; y <= maxNumBoxesVert; y++) {
				setBoxes(boxes => {
					return boxes.concat(
						<Box left={centerPos.x - x * boxSize} top={centerPos.y - y * boxSize}
						 idleColor="gray" hoverColor="yellow" width={boxSize} height={boxSize}
						 borderSize={borderSize} timeToHoverColor={0.25} timeToIdleColor={1}
						 hoverColorDelay={100}/>
					);
				});
			}
		}
		//#endregion

		return () => setBoxes([]);
	}, []);

	return (
		<>
			<div id='background'>{boxes}</div>

			<div id='dashboard'>
				<div className='card' id='about'>
					<h1>About</h1>
					<h2>Hi, I'm Avinash Devineni</h2>
					<h3>16 y/o <strong>Full-Stack</strong> Developer</h3>
					<p>Bentonville, Arkansas</p>

					<div id='links' style={{marginTop: '15px'}}>
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
					 childGap={20} pixelsMove={1} moveDelayMs={10}
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
					 ]} dir={1}/>

					<h2 style={{marginTop: '20px', marginBottom: '5px'}}>Services</h2>
					<Carousel styles={{
						fontSize: '20px', border: 'black 2px solid',
						borderRadius: '10px', padding: '5px 0px',
					 }}
					 childGap={20} pixelsMove={1} moveDelayMs={15}
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

					<div id='projects-list' style={{marginTop: '10px'}}>
						<a href="https://avinashdevineni.github.io/Chess-Site"
						 target="_blank" style={{width: `${projectImgWidth}px`}}>
							<Project name='Epic Chess Engine'
							 descriptionBullets={[
								<><strong>React</strong> frontend</>,
								<>API built w/ <strong>Spring</strong></>,
								<><strong>Note:</strong> API takes a while to load</>
							 ]} imgSrc={ChessSiteImage} imgWidth={projectImgWidth}
							 imgHeight={projectImgHeight} imgScale={1.2}
							 skills={{
								skillImgs: [ReactLogo, SpringLogo],
								skillImgsSize: 25, skillImgsSpacing: 10
							 }}/>
						</a>
						
						<Project name='Epic Chess Engine'
						descriptionBullets={[
							'', '', ''
						]} imgSrc={ChessSiteImage} imgWidth={projectImgWidth}
						imgHeight={projectImgHeight}/>
					</div>
				</div>

				<div className='card' id='awards'>
					<h1>Awards</h1>

					<div id='awards-list'>
						<div>
							<a href="https://www.congressionalappchallenge.us/" target="_blank">
								<h2>2024 App Challenge</h2>
							</a>
							<p>
								<strong>3rd place</strong> w/ &#9;
								<a href="https://www.youtube.com/watch?v=XDXHnyvqBC0" target="_blank">
									ParkinDetect
								</a>
							</p>
							<ul>
								<li>Created <strong>pre-processing</strong> for AI model</li>
								<li>Developed <strong>Django</strong> backend</li>
							</ul>
						</div>

						<div>
							<a href="https://usaco.org/" target="_blank"><h2>USACO</h2></a>
							<p><strong>Silver division</strong> (top 30%)</p>
							<ul>
								<li>
									Learned and utilized &#9;
									<strong>data structures</strong> (queue, stack, map, etc.)
									and <strong>algorithms</strong> &#9; (DFS, two pointer, etc.)
								</li>
							</ul>
						</div>

						<div>
							<h2>College Board</h2>
							<p><strong>AP Scholar w/ Honor</strong></p>
							<ul>
								<li>
									Scored 5/5 four times on AP exams
								</li>
							</ul>
						</div>
					</div>
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