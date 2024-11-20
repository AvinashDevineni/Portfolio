import './LabeledText.css';

interface LabeledTextProps {
    gap: number;

    labelStyles?: React.ImgHTMLAttributes<HTMLImageElement>;
    text: string;
    textStyles?: React.HTMLAttributes<HTMLParagraphElement>;
}

export default function LabeledText(props: LabeledTextProps) {
    return (
        <>
            <div className='labeled-text' style={{gap: `${props.gap}px`}}>
                <img {...props.labelStyles}/>
                <p {...props.textStyles}>
                    {props.text}
                </p>
            </div>
        </>
    );
};
