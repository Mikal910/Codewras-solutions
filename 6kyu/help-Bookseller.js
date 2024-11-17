function stockList(books, categories) {
    if (books.length === 0 || categories.length === 0) {
        return '';
    }
    // Create an object to hold the total count for each category
    let categoryCounts = {};
    // Initialize category counts to 0
    categories.forEach(cat => {
        categoryCounts[cat] = 0;
    });
    // Loop through the list of books
    books.forEach(book => {
        let [code, quantity] = book.split(' ');
        quantity = parseInt(quantity);
        // Check if the first character of the code matches any category
        let category = code[0];
        if (categories.includes(category)) {
            categoryCounts[category] += quantity;
        }
    });
    // Format the result as a string
    let result = categories.map(cat => `(${cat} : ${categoryCounts[cat]})`).join(' - ');
    return result;
}
// Example usage:
console.log(stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]));
// Output: "(A : 20) - (B : 114) - (C : 50) - (W : 0)"