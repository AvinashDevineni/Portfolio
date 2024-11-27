import { useRef } from "react";

interface BoxProps {
    left: number;
    top: number;

    idleColor: string;
    hoverColor: string;

    width: number;
    height: number;
    borderSize: number;

    timeToHoverColor: number;
    timeToIdleColor: number;
    hoverColorDelay: number;
}

export default function Box(props: BoxProps) {
    const divRef = useRef<HTMLElement | null>(null);

    return (
        <>
            <div ref={ref => divRef.current = ref} style={{
                backgroundColor: props.idleColor, width: props.width,
                height: props.height, border: `black solid ${props.borderSize}px`,
                position: 'absolute', left: `${props.left}px`, top: `${props.top}px`
             }} onMouseOver={() => {
                if (divRef.current == null)
                    return;

                divRef.current.style.transition = `background-color ${props.timeToHoverColor}s`;
                divRef.current.style.backgroundColor = props.hoverColor;
             }} onMouseLeave={() => {
                setTimeout(() => {
                    if (divRef.current == null)
                        return;

                    divRef.current.style.transition = `background-color ${props.timeToIdleColor}s`;
                    divRef.current.style.backgroundColor = props.idleColor;
                }, props.hoverColorDelay);
             }}>
            </div>
        </>
    );
};
