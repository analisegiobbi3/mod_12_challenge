USE employeeTracker_db;

INSERT INTO department (name)
VALUES
    ("Engineering"),
    ("Sales"),
    ("DevOps"),
    ("Marketing"),
    ("Finance");


INSERT INTO role (title, salary, department_id)
VALUES
    ("Software Engingeer", 150000, 1),
    ("Sales Rep", 80000, 2),
    ("Release Manager", 120000, 3),
    ("Social Media Manager", 60000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Jane", "Doe", 1, 2),
    ("John", "Smith", 2, 4),
    ("Chris", "Bills", 4, 8),
    ("Mark", "Driver", 6, 8),
    ("Lily", "Williams", 1, 3),
    ("Sherry", "King", 3, 2);