flowchart TD
    A[Client Request<br/>{ email, password }] --> B[ValidationPipe<br/>CreateUserDto]

    B -->|Valid Data| C[UsersController<br/>Extract email & password]
    B -->|Invalid Data| X[400 Bad Request]

    C --> D[UsersService<br/>Business Logic]

    D --> E[TypeORM UsersRepository]

    E --> F[User Entity]

    F --> G[SQLite Database]

    G --> E
    E --> D
    D --> C
    C --> H[Response Sent to Client]
