import { UsersStatus } from "../../enums/users/users-status.enum";
import { Base } from "../base";

export interface Users extends Base {
    userName: string;
    email: string;
    password: string;
    status: UsersStatus
}

export interface LoginUsers {
    email: string;
    password: string;
}
