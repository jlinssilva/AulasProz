corpo = document.querySelector("body");

let titulo = document.createElement("h1");
titulo.setAttribute("id", titulo);
titulo.innerText = "À VENDA";

let produto = document.createElement("div");
produto.innerHTML = `
    <img src="icon.png" width=64 height=64 align="left" />
    <h2>Produto 01</h2>
    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
    <p>R$ 100,00</p>
`;

corpo.appendChild(titulo);
corpo.appendChild(produto);