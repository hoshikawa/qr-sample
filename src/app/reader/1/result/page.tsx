'use client';

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useStyles } from "./styles";

export default function Result1() {
    const [isSuccess, setIsSuccess] = useState(false);
    const styles = useStyles({ isSuccess });
    const searchParams = useSearchParams();

    return (
        <>
            <p>QR code text: {searchParams.get('code')}</p>
            <p style={styles.Message}>API result: {isSuccess ? 'success!' : 'fail...'}</p>
            <p>
                <label htmlFor="input-api-success">simulate API success: </label>
                <input type="checkbox" name="input-api-success" onChange={e => setIsSuccess(e.target.checked)} />
            </p>
        </>
    );
};