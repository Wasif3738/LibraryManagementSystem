-- Insert data into Books table
INSERT INTO Books (ISBN, Book_title, Category, Rental_Price, Status, Author, Publisher)
VALUES 
('978-0-12345-678-9', 'The Art of Coding', 'Programming', 500, 'Yes', 'John Doe', 'TechBooks'),
('978-0-7432-7356-4', 'The Great Gatsby', 'Fiction', 300, 'Yes', 'F. Scott Fitzgerald', 'Scribner');

-- Insert data into Customers table
INSERT INTO Customers (Customer_Id, Customer_name, Customer_address, Reg_date)
VALUES 
('C001', 'Alice Smith', '123 Library Street', '2025-01-01'),
('C002', 'Bob Johnson', '456 Knowledge Lane', '2025-01-05');

-- Insert data into Employees table
INSERT INTO Employees (Emp_id, Emp_name, Position, Salary, Branch_no)
VALUES 
('E001', 'Mohammad Rahim', 'Librarian', 25000, 'B001'),
('E002', 'Nasima Akter', 'Assistant Librarian', 22000, 'B002');

-- Insert data into Branches table
INSERT INTO Branches (Branch_Id, Branch_name, Branch_location)
VALUES 
('B001', 'Central Library', 'Dhaka'),
('B002', 'Community Library', 'Chittagong');

-- Insert data into IssueStatus table
INSERT INTO IssueStatus (Issue_Id, Issued_cust, Issued_book_name, Issue_date, Isbn_book)
VALUES 
('IS101', 'C001', 'The Great Gatsby', '2025-01-25', '978-0-7432-7356-4');

-- Insert data into ReturnStatuses table
INSERT INTO ReturnStatuses (Return_Id, Return_cust, Return_book_name, Return_date, Isbn_book2)
VALUES 
('RS101', 'C001', 'The Great Gatsby', '2025-02-01', '978-0-7432-7356-4');
