'use client';

import { useState } from "react";
import QrReader from "../components/QrReader"
import { useHooks } from "./hooks";
import { useStyles } from "./styles";

export type Mode = '1' | '2';

export default function Reader() {
    const [mode, setMode] = useState<Mode | undefined>(undefined);
    const { onResult } = useHooks({ mode });
    const styles = useStyles();

    return (
        <>
            {mode && <QrReader onResult={onResult} />}
            {!mode && (
                <div>
                    <button style={styles.Button} onClick={() => setMode('1')}>QR code reader 1</button>
                    <button style={styles.Button} onClick={() => setMode('2')}>QR code reader 2</button>
                </div>
            )}
        </>
    );
};