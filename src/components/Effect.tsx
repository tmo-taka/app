import { useState, useEffect, useLayoutEffect } from "react";
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';

export const Effect = () => {

    const [test, setTest] = useState('テスト');

    useEffect(() => {
        if(test === 'テスト'){
            testSet();
        }
    },[test])
    // useLayoutEffect(() => {
    //     if(test === 'テスト'){
    //         testSet();
    //     }
    // },[test])

    const testSet = () => {
        const random = Math.random();
        const testName = `テスト${random}`
        setTest(testName);
    }

    return (
        <div>
            <Card>
                こんにちは、{test}
            </Card>
            <Button onClick={testSet}>
                名前変更
            </Button>
        </div>
    )
}