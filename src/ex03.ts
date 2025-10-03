// Exercise: Write a function `logValues` that takes an array of any type of values (numbers, strings, booleans, etc.).
// The function should iterate through the array and log each value along with its type.

function logValues(values: any[]): void {
  for (const value of values) {
    let displayValue: string

    if (typeof value === "string") {
      displayValue = `"${value}"`
    } else if (typeof value === "object" && value !== null) {
      displayValue = JSON.stringify(value)
    } else {
      displayValue = String(value)
    }

    console.log(`${displayValue} (${typeof value})`)
  }
}

logValues([42, "Hello", true, { name: "Alice" }]);
// Expected output:
// 42 (number)
// "Hello" (string)
// true (boolean)
// { name: "Alice" } (object)