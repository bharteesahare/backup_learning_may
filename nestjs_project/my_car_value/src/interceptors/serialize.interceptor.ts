// export class SerializeInterceptor implements NestInterceptor {
//     constructor(private dto: any) {}

//     intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> {
//         // run something before a request is handled by the request handler
//         // console.log('Before...');

//         return handler.handle().pipe(
//             // run something before the response is sent out
//             map((data: any) => {
//                 // console.log('After...', data);
//                 return plainToClass(this.dto, data, {
//                     excludeExtraneousValues: true,
//                 });
//             }),
//         );
// }