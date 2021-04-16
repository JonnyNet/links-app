export interface UserAuth {
    email: string;
    password: string;
}

export interface UserRegister extends UserAuth {
    name: string;
}
