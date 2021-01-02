"# test" 
Required Node, NPM and Mongo Db.
Run command in terminal in root path: npm install
Run command in terminal in root path after finish installtion : npm run server 

API share on postman:https://www.getpostman.com/collections/b6392e07a6a10711b56e
/*****************************************************************************************************/
API URL : localhost:3000/api/users/register 
Method:Post
Body : 
{
    "name":"santosh",
    "email":"santosh@gasd.com",
    "password":"abcdef"
} 
Response:
{
    "_id": "5ff04500b9c0dd0b549232a9",
    "name": "santosh",
    "email": "santosh@gasd.com",
    "avatar": "//www.gravatar.com/avatar/455f8dd177fc07bebc69902bca012c9d?s=200&r=pg&d=mm",
    "password": "$2a$10$os4C.rhoS7kaZv1DseaIU.9XAepOFSwrBETHd/SYhggEhYyTZqV8y",
    "date": "2021-01-02T10:03:44.230Z",
    "__v": 0
}
/*****************************************************************************************************/
API URL : localhost:3000/api/users/login 
Method:Post
Body : 
{
    "email":"santosh@gasd.com",
    "password":"abcdef"
}
Response:
{
    "success": true,
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjA0NTAwYjljMGRkMGI1NDkyMzJhOSIsIm5hbWUiOiJzYW50b3NoIiwiYXZhdGFyIjoiLy93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci80NTVmOGRkMTc3ZmMwN2JlYmM2OTkwMmJjYTAxMmM5ZD9zPTIwMCZyPXBnJmQ9bW0iLCJpYXQiOjE2MDk1ODIwMzMsImV4cCI6MTYwOTU4NTYzM30.ms8I7OdOoQJltzet1l4EJdH6Ot24RT9WXVO728OFBos"
}
/*****************************************************************************************************/
API URL : localhost:3000/api/users/current
Method:GET
Authorization:
Bearer Token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjA0NTAwYjljMGRkMGI1NDkyMzJhOSIsIm5hbWUiOiJzYW50b3NoIiwiYXZhdGFyIjoiLy93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci80NTVmOGRkMTc3ZmMwN2JlYmM2OTkwMmJjYTAxMmM5ZD9zPTIwMCZyPXBnJmQ9bW0iLCJpYXQiOjE2MDk1ODIwMzMsImV4cCI6MTYwOTU4NTYzM30.ms8I7OdOoQJltzet1l4EJdH6Ot24RT9WXVO728OFBos

Response:
{
    "success": true,
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjA0NTAwYjljMGRkMGI1NDkyMzJhOSIsIm5hbWUiOiJzYW50b3NoIiwiYXZhdGFyIjoiLy93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci80NTVmOGRkMTc3ZmMwN2JlYmM2OTkwMmJjYTAxMmM5ZD9zPTIwMCZyPXBnJmQ9bW0iLCJpYXQiOjE2MDk1ODIwMzMsImV4cCI6MTYwOTU4NTYzM30.ms8I7OdOoQJltzet1l4EJdH6Ot24RT9WXVO728OFBos"
}
/*****************************************************************************************************/