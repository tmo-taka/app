import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Form} from './TanstackForm'

describe('tanstackForm',() => {
    test('be in the form', async() => {
        render(<Form />)
        // const form = screen.getByRole('form');
        const user = userEvent;
        const textForm = screen.getByRole("textbox",{name: "email"});
        const value = "test";
        await user.type(textForm, value)
        const errorText = screen.getByText(/13桁以上でお願い/i)
        expect(errorText).toBeInTheDocument();

        await fireEvent.blur(textForm);
        const error2Text = screen.getByText(/正しいメールアドレスを入力してください/i)
        expect(error2Text).toBeInTheDocument();

        const submitButton = screen.getByRole("button");
        expect(submitButton).toBeDisabled();
    })

    // test('be in the form', async() => {
    //     render(<Form />)
    //     const form = screen.getByRole('form');
    //     const user = userEvent;
    //     const textForm = screen.getByRole("textbox",{name: "email"});
    //     const value = "test";
    //     await user.type(textForm, value)
    //     expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    // })
})