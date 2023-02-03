const inquirer = require('inquirer')
const mysql = require('mysql2');


// Connect to database taken from sql lessions
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      password: 'MyNewPass',
      database: 'employeeTracker_db'
    },
    console.log(`Connected to the employeeTracker_db database.`)
  );


db.connect ((err) => {
    if (err){
        console.log(err)
    }else{
        console.log(`   
        ╔═══╗-----╔╗--------------╔═╗╔═╗----------------
        ║╔══╝-----║║--------------║║╚╝║║----------------
        ║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
        ║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
        ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
        ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
        -------║║------╔═╝║---------------------╔═╝║
        -------╚╝------╚══╝---------------------╚══╝`
        )
        viewOptions();
    }
})


const viewOptions = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'tableOptions',
            message: 'Query options: ',
            choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'quit'],
        },
    ]).then(function({ tableOptions }){
        switch(tableOptions){
            case 'view all departments':
                //add function
                break
            case 'view all roles':
                //addfunction
                break
            case 'view all employees':
                //add function
                break
            case "add a department":
                addDepartment()
                break
            case "add a role":
                addRole()
                break
            case "add an employee":
                addEmployee()
                break
            case "update an employee role":
                updateEmployee()
                break
            case "quit":
                db.end()
                break
        }
    })
};


const addDepartment = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'departmentName',
            message: 'Enter department name: ',
        },
    ])
    .then(newDepartment =>{
        const { departmentName } = newDepartment
        const createDepartment = new Department(departmentName)
    })
};

const addRole = () =>{
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter role: ',
        },

        {
            type: 'input',
            name: 'salary',
            message: 'Enter employee salary: ',
        },

        {
            type: 'input',
            name: 'department',
            message: 'Enter employee department: ',
        },
    ])
    .then(newRole =>{
        const { name, salary, department } = newRole
        const createRole = new Role(name, salary, department)
    })
};

const addEmployee = () =>{
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter employee first name: ',
        },

        {
            type: 'input',
            name: 'lastName',
            message: 'Enter employee last name: ',
        },

        {
            type: 'input',
            name: 'role',
            message: 'Enter employee role: ',
        },

        {
            type: 'input',
            name: 'manager',
            message: 'Enter employee manager: ',
        },
    ])
    .then(newEmployee =>{
        const { firstName, lastName, role, manager } = newEmployee
        const createEmployee = new Employee(firstName, lastName, role, manager)
    })
    
}

const updateEmployee = () =>{
    
}

init();

