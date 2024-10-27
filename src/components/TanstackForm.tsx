import { useForm , type Field} from '@tanstack/react-form'
import Button from '@mui/material/Button'

export const Form = ():Jsx.Element => {
    const form = useForm({
        defaultValues: {
            email: '',
            tel: ''
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
                const telPattern = /^080-*$/g;
                const isCurrentTel= value.email.match(telPattern)
                if (!isCurrentTel) {
                    return {
                        fields: {
                            tel: '電話番号がおかしいです',
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
            name="tanstack"
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
                            aria-label={field.name}
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
            <div>
            <form.Field
                name="tel"
                validators={{
                    onBlur: ({value}) => !value.includes('080') && value ? "正しい電話番号を入力してください。" : undefined,
                }}
                children={(field) => (
                    <>
                        <label>{field.name}</label>
                        <input
                            name={field.name}
                            aria-label={field.name}
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
            {/* //NOTE: subscibeで監視状態にする */}
            <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                    <Button type="submit" variant="outlined" color="secondary" disabled={!canSubmit}>
                        送信
                    </Button>
                )}
            />
        </form>
    )
}
