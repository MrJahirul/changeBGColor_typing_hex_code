
const toasteMeassage = document.querySelector(".toast-message")

onload = () => {
    main();
    //generateToastMessage()

}

function main() {
    const body = document.getElementById("myBody")
    const btn = document.getElementById("myBtn")
    const colorValue = document.getElementById("hexaValue")
    const copyCode = document.getElementById("copyId")
    btn.addEventListener("click", function () {
        const hexa = hexaColor();
        body.style.backgroundColor = hexa;
        colorValue.value = hexa;
    });

    copyCode.addEventListener("click", function () {
        // copy any content for using == navigator.clipboard.writeText();
        navigator.clipboard.writeText(colorValue.value);
        generateToastMessage(`${colorValue.value} copied`);
    })

    function generateToastMessage(msg, color) {
        toasteMeassage.style.display = "flex";
        // toasteMeassage.style.backgroundColor = color;
        toasteMeassage.innerText = msg;
        setTimeout(() => {
            toasteMeassage.style.display = "none";
        }, 1000)
    }

    colorValue.addEventListener('keyup', function (e) {
        const color = e.target.value;
        if (color && isvalidHexaCode(color) ) {
        body.style.backgroundColor = color;        
        }

    })

}

function hexaColor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// /** 
// * @param {string} color: ;
// */
function isvalidHexaCode(color) {
    if (color.length != 7) {
        return false;
    }
    if (color[0] != '#') {
        return false;
    }
    color = color.substring(1);
    return /^[0-9A-Fa-f]{6}$/i.test(color); //That is REJEX
}
