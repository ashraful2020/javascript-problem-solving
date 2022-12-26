// Give an array  of integers,replace all the occurrences of elementToReplace with subtractionElement

// ? Examples
//For inputArray = [1,2,1],elementToReplace = 1 and subtractionElement =3 the output should be arrayReplace(inputArray, elementToReplace, subtractionElement)=[3,2,3]

function name(inputArray, elementToReplace, subTractionElement) {
    inputArray.forEach((element, index) => {
        if (element === elementToReplace) inputArray[index] = subTractionElement;
    });
    console.log(inputArray)

}

name([1, 2, 1], 1, 333);
