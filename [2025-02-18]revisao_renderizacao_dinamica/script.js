const comidaArray = [
  {
    titulo: "Comida 1",
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    titulo: "Comida 2",
    img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    titulo: "Comida 3",
    img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const cardsContainer = document.getElementById("card-container");

for (let i; i<comidaArray.length; i++){
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const titulo = document.createElement("h2");
  const imagem = document.createElement("img");

  titulo.innerText = comidaArray[0].titulo;
  imagem.src = comidaArray[0].img;

  divCard.appendChild(titulo);
  divCard.appendChild(imagem);

  cardsContainer.appendChild(divCard);
}