import { useState, useEffect, useRef } from "react";

function Apis() {
    const [toggle, setToggle] = useState(false);

    function handleToggle() {
        setToggle(!toggle);
    }

    return (
        <div>
            <button onClick={handleToggle}>Toggle Data Component</button>
            {toggle && <DataComponent />}
        </div>
    );
}

export default Apis;

function DataComponent() {
    const [data, setData] = useState(null);
    const ref = useRef();
    const isUnmountedRef = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://dummyjson.com/posts?limit=100")
                .then((res) => res.json())
                .then((data) => {
                    if (!isUnmountedRef.current) {
                        console.log("data");
                        console.log(ref.current.getElementById("asd"));
                        setTimeout(() => {
                            console.log("Inside Unmounted Component");
                            setData(data);
                        }, 2000);
                    } else {
                        console.log("Component is unmounted");
                    }
                });
        }, 2000);

        return () => {
            isUnmountedRef.current = true;
        };
    }, []);

    return (
        <div>
            <h3>This is Data Component</h3>
        </div>
    );
}

// Abort Controller usage
function DataComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        fetch("https://dummyjson.com/posts?limit=100", {
            signal: controller.signal,
        })
            .then((res) => res.json())
            .then(setData)
            .catch((error) => {
                if (error.name !== "AbortError") console.error(error);
            });

        return () => controller.abort(); // Cancel on unmount
    }, []);

    return <div>{JSON.stringify(data)}</div>;
}
