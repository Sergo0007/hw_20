
//     const rootNode = document.querySelector("#root")
//     const btn = document.createElement("button");
//     btn.innerText = "тык";
//     rootNode.addEventListener("click", event => {
         
//     rootNode.innerText = "js проcто js!";
        
//     })
//     rootNode.append(btn);

 //  2
const myForm = document.createElement("form");
const myInput = document.createElement("input");
myInput.type = "text";
myInput.placeholder = "Введите текст";
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.innerText = "Отправить";
myForm.append(myInput);
myForm.append(submitButton);
root.append(myForm);

 
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Input value:", myInput.value);
     
});

// 3
const randomNumberButton = document.createElement("button");
randomNumberButton.innerText = "генератор чисел";
const randomNumberElement = document.createElement("p");
root.append(randomNumberButton);
root.append(randomNumberElement);

randomNumberButton.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 11) + 5;  
//     randomNumberElement.innerText = `выпало число: ${randomNum}`;
    randomNumberElement.innerText = "выпало число: " + randomNum;
});

 