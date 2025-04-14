function myPromiseAll(taskList) {
    //code here
}
// Success case
const successTasks = [
    new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000)),
    new Promise((resolve) => setTimeout(() => resolve("Task 2"), 500)),
    new Promise((resolve) => setTimeout(() => resolve("Task 3"), 200)),
    "Test",
    3,
];
