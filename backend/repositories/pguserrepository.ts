import Connection_pool from "../db/connection_pool.ts";
import User from "../entites/user.ts";
import UserRepository from "./userrepositories.ts";

const db = Connection_pool();

class PgUserRepository extends UserRepository {

    addUser(user: User): void {
        const query = `
        INSERT INTO users(name,email,password,role)
        VALUES('${user.name}','${user.email}','${user.password}','${user.role}')
        `;
        db.query(query);
    }

    getAllUsers(): string[] {
        const query = `SELECT name FROM users`;
        const result :any= db.query(query);

        const users: string[] = [];

        for (let i = 0; i < result.length; i++) {
            users.push(result[i].name);
        }

        return users;
    }

    getUserByEmail(email: string): User {
        const query = `SELECT * FROM users WHERE email='${email}'`;
        const result:any = db.query(query);

        const row = result[0];

        return {
            name: row.name,
            email: row.email,
            password: row.password,
            role: row.role
        };
    }
}

export default PgUserRepository;