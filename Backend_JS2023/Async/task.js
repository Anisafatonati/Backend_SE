/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log("Download berhasil");
    console.log(`Hasil Download: ${result}`);
}

/**
 * Fungsi untuk download file
 * @returns {Promise<string>} - Promise yang akan resolve dengan nama file yang didownload
 */
const download = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("windows-10.exe");
        }, 3000);
    });
};

const main = async () => {
    const result = await download();
    showDownload(result);
};

main();
