import { ExerciseProps } from './types';
import Practical1 from './Practical1';
import Practical2 from './Practical2';
import Practical3 from './Practical3';
import Practical4 from './Practical4';

export default function Exercise (props: ExerciseProps) {
    const { id } = props.params;
    
    return (
        <>
            {
                id === '1' && (
                    <Practical1/>
                )
            }
            {
                id === '2' && (
                    <Practical2/>
                )
            }
            {
                id === '3' && (
                    <Practical3/>
                )
            }
            {
                id === '4' && (
                    <Practical4/>
                )
            }
        </>
    )
}
