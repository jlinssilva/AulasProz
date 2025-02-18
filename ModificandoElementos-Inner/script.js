tituloH1 = document.getElementById("titulo");
listaUL = document.querySelector("ul");
listaOL = document.getElementById("lista-ordenada");
linkAncora = document.querySelector("a");

tituloH1.innerText = "Modificando Elementos - DOM";
linkAncora.innerText = "PROZ Educação";

listaUL.innerHTML = `
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
`;

listaOL.innerHTML = `
        <li><a href="www.google.com">Google</a></li>
        <li><a href="www.amazon.com.br">Amazon</a></li>
        <li><a href="wwww.mercadolivre.com.br">Mercado Livre</a></li>
`;