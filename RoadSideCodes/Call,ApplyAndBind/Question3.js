// 3. What will the output of the below code snippet?

var status = "😎";

setTimeout(() => {
    const status = "😍";

    const data = {
        status: "🥑",
        getStatus() {
            return this.status;
        },
    };

    console.log(data.getStatus()); // "🥑",
    console.log(data.getStatus.call(this)); // "😎";
}, 0);
