-- Retrieve all books
SELECT * FROM Books;

-- Find customers who borrowed books
SELECT Customers.Customer_name, IssueStatus.Issued_book_name, IssueStatus.Issue_date
FROM Customers
JOIN IssueStatus ON Customers.Customer_Id = IssueStatus.Issued_cust;

-- Retrieve employees working in a specific branch
SELECT Employees.Emp_name, Employees.Position, Branches.Branch_name
FROM Employees
JOIN Branches ON Employees.Branch_no = Branches.Branch_Id
WHERE Branches.Branch_location = 'Dhaka';
