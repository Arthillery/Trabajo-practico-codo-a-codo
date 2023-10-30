function validarcampo() {
    var campos = ["nombre", "apellido", "correo", "edad"];

    for (var i = 0; i < campos.length; i++) {
        var campo = document.getElementById(campos[i]);
        var valorCampo = campo.value;
        
        const patron = /^[A-Za-z]+$/;
        if (campos[i] !== "edad"  && campos[i]!=="correo" ) {
            //algunas validaciones las hice 2 veces porque la logica del campo cambia
            if (valorCampo === "") {
                alert("El campo " + campos[i] + " no puede estar vacío");
                return false;
            } else if (valorCampo.length > 20) {
                alert("El campo " + campos[i] + " debe tener menos de 20 caracteres");
                return false;
            } else if (!patron.test(valorCampo)) {
                alert("El campo " + campos[i] + " debe contener solo letras (A-Z, a-z)");
                return false;
            }
        } else{}
        if (campos[i] === "campo") {
            if (valorCampo === "") {
                alert("El campo " + campos[i] + " no puede estar vacío");
                return false;
            } else if (valorCampo.length > 20) {
                alert("El campo " + campos[i] + " debe tener menos de 20 caracteres");
                return false;
            }

        } else{}
            if (campos[i] === "edad") {
            if (valorCampo === "") {
                alert("El campo " + campos[i] + " no puede estar vacío");
                return false;
            } else if (parseInt(valorCampo) > 99 || parseInt(valorCampo) < 18) {
                alert("El campo " + campos[i] + " debe ser un número entre 18 y 99");
                return false;
            }
        }
    }
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const coinInput = document.getElementById('coinInput');
    const infoAPI = document.getElementById('infoAPI');
    //no todas estas monedas andan, pero es la info de la api

    const monedasPermitidas = ['BTC', 'DAI', 'ETH', 'USDT', 'USDC', 'BNB', 'AAVE', 'ADA', 'AXS',
     'BAT', 'CAKE', 'DOGE', 'DOT', 'EOS', 'LINK', 'LTC', 'MANA', 'PAXG', 'SAND', 'SHIB', 'SLP',
      'SOL', 'TRX', 'UNI', 'XLM', 'XRP', 'AVAX', 'BCH', 'BUSD', 'CHZ', 'FTM', 'MATIC', 'ALGO', 'NUARS', 'DOC', 'USDP', 'UXD'];

    function obtenerDatosAPI(coin) {
        const url = `https://criptoya.com/api/binance/${coin}/ars/0.1`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                mostrarDatos(data);


            })
            .catch(error => {
                console.error('Error al obtener los datos de la API:', error);
                infoAPI.textContent = `Hubo un error al obtener los datos de '${coin}'.\n Por favor ingrese otra criptomoneda.`;
            });
    }

    function mostrarDatos(data) {
        const coinValue = coinInput.value.trim().toUpperCase();

        if (monedasPermitidas.includes(coinValue)) {
            const formattedData = {
                "Precio de compra": formatNumber(data.ask),
                "Costo final de compra incluyendo fees": formatNumber(data.totalAsk),
                "Precio de Venta": formatNumber(data.bid),
                "Costo final de venta incluyendo fees": formatNumber(data.totalBid),
                "Ultima actualizacion": formatDateTime(data.time)
            };

            let formattedString = '';
    
            for (const property in formattedData) {
                formattedString += `${property}: ${formattedData[property]}\n`;
            }

            infoAPI.textContent = formattedString;


        } else {
            infoAPI.textContent = 'Por favor, ingresa una moneda válida del listado.';
        }
    }

    function formatNumber(number) {
        const numberFormat = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });
        return numberFormat.format(number);
    }

    function formatDateTime(timestamp) {
        const dateTimeFormat = new Intl.DateTimeFormat('es-AR', { dateStyle: 'full', timeStyle: 'medium' });
        return dateTimeFormat.format(new Date(timestamp * 1000));
    }

    searchButton.addEventListener('click', () => {
        const coinValue = coinInput.value.trim().toUpperCase();
        obtenerDatosAPI(coinValue);
    });
});




  function changeColor() {
    var button = document.getElementById("colorButton");
    var randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
}
//esta funcion la saque de internet, no sabia como randomizar
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function validarcomentario() {
    var comentario = document.querySelector('.comentario');
    comentario.value = ''; 
    return true; }