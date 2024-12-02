let myURL="http://localhost:3000"
let table=document.querySelector(".table-users")
let table2=document.querySelector(".table-companies")
let UsersClick=document.querySelector(".users")
let companies=[]
let users=[]


function displayUsers(users) {
    table.innerHTML = '';
    table.innerHTML =`  
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">FullName</th>
        <th scope="col">Email address</th>
        <th scope="col">Password</th>
        <th scope="col">#Edit</th>
    </tr>
</thead>       
`
    users.forEach(user => {
        table.innerHTML += `
                   
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>${user.fullName}</td>
                            <td>${user.email}</td>
                            <td>${user.password}</td>
                            <td>
                                <button class="btn btn-info" style="color: white;">Edit</button>
                                <button class="btn btn-danger" style="color: white;">Delete</button>
                            </td>
                    </tbody>
                </table>
        `;
    });

    
}

async function getAllUsers(url) {
    try {
        let response = await axios.get(url);
        return { users: response.data, error: null };
    } catch (error) {
        console.error(error);
        return { users: [], error: error.message };
    }
}

async function getData() {
    let { users: fetchedUsers, error } = await getAllUsers(`${myURL}/users`);
    if (error) {
        table.innerHTML = `<p>Error: ${error}</p>`;
    } else {
        users = fetchedUsers;
        displayUsers(users)
    }
}
getData()

UsersClick.addEventListener("click",()=>{
table.style.opacity="1"
})






function displayCompanies(companies) {
    table2.innerHTML = '';
    table2.innerHTML =`  
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Location</th>
        <th scope="col">Industry</th>
        <th scope="col">Website</th>
        <th scope="col">#Edit</th>
    </tr>
</thead>       
`
    companies.forEach(company => {
        table2.innerHTML += `
                   
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>${company.name}</td>
                            <td>${company.location}</td>
                            <td>${company.industry}</td>
                            <td>${company.website}</td>
                            <td>
                                <button class="btn btn-info" style="color: white;">Edit</button>
                                <button class="btn btn-danger" style="color: white;">Delete</button>
                            </td>
                    </tbody>
                </table>
        `;
    });

    
}

async function getAllCompanies(url) {
    try {
        let response = await axios.get(url);
        return { companies: response.data, error: null };
    } catch (error) {
        console.error(error);
        return {companies: [], error: error.message };
    }
}

async function getDatas() {
    let { companies: fetchedCompanies, error } = await getAllCompanies(`${myURL}/companies`);
    if (error) {
        table2.innerHTML = `<p>Error: ${error}</p>`;
    } else {
        companies = fetchedCompanies;
        displayCompanies(companies)
    }
}
getDatas()