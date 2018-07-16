import * as React from 'react';
import './Hello.css';

export interface IProps {
    name: string;
    enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: IProps) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You should be more happy')
    }

    return (
        <div className="hello" >
            <div className="greeting">
                Hello {name + getExclaimationMarks(enthusiasmLevel)}
            </div>
        </div>
    )
}

export default Hello

function getExclaimationMarks(numChars: number){
    return Array(numChars + 1).join('!')
}