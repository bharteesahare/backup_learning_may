findOne -> if id not found return the nil
find -> return the array if record not found

partial is a type helper tell us that attrs can be any object that has at least or none some of the

{
    "email": "bhartee@sa.com",
    "password": "123123"
}

save() 
insert() -> n
update() 


create -> having the body -> so it very complex
update -> having the body -> so it very complex

update user handler ->
1. request  -> UPDATE USER DTO -> just update email
2. request -> just update password
3. request -> just update the both


  
  find(email: string){
    return this.repo.find({ email });
  }
  error TS2353: Object literal may only specify known properties, and 'email' does not exist in type 'FindManyOptions<User>'.

23     return this.repo.find({ email });


solution:
find() expects something like:

{
  where?: FindOptionsWhere<User>
  relations?: string[]
  select?: ...
  order?: ...
}


auth service :
signup()
signin()


create the auth.service.ts
include the constructor user service.
create the functionality
understanding password hashing.

rainbow table attack
// hash the users password
// generate the salt
// hash a salt and password together
// join the hashed result and the salt together
import { randomBytes, scrypt as _scrypt} from "crypto";
import { promisify } from "util";




setting up session:
npm install cookie-session @types/cookie-session

main.ts
import {CookieSession} from "cookie-session";
there is more setting


comment above line.
write below line
const cookieSession = require('cookie-session');
const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      key: ['session'],
    })
  );

changing and fetching session data

# Now step is store the user id in session during sign in user
# getting the current user
# signout the user
# reject requests to certain handlers if the user is not signed in -> guards
# automatically tell a handle who the currently sign in -> interceptor + decorator
# why decorator and interceptor -> make an interceptor to get the current user , then use the value produced by it the decorator
# communicating from interceptor to decoration
const {userId} = request.session || {};
# connecting an interceptor to dependency injection:
  1. interceptor run
  2. then decorator run

  two methodology.
  1st methodology
  1.users.module.ts
  in the interceptor of that class user the injectable and that used into the provider -> currentUserInterceptor
  2. users.controller.ts
    import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';
  3. in nestcommon js add the UseInterceptors
  4. before the class
    @UseInterceptors(CurrentUserInterceptor)
  5. whoami -> add the User -> as an entity and top add the user entity