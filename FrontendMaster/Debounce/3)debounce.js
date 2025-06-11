const debounce = (fn, delay, option = { leading: false, trailing: true }) => {
    let timeout = null;
    let isLeadingInvoked = false;

    return function (...args) {
        const context = this;

        if (timeout) {
            clearTimeout(timeout);
        }

        if (option.leading && !timeout) {
            fn.apply(context, args);
            isLeadingInvoked = true;
        } else {
            isLeadingInvoked = false;
        }

        timeout = setTimeout(() => {
            if (option.trailing && !isLeadingInvoked) {
                fn.apply(context, args);
            }

            timeout = null;
        }, delay);
    };
};

const onChange = (e) => {
    console.log(e.target.value);
};

const debouncedSearch = debounce(onChange, 1000);

const input = document.getElementById("search");
input.addEventListener("keyup", debouncedSearch);
