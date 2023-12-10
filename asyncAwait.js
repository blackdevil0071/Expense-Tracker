const preMovie = async () => {
    const promiseWifeTickets = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`ticket`);
        }, 3000);
    });

    try {
        let ticket = await promiseWifeTickets;
        console.log("Wife: I have tickets");
        console.log("Husband: We should go in");
        console.log("Wife: No, I am hungry");

        let popcorn = await new Promise((resolve) => resolve(`popcorn`));
        console.log("Husband: I got popcorn");
        console.log("Wife: I have tickets and popcorn");
        console.log("Husband: We should go in");
        console.log("Wife: No, I am still hungry");

        let butter = await new Promise((resolve) => resolve(`butter`));
        console.log("Husband: I got butter too");
        console.log("Wife: I have tickets, popcorn, and butter");
        console.log("Husband: Now, can we go in?");
        console.log("Wife: Okay, let's go!");
    } catch (error) {
        console.error("Error:", error);
    }
};

preMovie();
