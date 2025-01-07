function Product(name) {
    this.name = name;
}

let p = new Product();
console.log(p.__proto__.constructor);
