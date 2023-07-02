import { Result } from "react-zxing";
import { Mode } from "./page";
import { useRouter } from "next/navigation";

type Props = {
    mode?: Mode;
};

export const useHooks = (props: Props) => {
    const router = useRouter();

    const onResult = (result: Result) => {
        if (props.mode === '1') {
            console.log('1');
            router.push(`/reader/1/result?code=${result.getText()}`);
        } else if (props.mode === '2') {
            console.log('2');
            router.push(`/reader/2/result?code=${result.getText()}`);
        }
    };

    return {
        onResult,
    };
};