//your JS code here. If required.
function createRandomPromise(index) {
    return new Promise((resolve) => {
        const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
        setTimeout(() => {
            resolve({ index: index, time: time });
        }, time * 1000);
    });
}

// Create an array of promises
const promises = [createRandomPromise(1), createRandomPromise(2), createRandomPromise(3)];

// Log the array of results after all promises resolve
const table = document.getElementById("promiseTable");

Promise.all(promises).then((results) => {
    // Remove the loading row
    table.innerHTML = "";

    // Calculate total time taken to resolve all promises
    const totalTime = results.reduce((sum, result) => sum + result.time, 0);

    // Populate the table with the results
    results.forEach((result) => {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = `Promise ${result.index}`;
        cell2.innerHTML = result.time.toFixed(3);
    });

    // Add the total time row
    const totalRow = table.insertRow();
    const totalCell1 = totalRow.insertCell(0);
    const totalCell2 = totalRow.insertCell(1);
    totalCell1.innerHTML = "Total";
    totalCell2.innerHTML = totalTime.toFixed(3);
});