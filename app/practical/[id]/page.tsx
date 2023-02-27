import { ExerciseProps } from './types';

export default function Exercise (props: ExerciseProps) {
    const { id } = props.params; 
    return (
        <h1>Exercise {id}</h1>
    )
}
