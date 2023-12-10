const users = [
    { user: "user 1", LastAcive: "5.30" },
    { user: "user 2", LastAcive: "5.60" },
    { user: "user 3", LastAcive: "3.30" },
];

function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let output = '';
            users.forEach((user1, index) => {
                output = output + `<li>${user1.user} - Last Activity: ${user1.LastAcive}</li>`;
            });
            document.body.innerHTML = output;
            resolve();
        }, 2000);
    });
}

function createPost(user1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(user1);
            const error = false;

            if (!error) {
                resolve(user1); // Resolve with the created user
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    });
}

function updateLastUserActivityTime(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Updating last activity time
            const newLastActivityTime = new Date().toLocaleTimeString();
            user.LastAcive = newLastActivityTime;
            resolve(newLastActivityTime);
        }, 1000);
    });
}

function deletePost(index) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (index >= 0 && index < users.length) {
                users.splice(index, 1);
                resolve("Post deleted successfully");
            } else {
                reject("Error: Invalid index for deletion");
            }
        }, 2000);
    });
}

// Usage
async function main() {
    try {
        const createdUser = await createPost({ user: "user 4", LastAcive: "6.00" });
        const updatedLastActivityTime = await updateLastUserActivityTime(createdUser);

        console.log("Posts and Last Activity Time after update:");
        await getUsers();

        // Delete the last post after 2 seconds
        setTimeout(async () => {
            const deleteMessage = await deletePost(users.length - 1);
            console.log(deleteMessage);

            console.log("Remaining Posts after deletion:");
            await getUsers();
        }, 2000);
    } catch (err) {
        console.log(err);
    }
}

main();


// function add(name,callBack){
//     console.log(`Hello ${name}`)
//     callBack()
// }

// add("suhas",function sayHello(){
//     console.log('Hello ')
// })

// let cart = ["Shirt", 'Phone', "Laptop"];

// function createOrder(cart) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Order created");
//             resolve(cart);
//         }, 2000);
//     });
// }

// function pushOrder(value) {
//     return new Promise((resolve, reject) => {
//         cart.push(value);
//         resolve();
//     });
// }

// createOrder(cart)
//     .then((result) => {
//         console.log("Order created:", result);
//         return pushOrder("Watch"); // Returning a new promise to chain
//     })
//     .then(() => {
//         console.log("Added");
//     })
//     .catch((error) => {
//         console.error("Error creating order:", error);
//     });
