import { ErrorInput, IInput, Input } from "./Input";

export const InputStories:React.FC<IInput> = (props: IInput) => {
    return (
        <>
            <Input {...props} />
            <ErrorInput {...props} is_error />
        </>
    );
}
