//set form1
const form1 = document.querySelector("#map");
//set my array
let array1 = [1, 7, 12, 18, 23];
//add EventListener to submit button
form1.addEventListener("submit", function (event) {
  //prevent the submitted value sent to server
  event.preventDefault();

  // handle input
  const userInput1 = document.querySelector("#map .input").value;
  //handle input - get input in form of number instead of string
  const userNumber1 = parseInt(userInput1);
  console.log(userNumber1);

  //verify the user gave a real number
  if (!isNaN(userNumber1)) {
    //add new number in array1
    array1.push(userNumber1);

    //add 10 to every elements in array1
    let result1 = array1.map((value) => value + 10);
    console.log(result1);

    // handle output
    const text = document.createTextNode(
      `Here shows the values of my array elements and your favorite number after they have been added 10: ${result1}`
    );
    const p = document.createElement("p");
    p.appendChild(text);
    form1.appendChild(p);
    form1.classList.add("submitted");
    // Reset the form
    form1.reset();
  }
});

//set form2
const form2 = document.querySelector("#filter");
//set my array
let array2 = [2, 14, 26, 38, 40];
//add EventListener to submit button
form2.addEventListener("submit", function (event) {
  //prevent the submitted value sent to server
  event.preventDefault();

  // handle input
  const userInput2 = document.querySelector("#filter .input").value;
  //handle input - get input in form of number instead of string
  const userNumber2 = parseInt(userInput2);
  console.log(userNumber2);

  //verify the user gave a real number
  if (!isNaN(userNumber2)) {
    //add new number in array2
    array2.push(userNumber2);

    //finds elements in array2 that are greater than 20
    let result2 = array2.filter((value) => value > 20);
    console.log(result2);

    // handle output
    const text = document.createTextNode(
      `Here shows the values from my array elements and your favorite number that are greater than 20: ${result2}`
    );
    const p = document.createElement("p");
    p.appendChild(text);
    form2.appendChild(p);
    form2.classList.add("submitted");
    // Reset the form
    form2.reset();
  }
});

//set form3
const form3 = document.querySelector("#some");
//set my array
let array3 = [20, 30, 40, 50, 60];
//add EventListener to submit button
form3.addEventListener("submit", function (event) {
  //prevent the submitted value sent to server
  event.preventDefault();

  // handle input
  const userInput3 = document.querySelector("#some .input").value;
  //handle input - get input in form of number instead of string
  const userNumber3 = parseInt(userInput3);
  console.log(userNumber3);

  //verify the user gave a real number
  if (!isNaN(userNumber3)) {
    //add new number in array3
    array3.push(userNumber3);

    //check if any elements in array3 that are smaller than 40
    let result3 = array3.some(function (value) {
      return value < 40;
    });
    console.log(result3);

    // handle output
    const text = document.createTextNode(
      `Is it true that some values in my array elements, including your favorite number, are smaller than 40? ${result3}`
    );
    const p = document.createElement("p");
    p.appendChild(text);
    form3.appendChild(p);
    form3.classList.add("submitted");
    // Reset the form
    form3.reset();
  }
});

//set form4
const form4 = document.querySelector("#find");
//set my array
let array4 = [1, 3, 5, 7, 9];
//add EventListener to submit button
form4.addEventListener("submit", function (event) {
  //prevent the submitted value sent to server
  event.preventDefault();

  // handle input
  const userInput4 = document.querySelector("#find .input").value;
  //handle input - get input in form of number instead of string
  const userNumber4 = parseInt(userInput4);
  console.log(userNumber4);

  //verify the user gave a real number
  if (!isNaN(userNumber4)) {
    //add new number in array4
    array4.push(userNumber4);

    //find 1st number in array that has a value over 5
    let result4 = array4.find(function (value) {
      return value > 5;
    });
    console.log(result4);

    // handle output
    const text = document.createTextNode(
      `The first number in my array (including your favorite number) that has a value over 5 is:  ${result4}`
    );
    const p = document.createElement("p");
    p.appendChild(text);
    form4.appendChild(p);
    form4.classList.add("submitted");
    // Reset the form
    form4.reset();
  }
});
