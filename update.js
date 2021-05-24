function tempConverter(temp1, initial, final){
    temp0 = parseInt(temp1)
    temp2 = 0
    if(initial === "Celsius"){
        // Celsius a Kelvin
        if(final === "Kelvin"){
            temp2 = (temp0 + 273.15)
            return temp2
        }
        // Celsius a Celsius
        else if(final === "Celsius"){
            return temp0
        }

        // Celsius a Fahrenheit
        else if(final === "Fahrenheit"){
            temp2 = ((temp0 * 1.8) + 32)
            return temp2
        }

        else{
            return temp0
        }
    }

    else if(initial === "Kelvin"){
        // Kelvin a Kelvin
        if(final == "Kelvin"){
            return temp0
        }
        // Kelvin a Celsius
        else if(final === "Celsius"){
            temp2 = (temp0 - 273.15)
            return temp2
        }

        // Kelvin a Fahrenheit
        else if(final === "Fahrenheit"){
            temp2 == (((temp0 - 273.15)*(9/5))+32)
            return temp2
        }

        else{
            return temp0
        }
    }

    else if(initial === "Fahrenheit"){
        // Fahrenheit a Kelvin
        if(final === "Kelvin"){
            temp2 = (((temp0 - 32)*(5/9))+273.15)
            return temp2
        }
        // Fahrenheit a Celsius
        else if(final === "Celsius"){
            temp2 = ((temp0 - 32)/1.8)
            return temp2
        }

        // Fahrenheit a Fahrenheit
        else if(final === "Fahrenheit"){
            return temp0
        }

        else{
            return temp0
        }
    }

    else{
        return temp0
    }
}

function update(direct, sAmount, Unit12, Unit22, model){
    const {direction, sourceAmount, convertedAmount, Unit1, Unit2} = model
    const direction2 = direct
    const sourceAmount2 = sAmount
    const convertedAmount2 = tempConverter(sAmount, Unit12, Unit22)
    const newUnit1 = Unit12
    const newUnit2 = Unit22
    return {
        ...model,
        direction: direction2,
        sourceAmount: sourceAmount2,
        convertedAmount: convertedAmount2,
        Unit1: newUnit1,
        Unit2: newUnit2,
    }
}

module.exports = {
    update
}