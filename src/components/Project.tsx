import React, { ReactNode, useRef } from 'react';

import './Project.css';

interface ProjectProps {
    name: string;
    descriptionBullets: ReactNode[];
    link?: string;

    imgSrc: string;
    imgWidth: string;
    imgHeight: string;
    imgScale?: number;

    skills?: ProjectSkillsProps;
}

interface ProjectSkillsProps {
    skillImgs: string[];
    skillImgsSize: number | Size[];
    skillImgProperties?: React.ImgHTMLAttributes<HTMLImageElement>[];
}

interface Size {
    width: number;
    height: number;
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
                    {
                        props.link ?
                        <a className='project-name' href={props.link} target='_blank'>
                            <h2>{props.name}</h2>
                        </a> :
                        <h2>{props.name}</h2>
                    }
                    
                    <ul>{props.descriptionBullets.map((desc, i) => <li key={i}>{desc}</li>)}</ul>
                    {
                        props.skills &&
                        <div className='project-skills'>
                            {props.skills.skillImgs.map((src, i) => {
                                if (props.skills?.skillImgProperties) {
                                    if (typeof props.skills.skillImgsSize === 'object')
                                        return (
                                            <img key={i} src={src}
                                             {...props.skills?.skillImgProperties[i]}
                                             width={props.skills.skillImgsSize[i].width}
                                             height={props.skills.skillImgsSize[i].height}/>
                                        );
                                    
                                    else return (
                                        <img key={i} src={src}
                                         {...props.skills?.skillImgProperties[i]}
                                         width={props.skills.skillImgsSize}
                                         height={props.skills.skillImgsSize}/>
                                    );
                                }

                                // this should never happen due to
                                // conditional rendering, but TS giving error
                                if (!props.skills)
                                    return;
                                
                                if (typeof props.skills.skillImgsSize === 'object')
                                    return (
                                        <img key={i} src={src}
                                         width={props.skills.skillImgsSize[i].width}
                                         height={props.skills.skillImgsSize[i].height}/>
                                    );
                                
                                else return (
                                    <img key={i} src={src}
                                     width={props.skills.skillImgsSize}
                                     height={props.skills.skillImgsSize}/>
                                );
                            })}
                        </div>
                    }
                </div>
            </div>
        </>
    );
};
