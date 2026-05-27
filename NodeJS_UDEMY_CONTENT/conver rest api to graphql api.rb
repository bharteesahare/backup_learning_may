what is grapphql:
query language 
layered between frontend and backend

clinet -> grpahql -> server

Basic:
1) schema 2) resorver
way to describe how the api works, recieve send
every schema has the two type:
query
mutation

query -> 
fethcing data from api
reading data from api

Mutation:
creating
updating
deleting

data type of graphql :
sting
int
boolean

schema {
  query: query
  mutation: Mutation
}

type Query{
}

type Mutation{}

type User{
  id: ID!
  firstName: String
  job: Job
}

type Job{
  id: ID!
  company: String
  position: String
}

if type the user
 then it send the data of the job too.

required field then we are send the ! mark 

type Query{
  getAllUsers: [User]
}

# fetch the individual user
type Query {
  getAllUsers: [User]!
  getUser(id: ID!) # need to give the id.
}

type Mutation{
  createUser: User
  updateUser: User
  deleteUser: User
}

Create a user?
firstName 
lastName
email
age
job info


input CreateUserInput{
  firstName: String!
  lastName: String!
  email: String!
  age: Int!
  job: Job!
}

type Mutation{
  createUser(input: CreateUserInput): User
  updateUser(input: UpdateUserInput): User
  deleteUser(input: DeleteUserInput): User
}


How does this works?
grpahql layered frontend and fridate

Resolver: we can write for the backend 