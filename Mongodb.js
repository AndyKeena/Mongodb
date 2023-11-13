mongosh

use hSenid_Employees

mongorestore --db hSenid_Employees employees.bson

db.employees.findOne()

db.employees.insertOne({
 	"employee_id" : "002623",
 	"employee_first_name" : "Andrea",
 	"employee_last_name" : "Nahallage",
 	"employee_gender" : "female",
 	"dob" : "2001-02-12T00:00:00Z",
 	"designation" : "intern",
 	"employee_address" : {
 		"building" : "No. 77",
 		"street" : "Galudupita",
 		"city" : "Ragama",
 		"district" : "Gampaha"
 	},
 	"email" : "andrea.n@apigo.co",
 	"mobile_number" : "+94704136693",
 	"coe" : "Engineering",
 	"joined_date" : "2023-11-01T00:00:00Z",
 
 })
 
 db.employees.find()
 
 db.employees.find({},  { employee_id: 1, employee_first_name : 1, employee_last_name : 1, sbu : 1, coe : 1})

db.employees.find({},  { employee_id: 1, employee_first_name : 1, employee_last_name : 1, sbu : 1, coe : 1, _id : 0})

db.employees.find({coe: "Engineering"},  { employee_id: 1, employee_first_name : 1, employee_last_name : 1, sbu : 1, coe : 1, _id : 0})

db.employees.countDocuments({sbu: "CORE"})

db.employees.find({employee_last_name : /yake$/},  { employee_id: 1, employee_first_name : 1,employee_last_name : 1})

Mongodump --db hSenid_Employees
