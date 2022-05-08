// Add your code here


// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     }) 
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     });
  

    
       
       
       //possibly need to add name and Email
    function submitData(name, email){

    const formData = {
        name: name,
        email: email
        };
        
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
        };
    
     return fetch("http://localhost:3000/users", configurationObject)
     .then(function (response) {
       return response.json();
     })
     .then(function (object) {
         let par = document.createElement("p");
         par.textContent = object.id;
         document.body.appendChild(par);
        
     }) 
     .catch(function (error) {
         alert("There was an error");
         //console.log(error.message);
         let par = document.createElement("p");
         par.textContent = error;
         document.body.appendChild(par);
     });
     //return fetch("http://localhost:3000/users", configurationObject);
    }
  