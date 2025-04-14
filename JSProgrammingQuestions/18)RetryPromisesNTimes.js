// How can you implement a retry mechanism for fetching data?

// Mock Fetch Data
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Simulate a request that might fail
        const success = Math.random() > 0.5; // 50% chance of success
        console.log(success, "success");
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Failed to fetch data");
        }
    });
};

function retryPromise(fn, retries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            
        })
    });
}

retryPromise(fetchData, 3, 1000)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
