import './LabeledText.css';

interface LabeledTextProps {
    gap: number;

    labelAttributes?: React.ImgHTMLAttributes<HTMLImageElement>;
    text: string;
    textAttributes?: React.HTMLAttributes<HTMLParagraphElement>;
}

export default function LabeledText(props: LabeledTextProps) {
    return (
        <>
            <div className='labeled-text' style={{gap: `${props.gap}px`}}>
                <img {...props.labelAttributes}/>
                <p {...props.textAttributes}>
                    {props.text}
                </p>
            </div>
        </>
    );
};
