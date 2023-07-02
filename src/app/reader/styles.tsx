import { CSSProperties } from "react";

export const useStyles = () => ({
    Button: {
        width: '300px',
        display: 'block',
    } satisfies CSSProperties,
    Error: {
        color: 'red',
    } satisfies CSSProperties,
});