const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    if (url === '') {
        alert('please enter a url')
    } else {
        shpwSpinner();
        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size);
            setTimeout(()=>{
                const saveurl = qr.querySelector('img').src;
                savebtn(saveurl)
            },50)


        }, 1000)
    }
};
const generateQRCode = (url, size) => {
    console.log(size);
    const qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size
    })
}
const clearUI = ()=>{
    qrcode.innerHTML = '';
    const savelink = document.getElementById("save-link")
    if (savelink) savelink.remove();
}
const shpwSpinner = () => {
    document.getElementById('spinner').style.display = "block"
}
const hideSpinner = () => {
    document.getElementById('spinner').style.display = "none"
}
const savebtn = (saveurl)=>{
    const link = document.createElement('a')
    link.id = 'save-link'
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5'
    link.href = saveurl;
    link.download = 'qrcode'
    link.innerHTML = 'Save image'
    document.getElementById("generated").appendChild(link)
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);