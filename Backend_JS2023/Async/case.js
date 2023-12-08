const persiapan = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Menyiapkan bahan...");
        }, 3000);
    });
};

const rebusAir = () => {
    return new Promise( function(resolve, reject) {
        setTimeout( function() {
            resolve("Merebus Air...");
        }, 7000);
    });
};

const masak = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Masak Mie...");
        }, 5000);
    });
};

// Consume Promise

const main = () => {
    persiapan()
    .then((res) => {
        console.log(res);
        return rebusAir();
    })
    .then((res) => {
        console.log(res);
        return masak(); 
    })
    .then((res) => {
        console.log(res);
    })
};

main();