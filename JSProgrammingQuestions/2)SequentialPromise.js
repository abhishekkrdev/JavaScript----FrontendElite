// How would you implement a function to execute an array of asynchronous tasks
// sequentially, collecting both resolved values and errors?

function createAsyncTask() {
    let randomVal = Math.floor(Math.random() * 10);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (randomVal > 5) {
                resolve(randomVal);
            } else {
                reject(randomVal);
            }
        }, randomVal * 1000);
    });
}

const tasks = [
    createAsyncTask,
    createAsyncTask,
    createAsyncTask,
    createAsyncTask,
];

const taskRunnerIterative = async (tasks, cb) => {
    let results = [];
    let errors = [];
    for (let i = 0; i < tasks.length; i++) {
        try {
            const task = await tasks[i]();
            results.push(task);
        } catch (err) {
            errors.push(err);
        }
    }

    cb(results, errors);
};

const taskRunnerRecursive = async (tasks, cb) => {
    let results = [];
    let errors = [];

    function helper(taskIndex = 0) {
        if (taskIndex === tasks.length) {
            return cb(results, errors);
        }
        tasks[taskIndex]
            .then((num) => {
                results.push(num);
            })
            .catch((err) => {
                errors.push(err);
            })
            .finally(() => {
                helper(++taskIndex);
            });

        helper(++taskIndex);
    }

    helper();
};

taskRunnerIterative(tasks, (result, err) => console.log(result, err));
taskRunnerRecursive(tasks, (result, err) => console.log(result, err));
