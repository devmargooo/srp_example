export interface IInput {
    value: string;
    setValue: (newValue: string) => void;
    icon?: string;
}

export const Input = ({ value, setValue, icon }: IInput) => (
    <div className="input__root">
        {icon && <div className="input__icon">{icon}</div>}
        <input
            className="input__el"
            type="text"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
            }
        />
    </div>
);

export interface IErrorInput extends IInput {
    is_error?: boolean;
}

export const ErrorInput = (props: IErrorInput) => (
    <div className="error-input__root">
        {props.is_error && <div className="error-input__icon">Х</div>}
        <Input {...props} />
    </div>
);
