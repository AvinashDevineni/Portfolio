import React, { ReactNode, useRef } from 'react';

import './Project.css';

interface ProjectProps {
    name: string;
    descriptionBullets: ReactNode[];

    imgSrc: string;
    imgWidth: string;
    imgHeight: string;
    imgScale?: number;

    skills?: ProjectSkillsProps;
}

interface ProjectSkillsProps {
    skillImgs: string[];
    skillImgsSize: number;
    skillImgsSpacing: number;
    skillImgProperties?: React.ImgHTMLAttributes<HTMLImageElement>[];
}

export default function Project(props: ProjectProps) {
    const projectDescriptionRef = useRef<HTMLElement | null>(null);

    function onProjectHoverStart() {
        if (projectDescriptionRef.current)
            projectDescriptionRef.current.dataset.hover = 'true';
    }

    function onProjectHoverEnd() {
        if (projectDescriptionRef.current)
            projectDescriptionRef.current.dataset.hover = 'false';
    }

    return (
        <>
            <div className='project' style={{
                width: props.imgWidth, height: props.imgHeight
             }} onMouseEnter={onProjectHoverStart} onMouseLeave={onProjectHoverEnd}>
                <div className='project-img' style={{
                    width: props.imgWidth, height: props.imgHeight,
                    backgroundImage: `url(${props.imgSrc})`,
                    transform: `scale(${props.imgScale ? props.imgScale : 1})`
                 }}/>

                <div className='project-description' ref={(ref) => {
                    projectDescriptionRef.current = ref;
                    if (ref)
                        ref.dataset.hover = 'false';
                 }}>
                    <h2>{props.name}</h2>
                    <ul>{props.descriptionBullets.map((desc, i) => <li key={i}>{desc}</li>)}</ul>

                    <div className='project-skills' style={{gap: `${props.skills?.skillImgsSpacing}px`}}>
                        {
                            props.skills &&
                            props.skills.skillImgs.map((src, i) => {
                                if (props.skills?.skillImgProperties)
                                    return <img key={i} src={src}
                                            {...props.skills?.skillImgProperties[i]}
                                            width={props.skills.skillImgsSize}
                                            height={props.skills.skillImgsSize}/>;
                                
                                return <img key={i} src={src} width={props.skills?.skillImgsSize}
                                        height={props.skills?.skillImgsSize}/>;
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
