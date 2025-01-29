CREATE TABLE Books (
    ISBN VARCHAR(20) PRIMARY KEY,
    Book_title VARCHAR(255) NOT NULL,
    Category VARCHAR(50) NOT NULL,
    Rental_Price DECIMAL(10, 2) NOT NULL,
    Status VARCHAR(3) NOT NULL CHECK (Status IN ('Yes', 'No')),
    Author VARCHAR(255),
    Publisher VARCHAR(255)
);

CREATE TABLE Customers (
    Customer_Id VARCHAR(10) PRIMARY KEY,
    Customer_name VARCHAR(100) NOT NULL,
    Customer_address VARCHAR(255),
    Reg_date DATE NOT NULL
);

CREATE TABLE Employees (
    Emp_id VARCHAR(10) PRIMARY KEY,
    Emp_name VARCHAR(100) NOT NULL,
    Position VARCHAR(50),
    Salary DECIMAL(10, 2),
    Branch_no VARCHAR(10),
    FOREIGN KEY (Branch_no) REFERENCES Branches(Branch_Id)
);

CREATE TABLE Branches (
    Branch_Id VARCHAR(10) PRIMARY KEY,
    Branch_name VARCHAR(100),
    Branch_location VARCHAR(100)
);

CREATE TABLE IssueStatus (
    Issue_Id VARCHAR(10) PRIMARY KEY,
    Issued_cust VARCHAR(10),
    Issued_book_name VARCHAR(255),
    Issue_date DATE NOT NULL,
    Isbn_book VARCHAR(20),
    FOREIGN KEY (Issued_cust) REFERENCES Customers(Customer_Id),
    FOREIGN KEY (Isbn_book) REFERENCES Books(ISBN)
);

CREATE TABLE ReturnStatuses (
    Return_Id VARCHAR(10) PRIMARY KEY,
    Return_cust VARCHAR(10),
    Return_book_name VARCHAR(255),
    Return_date DATE NOT NULL,
    Isbn_book2 VARCHAR(20),
    FOREIGN KEY (Return_cust) REFERENCES Customers(Customer_Id),
    FOREIGN KEY (Isbn_book2) REFERENCES Books(ISBN)
);
