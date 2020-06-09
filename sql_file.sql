create table course
	(course_id		varchar(8), 
	 title			varchar(50), 
	 decription		varchar(300),
	 college		varchar(20),
	 weeks			int,
	 primary key (course_id),
	 foreign key (college) references college (name)
		on delete set null
	);
	
create table college
	(name		varchar(20), 
	 address		varchar(15), 
	 country		varchar(15),
	 primary key (name)
	);
	
CREATE PROCEDURE getColleges()
BEGIN
  SELECT * FROM college;
END

CREATE PROCEDURE getCourses()
BEGIN
  SELECT * FROM courses;
END

CREATE PROCEDURE getCourseByCollege(college_name)
BEGIN
  SELECT * FROM courses c
  WHERE c.college = college_name;
END




	

	
	
	
