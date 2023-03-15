import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Abhishek Kumar',
    email: 'abhishek@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Deepak Kumar',
    email: 'Deeapkkumar1@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
