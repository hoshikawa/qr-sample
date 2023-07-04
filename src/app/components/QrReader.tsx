import { Result, useZxing } from "react-zxing";

export type Props = {
    onResult: (result: Result) => void;
}

export default function QrReader(props: Props) {
    const { ref } = useZxing({
        constraints: {
            video: {
                facingMode: { exact: 'user' },
            },
        },
        onResult(result) {
            props.onResult(result);
        },
    });

    return <video ref={ref} />;
};