let row = document.querySelector(".row");
let search = document.querySelector("#search");
let navRight=document.querySelector(".nav-right")
let products = []
let myURL="http://localhost:4000"

function GetLocalId() {
    let userId = JSON.parse(localStorage.getItem("userId"))
    if (userId) {
        GetDataById(`${myURL}/users`, userId)
            .then(res => {
                let userName = res.data.name
                navRight.innerHTML = `
            <div class="login-logout">
            <span>${userName}</span>
            <button class="btn logout btn-outline-danger">logout</button>
        </div>
            `

                let logout = document.querySelector(".logout")
                logout.addEventListener("click", () => {
                    localStorage.removeItem("userId")
                    GetLocalId()
                })
            })

    } else {
        navRight.innerHTML = `<button class="btn login btn-outline-secondary">Daxil ol</button>`
        let login = document.querySelector(".login")
        login.addEventListener("click", () => {
            window.location.href = "login.html"
        })
    }
}

GetLocalId()

function displayProducts(products) {
    row.innerHTML = '';
    products.forEach(product => {
        row.innerHTML += `
          <div class="col" style="margin-top: 50px;">
                <div class="card mb-3" style="width:300px;height:auto;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;">
                    <div class="card-body">
                        <img src="https://i5.walmartimages.com/seo/Apple-iPhone-X-64GB-Unlocked-GSM-Phone-w-Dual-12MP-Camera-Space-Gray-B-Grade-Used_15c2b968-bb85-41a4-9292-b017f78fe797.a66ebbf32b6d53b6d6eb14c47434ac04.jpeg" alt="" style="width:100%">
                        <h5 class="card-title">${product.brand}</h5>
                        <p class="card-text"><strong>Model:</strong> ${product.model}</p>
                        <p class="card-text"><strong>Price:</strong> ${product.price}$</p>
                        <div class="d-flex justify-content-end" style="gap:10px"> 
                        <a href="details.html?id=${product.id}" class="btn btn-info">Details</a>
                        <button type="button" class="btn btn-danger"> <i class="fa-regular fa-heart" style="font-size:18px;color:white"></i></button>
                        <button type="button" class="btn btn-success"><i class="fa-solid fa-cart-shopping" style="font-size:18px;color:white"></i></button>
                        </div>
                       
                    </div>
                </div>
            </div>
        `;
    });

    
}

async function getAllProducts(url) {
    try {
        let response = await axios.get(url);
        return { products: response.data, error: null };
    } catch (error) {
        console.error(error);
        return { products: [], error: error.message };
    }
}

async function getData() {
    let { products: fetchedProducts, error } = await getAllProducts(`${myURL}/products`);
    if (error) {
        row.innerHTML = `<p>Error: ${error}</p>`;
    } else {
        products = fetchedProducts;
        displayProducts(products)
    }
}

search.addEventListener("keyup", () => {
    console.log(search.value);
    let filteredProducts = products.filter(product => 
        product.brand.toLowerCase().trim().includes(search.value.toLowerCase().trim())
    );
    displayProducts(filteredProducts);
});

getData()

async function GetDataById(url,id){
    let data
    let error

   await axios.get(`${url}/${id}`)
    .then(res=>data=res.data)
    .catch(err=>error=err)

    return{
        data,
        error
    }
}