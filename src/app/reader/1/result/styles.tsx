import { CSSProperties } from "react";

export type Props = {
    isSuccess: boolean;
};

export const useStyles = (props: Props) => ({
    Message: {
        color: props.isSuccess ? 'green' : 'red',
    } satisfies CSSProperties,
});