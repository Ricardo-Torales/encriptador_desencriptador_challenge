document.addEventListener('DOMContentLoaded', function () {
    const encriptarBtn = document.getElementById('encriptarBtn');
    const desencriptarBtn = document.getElementById('desencriptarBtn');
    const mensajeConvertido = document.getElementById('mensajeConvertido');
    const ingreseTexto = document.getElementById('ingreseTexto');
    const botonCopiar = document.getElementById('botonCopiar');
    const textoInput = document.getElementById('texto');
    const muñeco = document.getElementById('muñeco');
    const div_botonCopiar = document.getElementById('div_botonCopiar');

    // Funciones de encriptar y desencriptar
    function encriptarTexto(texto) {
        const mapa = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        return texto.replace(/[eioua]/g, (match) => mapa[match]);
    }

    function desencriptarTexto(texto) {
        const mapa = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        return texto.replace(/enter|imes|ai|ober|ufat/g, (match) => mapa[match]);
    }

    function mostrarResultado() {
        const texto = textoInput.value;

        if (texto) {
            let resultado;
            if (encriptarBtn.classList.contains('active')) {
                resultado = encriptarTexto(texto);
            } else if (desencriptarBtn.classList.contains('active')) {
                resultado = desencriptarTexto(texto);
            }

            // Borra el texto ingresado
            textoInput.value = '';

            mensajeConvertido.textContent = resultado || 'No se pudo procesar el texto.';
            ingreseTexto.style.display = 'none';
            div_botonCopiar.style.display = 'block';
            mensajeConvertido.style.color = '#495057';
            muñeco.style.display = 'none';
        } else {
            mensajeConvertido.textContent = 'No se encontraron los resultados.';
        }
    }

    function copiarAlPortapapeles() {
        const textoACopiar = mensajeConvertido.textContent;

        if (!textoACopiar) {
            console.error('No hay texto para copiar');
            return;
        }

        // Crear un elemento de texto temporal para seleccionar y copiar
        const textarea = document.createElement('textarea');
        textarea.value = textoACopiar;
        document.body.appendChild(textarea);


        // Seleccionar el texto
        textarea.select();
        textarea.setSelectionRange(0, 99999); // Para dispositivos móviles


        // Copiar el texto al portapapeles
        document.execCommand('copy');


        // Eliminar el elemento de texto temporal
        document.body.removeChild(textarea);

        alert('Texto copiado al portapapeles');
    }

    encriptarBtn.addEventListener('click', function () {
        encriptarBtn.classList.add('active');
        desencriptarBtn.classList.remove('active');
        mostrarResultado();
    });

    desencriptarBtn.addEventListener('click', function () {
        desencriptarBtn.classList.add('active');
        encriptarBtn.classList.remove('active');
        mostrarResultado();
    });

    botonCopiar.addEventListener('click', copiarAlPortapapeles);
});
