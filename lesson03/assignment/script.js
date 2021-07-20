//set JSON data as variable
const employeesJSON ='[{"name":"Paolo Maldini","jobTitle":"Front End Developer","company":"Web Weavers","experience":"3 years","school":"University of Washington","major":"Marketing","email":"paolo@example.com","linkedInUrl":"paolo.linkedinprofile.com","codeLanguages":["HTML","CSS","JavaScript","Node","Express"]},{"name":"Barbara Bonansea","jobTitle":"Software Engineer","company":"Excellence in the Cloud","experience":"12 years","school":"University of Southern California","major":"Computer Science","email":"barbara@example.com","linkedInUrl":"barbara.linkedinprofile.com","codeLanguages":["HTML","JavaScript","C","Go"]},{"name":"Javier Hernandez","jobTitle":"User Experience Engineer","company":"Web Sites and More","experience":"5 years","school":"Seattle University","major":"Performing Arts","email":"javier@example.com","linkedInUrl":"javier.linkedinprofile.com","codeLanguages":["HTML","CSS"]},{"name":"Maribel Dominguez","jobTitle":"Front End Engineer","company":"Bits and Bytes","experience":"6 years","school":"University of Washington","major":"Mechanical Engineering","email":"maribel@example.com","linkedInUrl":"maribel.linkedinprofile.com","codeLanguages":["HTML","CSS","JavaScript","React","Vue","Redux"]}]'

//parse JSON data to use in JS
const employees = JSON.parse (employeesJSON)

//set method to loop over the JSON data and create HTML elements
employees.forEach(function (el){
    //set the outline of the card 
    let div1=document.createElement('div')
    div1.setAttribute=('class', 'card')
    div1.innerHTML=""
    let div2=document.createElement('div')
    div1.setAttribute=('class', 'who')
    div2.innerHTML=""
    let div3=document.createElement('div')
    div1.setAttribute=('class', 'info')
    div3.innerHTML=""

    //set elements in one div
    let img = document.createElement('span')
    img.innerHTML =`<img src="img/headshot.jpg">`
        
    let h1 = document.createElement('h1')
    h1.innerHTML = `<h1>${el.name}</h1>`
    let h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${el.jobTitle}</h2>`
  
    //set elements in another div
    let list = document.createElement('ul')
    list.innerHTML = `
    <li><strong>Company:</strong> ${el.company}</li>
    <li><strong>Experience:</strong> ${el.experience}</li>
    <li><strong>School:</strong> ${el.school}</li>
    <li><strong>Major:</strong> ${el.major}</li>
    <li><strong>Email:</strong> ${el.email}</li>
    <li><img src="img/linkedin.svg"> ${el.linkedInUrl}</li>
    <li><strong>Code Languages:</strong> ${el.codeLanguages}</li>
    `
 
    //structure / insert element in the HTML page 
    const container = document.querySelector('.template-hook')
    container.append(div1)
    div1.append(div3)
    div1.insertBefore(div2, div3)
    div2.append(h2)
    div2.insertBefore(h1, h2)
    div2.insertBefore(img, h1)
    div3.append(list)
    

})



