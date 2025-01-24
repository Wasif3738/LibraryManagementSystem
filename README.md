# Library Management System

This project is a Library Management System that allows for efficient management of a library's operations. It provides functionalities to track books, customers, employees, book issuance, and returns.

## Database Setup

Created a new database named "Library" to store the information.

## Features

### Book Management
- Add, update, and remove books from the library's collection.
- Track book details such as title, category, rental price, availability status, author, and publisher.

### Customer Management
- Maintain a record of library customers, including their names, addresses, registration dates, and issuance history.

### Employee Management
- Manage library staff, including employee names, positions, salaries, and branch assignments.

### Book Issuance and Returns
- Track the issuance and return of books by customers.
- Monitor the status of issued books and ensure timely returns.

### Branch Management
- Maintain information about library branches, including branch numbers, manager assignments, addresses, and contact details.

## Queries and Analysis

The project includes various SQL queries and data analysis tasks to extract valuable insights from the library's data. Some of the key queries implemented include:

1. Retrieve the book title, category, and rental price of all available books.
2. List the employee names and their respective salaries in descending order of salary.
3. Retrieve the book titles and the corresponding customers who have issued those books.
4. Display the total count of books in each category.
5. Retrieve the employee names and their positions for the employees whose salaries are above Rs.50,000.
6. List the customer names who registered before 2022-01-01 and have not issued any books yet.
7. Display the branch numbers and the total count of employees in each branch.
8. Display the names of customers who have issued books in the month of June 2023.
9. Retrieve book titles from the book table containing the category "history".
10. Retrieve the branch numbers along with the count of employees for branches having more than 5 employees.


### JSON Content Examples for Library Management System APIs

1. **Return**
   - **Endpoint:**
     POST http://localhost:5000/api/returns
   - **JSON Content:**
     ```json
     {
       "Return_cust": "C001",
       "Return_book_name": "The Great Gatsby",
       "Return_date": "2025-01-23",
       "Isbn_book2": "978-0-7432-7356-4"
     }
     ```
   - **Get All Returns:**
     GET http://localhost:5000/api/returns
   - **Get Returns for a Specific Customer:**
     GET http://localhost:5000/api/returns/customer/:id

2. **Issue**
   - **Endpoint:**
     POST http://localhost:5000/api/issues
   - **JSON Content:**
     ```json
     {
       "Issued_cust": "C001",
       "Issued_book_name": "The Great Gatsby",
       "Issue_date": "2025-01-25",
       "Isbn_book": "978-0-7432-7356-4"
     }
     ```
   - **Get All Issues:**
     GET http://localhost:5000/api/issues

3. **Books**
   - **Endpoint to Add a Book:**
     POST http://localhost:5000/api/books
   - **JSON Content:**
     ```json
     {
       "ISBN": "978-0-12345-678-9",
       "Book_title": "The Art of Coding",
       "Category": "Programming",
       "Rental_Price": 500,
       "Status": "Yes",
       "Author": "John Doe",
       "Publisher": "TechBooks"
     }
     ```
   - **Get All Books:**
     GET http://localhost:5000/api/books

4. **Customers**
   - **Endpoint to Add a Customer:**
     POST http://localhost:5000/api/customers
   - **JSON Content:**
     ```json
     {
       "Customer_Id": "C002",
       "Customer_name": "Ahsan Mahadi",
       "Customer_address": "123 Main St",
       "Reg_date": "2025-01-01"
     }
     ```
   - **Get All Customers:**
     GET http://localhost:5000/api/customers
   - **Get Customer by ID:**
     GET http://localhost:5000/api/customers/:id

5. **Fetch Customer IDs (Cust Numbers)**
   - **Endpoint:**
     GET http://localhost:5000/api/customers
   - **Description:**
     This will list all customers along with their `Customer_Id`. Look for the `Customer_Id` field in the response JSON.
