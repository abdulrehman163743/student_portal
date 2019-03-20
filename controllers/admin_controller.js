var database = require('../db_Connection');
let date = require('date-and-time');
var cors = require('cors');
const uniqueRandom = require('unique-random');

module.exports = function(app){

const rand = uniqueRandom(1, 1000);

var student = {
  student_id : null,
  fname : null,
  lname : null,
  email : null,
  password : null,
  gender : null,
  birth_date : null,
  batch : null,
  phone_num : null,
  address : null,
  dept : null,
  admissison_date : null
};

var department = {
  dept_no : null,
  dept_name : null,
  dept_head : null
};

var faculty = {
  name : null,
  address : null,
  phone_num : null,
  designation : null,
  dept : null
};

var course = {
course_code : null,
course_name : null,
type : null,
credit_hr : null,
};

app.get('/faculty', function(req, res){

  database.connection.getConnection(function(err, connec){

    if(err)
    {console.log(err);}
    else {
    connec.query("select dept_no, dept_name from department",function(err, rows, fields){
      if(err)
      {
        console.log('query error');
      }

        res.render('faculty_register',{data:rows});
      });
    }
   });
});

app.post('/faculty-register',function(req,res){

  for(var key in req.body)
  {
    if(req.body[key]){
      faculty[key] = req.body[key];
    }
  }
  var query = "INSERT INTO faculty (name, address, phone_num, designation, dept) VALUES ('"+faculty.name + "','"+
                                                                                            faculty.address + "','"+
                                                                                            faculty.phone_num + "','"+
                                                                                            faculty.designation + "','"+
                                                                                            faculty.dept +"')";
  database.connection.getConnection(function(err, connec){
    if(err)
    console.log('connection ot successful');
    else {
       connec.query(query,function(err, rows){
         if(err)
            throw err;
         else {
            console.log('query successful');
          }
       });
    }
  });

});

app.get('/student',function(req,res){

  database.connection.getConnection(function(err, connec){

    if(err)
    {console.log(err);}
    else {
    connec.query("select dept_no, dept_name from department",function(err, rows, fields){
      if(err)
      {
        console.log('query error');
      }

        res.render('student_register',{data:rows});
      });
    }
  });
});

app.post('/student_register',function(req, res){

  // var sess = req.session;
  //
  // sess.email = 'aliakber';
  // sess.pass = 'ali';

   console.log('birth_date = ' + req.body.birth_date);


   student.batch = new Date().getFullYear();
   student.admission_date = date.format(new Date(),'YYYY-MM-DD');

   for(var key in req.body) {
     if(req.body[key]){
       student[key] = req.body[key];
     }
   }
  console.log(student);

  console.log(student.admission_date);

  var query = "INSERT INTO STUDENT (fname,lname,email,gender, birth_date, batch, phone_num, address, dept, admission_date) VALUES ('"+student.fname + "','"+
                                                                                                                                     student.lname + "',"+
                                                                                                                                     student.email + ",'"+
                                                                                                                                     student.gender + "',"+
                                                                                                                                     student.birth_date+ ",'"+
                                                                                                                                     student.batch + "','"+
                                                                                                                                     student.phone_num + "','"+
                                                                                                                                     student.address + "','"+
                                                                                                                                     student.dept + "',"+
                                                                                                                                     student.admission_date + ")";


  console.log(query);
  database.connection.getConnection(function(err, connec){
      if(err)
        console.log('error in database connection');
      else {
       connec.query(query,function(err, rows, fields){
          if(err)
          throw err;
          else {
            console.log('query successful');
          }
       });
      }
  });
});

app.get('/department',function(req, res){
  res.render('department');
});

app.post('/department_add',function(req, res){


  for(var key in req.body) {
    if(req.body[key]){
      department[key] = req.body[key];
    }
  }

  database.connection.getConnection(function(err,connec){
    if(err)
    console.log('error in connection');
    else {
      var query = "INSERT INTO department VALUES ('" + department.dept_no + "','" + department.dept_name + "',"+  department.dept_head  + ")";
      console.log(query);

     connec.query(query,function(err, rows, fields){
        if(err)
        console.log(err);
        ese;

     });
    }
  });

});

app.get('/course',function(req, res){
  res.render('createCourse');
});

app.post('/course_add',function(req, res){

      for(var key in req.body) {
        if(req.body[key]){
          course[key] = req.body[key];
        }
      }
      var query = "INSERT INTO course VALUES ('" + course.course_code + "','" + course.course_name + "','"+  course.type  + "',"+  course.credit_hr + ")";

      database.connection.getConnection(function(err, connec){
        if(err)
          throw err;
        else {
          connec.query(query, function(err, rows){
            if(err)
              throw err;
            else;
              console.log('query successful');
          });
        }
      });


    });
}
