import { Result, useZxing } from "react-zxing";

export type Props = {
    onResult: (result: Result) => void;
}

export default function QrReader(props: Props) {
    const { ref } = useZxing({
        onResult(result) {
            props.onResult(result);
        },
    });

    return <video ref={ref} />;
};