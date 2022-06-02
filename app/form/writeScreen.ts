import { IWrite } from "./iwrite";
import { User } from "./user";

export class WriteScreen implements IWrite{
    write(user:User){
        return ("Name - "+ user.name+"\nEmail = "+ user.email);
    }
}