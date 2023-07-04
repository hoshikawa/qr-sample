import { BarcodeFormat } from "@zxing/library";
import { DecodeHintType, Result, useZxing } from "react-zxing";

export type Props = {
    onResult: (result: Result) => void;
}

export default function QrReader(props: Props) {
    const hints = new Map();
    hints.set(DecodeHintType.POSSIBLE_FORMATS, [BarcodeFormat.QR_CODE]);
    const { ref } = useZxing({
        constraints: {
            video: {
                facingMode: { exact: 'user' },
            },
        },
        onResult(result) {
            props.onResult(result);
        },
        hints,
    });

    return <video ref={ref} />;
};