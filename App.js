class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById("product_list");
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
          <div class="card-body">
            <strong>Product Name: </strong> ${product.name}
            <strong>Product Price: </strong> ${product.price}
            <strong>Product Year: </strong> ${product.year}
            <a href="#" class="btn btn-danger" name="delete">Delete</a>
          </div>
        </div>
        `;
        productList.appendChild(element);
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
        }
        this.showMessage("Product deleted successfully", 'warning')
    }


    showMessage(message, cssClass) {
        const div     = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(message))
        // Showing message in DOM
        const container = document.querySelector('.container');
        const app       = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM Events
document.getElementById("product_form")
    .addEventListener("submit", (e) => {
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        e.preventDefault();

        console.log(name, price, year);

        const product = new Product(name, price, year);
        const ui      = new UI();

        if(name === '' || price === '' || year === ''){
           return ui.showMessage("Complete fields please", "danger")
        }
        ui.addProduct(product);
        resetForm();
        ui.showMessage('Product added successfully', 'success')
    })

const resetForm = () => {
    document.getElementById("product_form").reset();
};

document.getElementById("product_list").addEventListener("click", (e) => {
    const ui = new UI();
    ui.deleteProduct(e.target);
})