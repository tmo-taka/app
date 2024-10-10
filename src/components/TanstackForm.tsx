import { useForm } from '@tanstack/react-form'

export const Form = ():Jsx.Element => {
    const form = useForm({
        defaultValues: {
            email: '',
        },
        validators: {
            onSubmitAsync: async ({ value }) => {
                // Verify the age on the server
                const pattern = /^.jp$/g;
                const isLengthOver13= value.email.match(pattern)
                if (!isLengthOver13) {
                    return {
                        fields: {
                            email: '不正やん',
                        },
                    }
                }
                return null
            },
        },
        onSubmit: async ({ value }) => {
            // Do something with form data
            console.log(value)
        },
    })
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}
        >
            <div>
            <form.Field
                name="email"
                validators={{
                    onBlur: ({value}) => !value.includes('@') && value ? "正しいメールアドレスを入力してください。" : undefined,
                    onChange: ({value}) => value.length < 13 ? '13桁以上でお願い' : undefined,
                }}
                children={(field) => (
                    <>
                        <label>{field.name}</label>
                        <input
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                        {field.state.meta.errors ? (
                            <em role="alert">{field.state.meta.errors.join(', ')}</em>
                        ) : null}
                    </>
                )}
                />
            </div>
        </form>
    )
}
