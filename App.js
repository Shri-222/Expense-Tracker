var totalBalence = document.getElementById('tottalBalence');

var incomBalece = document.getElementById('incomBalece');

var expenceBalence = document.getElementById('expenceBalence');

var transacionHistory = document.getElementById('transactionHistory');

var addTransactionBTN = document.getElementById('addTransaction');

// console.log("ky huaaa");

function getAmount() {
    var inputText = document.getElementById("inputText");
    var inputValue = document.getElementById("inputValue").value;

    var record = document.createElement("div");
    record.setAttribute("id", "recordBar");

    var delBtn = document.createElement("button");
    delBtn.setAttribute("id", "deletBar");

    var delbtntext = document.createTextNode("X");
    delBtn.appendChild(delbtntext);
    
    delBtn.addEventListener("click", function() {this.parentNode.remove();});

    // console.log("ky huaaa");


    if(inputValue == "") 
        {
            alert("Please enter Amount");
            console.log("ky huaaa");
        }

    else { 
        if ( inputValue <= 0) 
    {
        let totalbal = parseInt(totalBalence.innerHTML);
        let expBal = parseInt(expenceBalence.innerHTML);
        let newAmount = totalbal + parseInt(inputValue);

        totalBalence.innerHTML = newAmount;

        expenceBalence.innerHTML = expBal - inputValue;

        var incomExpence = document.createTextNode( inputText.value + " | " + inputValue + " $");

        record.appendChild(delBtn);
        record.appendChild(incomExpence);
        transacionHistory.appendChild(record);

        console.log("ky zale 2");

    }

     else if(inputValue > 0 ) 
        {
            let totalbal = parseInt(totalBalence.innerHTML);
            let incbal = parseInt(incomBalece.innerHTML);

            let newAmount = totalbal + parseInt(inputValue);

            totalBalence.innerHTML = newAmount;

            incomBalece.innerHTML = parseInt(incbal) + parseInt(inputValue);
            
            var incomExpence = document.createTextNode( inputText.value + " | " + inputValue + " $");

            record.appendChild(delBtn);
            record.appendChild(incomExpence);
            transacionHistory.appendChild(record);

            console.log("ky zale");
        }

    }

       
        document.getElementById("inputText").value = '';
        document.getElementById("inputValue").value = '';
    }

    
    



// addTransactionBTN.addEventListener("click", getAmount());
