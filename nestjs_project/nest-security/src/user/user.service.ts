import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

// This should be a real class/interface representing a user entity
// export type User = any;
@Injectable()
export class UserService {
    public users : User[] = [
        {
            username: 'user1',
            password: 'admin',
            email: 'user1@gmail.com',
            age: 22,
        },
        {
            username: 'user2',
            password: 'admin',
            email: 'user2@gmail.com',
            age: 21,
        },
        {
            username: 'user3',
            password: 'admin',
            email: 'user3@gmail.com',
            age: 20,
        },
        
    ];

    getUserByUserName(userName: string): User | undefined {
        return this.users.find((user: User) => user.username === userName);
    }
    // async getUserByUserName(username: string): Promise<User | undefined> {
    //     return this.users.find(user => user.username === username);
    // }
}