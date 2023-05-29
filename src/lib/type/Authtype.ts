export type AuthSignUpdto =  {
    email: string;
    password: string;
    name: string;
    twofactor: string | null;
}

export type AuthLogIndto =  {
    email: string;
    password: string;
}