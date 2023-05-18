# UniSearch

## Overview
* Developed web application which allows users to search for universities that match their requirements, such as location, tuition costs, ranking, and more. The platform also provides insights on university faculty and alumni feedback, enabling users to make informed decisions about their educational future.
* UniSearch enables users to register and login to the application. They can search for universities and view details like rankings, tuition costs, location and more. Users can also view a list of majors offered at each university and search for courses in a specific major. Additionally, they can search for faculties at a particular
university and view feedback from university alumni on courses and faculties.
* Tech stack used to build UniSearch are including JavaScript programming language, Node.js for creating the
backend APIs, ReactJS for the frontend UI, Redux for state management, MongoDB for the database, and Postman for testing the APIs.

## Running the application:

* Clone the repository using "git clone "link to repository"
* Go to backend folder and run npm install & npm start
* Go to frontend folder and run npm install & npm start

## USER STORY – Unisearch

 
Sign Up Page: 
	- As a new user, I should be able to create a profile of UniSearch by entering the following fields 
Email ID 
Password 
Confirm Password 
	- The email and password should be validated.  
	- The user should click on the Sign-Up button to create a new profile 
 
 
Sign In Page:  
	- As an existing user, I should be able to login to my profile by entering the email ID and Password. The Login credentials should be validated and authenticated. 
	- If the credentials are right the user will be redirected to the landing page  
 
 
Menu:  
	- All pages in the website will have a standard menu containing the following options:  
        Home 
        Explore 
        Courses 

 
Home Page: 
	The home page will have a short description of UniSearch
 
 
Explore Page:  
	When the user clicks on the explore page the screen should be redirected to a list of universities with the following options: 
	- A search option to find a particular university 
	- A filter option that can filter the list based on the following options: 
Location 
Course 
Professor 
	- When the user clicks on a university the screen should be redirected to a screen containing a detailed description of the University such as: 
        Courses Offered 
        Ranking Global / National 
        Location 
        Cost 
        Faculty 
        FAQ 
        Comments 
        Sign Out 
		 
 
Comments Section: 
	The comments section is used but the University’s Alumni to add feedback or experiences in that University. The comments can be added, deleted and edited by the user who added the comment. 
 
 
Courses Page: 
	- When the user clicks on the Courses menu item the screen will be redirected to a screen displaying a consolidated list of courses offered. 
	- On clicking a course, the user will be taken to a page listing the universities that have the course 
	- The user will have the option to search for a course from the list 
 
 
Sign Out:  
	The user can sign out of their profile by using the sign out option found on the menu bar. The screen will then be redirected to the login page.
	
	
	

	
	
	
The basic Domain model of the Project:


![final Domain Diagram](https://user-images.githubusercontent.com/113366324/199558515-c03339ea-af94-493d-bd76-2638f2c2f5e0.png)


Design of the Project (using figma):

![Untitled](https://user-images.githubusercontent.com/113320191/203413248-b54e5883-6ae8-40e6-bcfa-a4290eeba341.png)

![UntitledExplore](https://user-images.githubusercontent.com/113320191/203412701-528ec267-b62b-49c5-b833-7baf94434d83.png)

![Untitledcourses](https://user-images.githubusercontent.com/113320191/203413550-1af12cce-d1ab-4b56-9a62-422e006ad1b7.png)

![Untitledabout](https://user-images.githubusercontent.com/113320191/203412748-708a666c-17b0-41a7-a930-dc4f15893f0f.png)

![Untitleduni courses](https://user-images.githubusercontent.com/113320191/203412788-e0f07669-78f6-4e5b-af25-9cf6b52deab1.png)

![Untitledcomments](https://user-images.githubusercontent.com/113320191/203412804-93f73023-0708-467c-92be-a759f0465578.png)


# List of all API endpoints

* local deployment run on: http://localhost:8080

# University

Payload: 

``` json
{
    "name": "String",
    "ranking": "integer",
    "acceptanceRate": "String",
    "avgTuitionCost": "integer",
    "logoUrl": "String",
    "location": [
        {
            "name": "String",
            "address": "String"
        }
    ],
    "faq": [
        {
            "question": "String",
            "answer": "String"
        }
    ],
    "about": "String"
}
```

Endpoints:

```
GET     | /university/all                                   | List all universities
        | /university/all?universityName={universityName}   | List all universities with specified university name (Does a wild card search)
        | /university/all?location={locationName}           | List all universities with specified location name
        | /university/all?ranking={rankingInNumber}         | Orders list from lowest ranking to ranking specified in the query
        | /university/all?sortBy={fieldName}                | Sorts list in asending order for following fields: name, ranking, acceptanceRate, avgTuitionCost
```

```
GET     | /university/{universityId}                        | Find university by id
```

```
POST    | /university/add                                   | Add new university by passing valid university json payload inside body
```

```
PUT     | /university/{universityId}                        | Update university by id and passing valid university json payload inside body which needs to be updated
```

```
DELETE  | /university/{universityId}                        | Delete university by id and also removes all majors and courses associated with this university
```

# Major

Payload:

``` json
{
    "name" : "String",
    "degree" : [
        {
            "name" : "String",
            "description" : "String"
        }
    ],
    "universityId" : "String"
}
```

Endpoints:

```
GET     | /major/all                                        	| List all majors
```

```
GET     | /major?universityId={universityId}                	| List all majors by universityId
```

```
GET     | /major/{majorId}					| Find major by majorId
```

```
GET     | /major/listUniversitiesByMajorName/{majorName} 	| List universities by major name
```

```
POST    | /major/add 						| Add new major by passing valid major json payload inside body
```

```
PUT     | /major/{majorId} 					| Update major by id and passing valid major json payload inside body which needs to be updated
```

```
DELETE  | /major/{majorId} 					| Delete major by id and also removes all courses associated with this major
```

# Course

Payload:

``` json
{
    "name" : "String",
    "code" : "String",
    "description" : "String",
    "majorId" : "String"
}
```

Endpoints:

```
GET     | /course/all                   | List all courses
```

```
GET     | /course?majorId={majorId}     | List all courses by majorId
```

```
GET     | /course/{courseId}            | Find course by courseId
```

```
POST    | /course/add                   | Add new course by passing valid course json payload inside body
```

```
PUT     | /course/{courseId}            | Update course by id and passing valid course json payload inside body which needs to be updated
```

```
DELETE  | /course/{courseId}            | Delete course by id and also removes course from any faculty if they teach this course
```

# Faculty

Payload:

``` json
{
    "name" : "String",
    "courseId" : ["String"]
}
```

Endpoints:

```
GET     | /faculty/all          | List all faculties
```

```
GET     | /faculty/{facultyId}  | Find faculty by id
```

```
POST    | /faculty/add          | Add new faculty by passing valid faculty json payload inside body
```

```
PUT     | /faculty/{facultyId}  | Update faculty by id and passing valid faculty json payload inside body which needs to be updated
```

```
DELETE  | /faculty/{facultyId}  | Delete faculty by id
```

# Comment

Payload:

``` json
{
    "userName": "String",
    "comment": "String",
    "universityId": "String"
}
```

Endpoints:

```
GET     | /comment/all          			| List all comments
```

```
GET     | /comment/all?universityId={universityId}	| List all comments by universityId
```

```
GET     | /comment/{commentId}  			| Find comment by id
```

```
POST    | /comment/add          			| Add new comment by passing valid comment json payload inside body


```

```
PUT     | /comment/{commentId}  			| Update comment by id and passing valid comment json payload inside body which needs to be updated
```

```
DELETE  | /comment/{commentId}  			| Delete comment by id
```





