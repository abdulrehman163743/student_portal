create database student_portal;

CREATE TABLE Student(
  student_id NUMBER AUTO_INCREMENT
  fname varchar(25),
  lname varchar(25),
  email varchar(25),
  password varchar(25),
  gender varchar(1),
  birth_date DATE,
  batch DATE,
  phone_num varchar(11),
  Address varchar(50),
  admisison_date DATE,
  constraint student_id_pk PRIMARY KEY student_id
);

CREATE TABLE faculty(
  faculty_id NUMBER,
  name varchar(20),
  address varchar(50),
  phone_num varchar(11),
  constraint faculty_id_pk PRIMARY KEY faculty_id

);

CREATE TABLE department(
  dept_no NUMBER,
  dept_name varchar(20),
  dept_head varchar(20),
  constraint dept_no PRIMARY KEY dept_no,
  constraint dept_head_fk FOREIGN kEY references faculty(faculty_id)
);

CREATE TABLE course(
  course_code varchar(10),
  course_name varchar(25),
  type varchar(25),
  credit_hr integer,
  constraint course_code_pk PRIMARY KEY course_code
);

ALTER TABLE Student AUTO_INCREMENT=1000;
