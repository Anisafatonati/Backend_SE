// import method
const { index, store, update, destroy } = require('./fruitController');

const main = () => {
    console.log(`Menampilkan data buah-buahan: `)
    index()

    console.log('\n')
    store('Apel')

    console.log('\n')
    update(1, 'Pisang'); // Update id no 1 menjadi pisang

    console.log('\n')
    destroy(2); 
}

main()
