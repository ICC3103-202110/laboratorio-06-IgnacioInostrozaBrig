const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

//TITULO
function getTitle(){
    return chalk.cyan(
        figlet.textSync(
            'Temperature Converter',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

//Get Table
function getTable(model){
    const {direction, sourceAmount, convertedAmount, Unit1, Unit2} = model
    const ssAmount = sourceAmount
    const cAmount = convertedAmount
    const unid1 = Unit1
    const unid2 = Unit2
    //Is left side source?
    if (direction === 'y' || direction === 'Y'){
        return [{LeftValue: ssAmount,LeftUnit: unid1,RightValue: cAmount,RightUnit: unid2},]
    }
    else{
        return [{LeftValue: cAmount,LeftUnit: unid2,RightValue: ssAmount,RightUnit: unid1},]
    }
}

// INPUT FORM
function inputForm(model){
    const {direction,sourceAmount} = model
    const message = 'Left temperature is source?'
    const message2 = 'Temperature value to convert?'
    return inquirer.prompt([
        {
            name: 'direction',
            type: 'input',
            message: message,
            default: direction,
            validate: function(value){
                if(value === 'y' || value === 'Y'){
                    return true
                }
                else if(value === 'n' || value === 'N'){
                    return true
                }
                else {
                    return 'Enter y or n'
                }
            }
        },
        {
            name: 'sourceAmount',
            type: 'input',
            message: message2,
            default: sourceAmount,
            validate: function(value2){
                if(Number.isNaN(value2)==false){
                    return true
                }
                else {
                    return 'Enter a number'
                }
            }
        }
    ])
}

// LIST FORM
function listForm(model){
    const {Unit1, Unit2} = model
    const message = 'From?'
    const message2 = 'To?'
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    return inquirer.prompt([{
        name: 'Unit1',
        type: 'list',
        message: message,
        default: Unit1,
        choices: choices
    },
    {
        name: 'Unit2',
        type: 'list',
        message: message2,
        default: Unit2,
        choices: choices
    }])
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputForm,
    listForm,
}