import { useEffect, useRef, useState } from "react";

import './Carousel.css';

interface CarouselProps {
    pixelsMove: number;
    childGap: number;
    moveDelayMs: number;
    carouselItems: React.ReactElement[];

    styles?: React.CSSProperties;
    dir?: number;
}

export default function Carousel(props: CarouselProps) {
    const childRefs = useRef<(HTMLElement | null)[]>(new Array(props.carouselItems.length).fill(null));
    const [children, _] = useState<JSX.Element[]>(() => {
        return props.carouselItems.map(
            (el, i) => {
                return <span ref={ref => childRefs.current[i] = ref} key={i}>{el}</span>;
            }
        )
    });
    const left = useRef(-props.pixelsMove);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const intervalIdRef = useRef(-1);

    let dir = -1;
    if (props.dir)
        dir = props.dir;

    function move() {
        left.current += props.pixelsMove * dir;
        let hasRemovedChild = false;

        for (const element of childRefs.current) {
            if (element == null)
                continue;

            element.style.left = `${left.current}px`;
    
            // checking if element is out of carousel
            const elementRect = element.getBoundingClientRect();
            let isOutOfBounds = false;
            if (carouselRef.current) {
                if (dir == -1)
                    isOutOfBounds = elementRect.right < carouselRef.current.getBoundingClientRect().x;
                else isOutOfBounds = elementRect.left > carouselRef.current.getBoundingClientRect().right;
            }

            if (isOutOfBounds) {
                hasRemovedChild = true;
                left.current += (elementRect.width + props.childGap) * -dir;
            }
        }
        
        if (hasRemovedChild) {
            const firstChild = childRefs.current.shift();
            if (firstChild !== undefined && firstChild !== null) {
                carouselRef.current?.removeChild(firstChild);
                carouselRef.current?.appendChild(firstChild);
                childRefs.current.push(firstChild);
                firstChild.style.left = `${left.current}px`;
            }
        }
            
        intervalIdRef.current = setTimeout(move, props.moveDelayMs);
    }

    useEffect(() => {
        move();
        return () => clearTimeout(intervalIdRef.current);
    }, []);

    return (
        <>
            <div ref={ref => carouselRef.current = ref} className='carousel'
             style={{
                gap: props.childGap, flexDirection: dir == -1 ? 'row' : 'row-reverse',
                ...props.styles
             }}>
                {children}
            </div>
        </>
    );
};

/**
const carousel = document.getElementById('carousel');
const carouselRect = carousel.getBoundingClientRect();
const PXS_MOVE = 1;
const CHILD_GAP = 30;
let DELAY = 20;
let left = 0;

const delayBtn = document.querySelector('button');
delayBtn.addEventListener('click', () => {
    DELAY = DELAY === 20 ? 1000 : 20;
});

move();

function move() {
    left -= PXS_MOVE;
    let removedChild = null;
    for (const element of carousel.children) {
        if (element.style.left === '')
            element.style.left = `${-PXS_MOVE}px`;
        else
            element.style.left = `${left}px`;

        // checking if element is out of carousel
        const elementRect = element.getBoundingClientRect();
        if (elementRect.right < carouselRect.x) {
            removedChild = element;
            left += elementRect.width + CHILD_GAP;
        }
    }

    if (removedChild != null) {
        carousel.removeChild(removedChild);
        removedChild.style.left = '';
        carousel.appendChild(removedChild);
    }
        
    setTimeout(move, DELAY);
}
*/