class Product {
    #price;
    #name;
    #description;

    constructor(builder) {
        console.log("Calling Product constructor");
        this.#name = builder.name;
        this.#price = builder.price;
        this.#description = builder.description;
    }

    displayProduct() {
        console.log(
            "Product displayed:",
            this.#name,
            this.#price,
            this.#description
        );
    }

    static get Builder() {
        class Builder {
            constructor() {
                this.name = ""; // default values
                this.price = 0;
                this.description = "";
            }

            setName(name) {
                if (typeof name !== "string" || name.trim() === "") {
                    throw new Error("Invalid name");
                }
                this.name = name;
                return this;
            }

            setPrice(price) {
                if (typeof price !== "number" || price <= 0) {
                    throw new Error("Price must be a positive number");
                }
                this.price = price;
                return this;
            }

            setDescription(description) {
                if (typeof description !== "string") {
                    throw new Error("Invalid description");
                }
                this.description = description;
                return this;
            }

            build() {
                if (!this.name) {
                    throw new Error("Product name is required");
                }
                if (this.price <= 0) {
                    throw new Error("Product price must be greater than 0");
                }
                return new Product(this);
            }
        }

        return Builder;
    }
}

// Example Usage:

const p = new Product.Builder()
    .setName("Iphone")
    .setPrice(1000)
    .setDescription("Apple Iphone")
    .build();

p.displayProduct();
