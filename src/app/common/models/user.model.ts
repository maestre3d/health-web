export interface User {
    id: string;
    password: string;
    email: string;
    name: string;
    surname: string;
    image: string;
    role: string;
    domain: string;
    oauth_id: string;
    confirmed: boolean;
    active: boolean;
    created_at: Date;
    updated_at: Date;
}