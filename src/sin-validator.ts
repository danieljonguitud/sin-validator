// Using string as input type since JS will treat any number starting with 0 as octal
export function sinValidator(sin: string): void {
    // Convert sin to array of numbers to handle each one across the function
    const sinArr: number[] = Array.from(sin, Number);

    // Validate length
    if (sinArr.length !== 9) {
        console.log('Please provide 9️⃣ digits');
        return;
    }

    const total = sinArr.reduce((acc: number, curr: number, idx: number): number => {
        // if index modulo 2 is different from 0 it means that our position is a pair, therefore multiply
        if (idx % 2 !== 0) {
            let mult = curr * 2;

            // if the multiplied number is more than 9, it has 2 digits. But since we multiply by 2, we
            // can just reduce 9, and we will always get the same as summing both digits
            let numTotal = mult > 9 ? mult - 9 : mult;
            return acc + numTotal;
        } else {
            return acc + curr;
        }
    }, 0);


    // Assuming that we want the total to be and integer.
    // If the modulo is not equal to 0 then total is not an int.
    if (total % 10 === 0) {
        console.log(`${sin} is a valid SIN ✅`);
    } else {
        console.log(`${sin} is not a valid SIN ❌`);
    }
}