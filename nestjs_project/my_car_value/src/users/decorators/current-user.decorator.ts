import {
    createParamDecorator, ExecutionContext
} from '@nestjs/common';

// webb socket and http request both are supported by this decorator
// whatever the request is coming in, we can extract the user from it and return it
export const CurrentUser = createParamDecorator(
    (data: any, context: ExecutionContext) => {
        // return "hi there"; // this is just for testing, we will replace it with the actual user in the future
        // session object find
        const request = context.switchToHttp().getRequest();
        console.log(request.session.userId);
        return request.currentUser;
    }
)