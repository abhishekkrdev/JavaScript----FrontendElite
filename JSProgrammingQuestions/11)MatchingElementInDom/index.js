const findMatchingElement = (container1, container2, targetElement) => {
    // If the targetElement is directly found in container1, return the
    // corresponding element in container2
    if (container1 === targetElement) return container2;
    const children1 = Array.from(container1.children);
    const children2 = Array.from(container2.children);
    for (let i = 0; i < children1.length; i++) {
        if (children1[i] && children2[i]) {
            const result = findMatchingElement(
                children1[i],
                children2[i],
                targetElement
            );
            if (result) return result;
        }
    }
    // If no match is found, return null
    return null;
};
// When Target element exists in container1
const positiveResult = findMatchingElement(
    document.getElementById("container1"),
    document.getElementById("container2"),
    document.getElementById("span-id")
);
console.log("Positive Result:", positiveResult);
//Test2
// When Target element does not exist in container2
const negativeResult = findMatchingElement(
    document.getElementById("container1"),
    document.getElementById("container2"),
    document.getElementById("span-id-2")
);
console.log("Negative Result:", negativeResult);
