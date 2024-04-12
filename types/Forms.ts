type RegisterFormState = {
    formData: {
        username: string;
        email: string;
        password: string;
    }
    buttonDisabled: boolean;
    usernameError?: string;
    emailError?: string;
    passwordError?: string;
};

type interactedFields = {
    username: boolean;
    email: boolean;
    password: boolean;
};