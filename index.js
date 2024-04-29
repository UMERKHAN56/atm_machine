import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 7102;
console.log("Welcome to Umer Khan - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        type: "number",
        message: "Enter your pin code",
    }
]);
if (pinAnswer.Pin === myPin) {
    console.log("Pin is correct, Login Successfully");
    // console.log("Current Account Balance is ${myBalance}");
    let operationAnswer = await inquirer.prompt([
        {
            name: "Operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAnswer.Operation === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdrawal method",
                choices: ["Fast cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast cash") {
            let FastcashAns = await inquirer.prompt([
                {
                    name: "FastCash",
                    type: "list",
                    message: "Select Amount",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ]);
            if (FastcashAns.FastCash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= FastcashAns.FastCash;
                console.log(`${FastcashAns.fastcash} withdraw successfully`);
                console.log(`Your remaining balance is ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw",
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficiant Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Successfully`);
                console.log(`Your remaining balance is ${myBalance}`);
            }
        }
    }
    else if (operationAnswer.Operation === "Check Balance") {
        console.log(`Your Account Balance is ${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect, Try Again!");
}
