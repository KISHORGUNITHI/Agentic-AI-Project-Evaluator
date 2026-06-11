import User from "../entites/user.ts";

export default class UserRepository {
    add(user: User): void {
        throw new Error("Method not implemented yet");
    }

    getAllUsers(): string[] {
        throw new Error("Method not implemented yet");
    }

    getUserByEmail(email:string): User {
        throw new Error("Method not implemented yet");
    }
}