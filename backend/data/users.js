import bcrypt from 'bcryptjs'


const users =[
    {
        name: 'Admin User',
        email: 'admin@ahadali.me',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ahad Ali',
        email: 'ali@ahadali.me',
        password: bcrypt.hashSync('123456', 10)
        
    },
    {
        name: 'Jahidul Hasan',
        email: 'jh@ahadali.me',
        password: bcrypt.hashSync('123456', 10)
        
    },
]

export default users