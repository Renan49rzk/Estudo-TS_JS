const input = document.getElementById("input") as HTMLInputElement;
//o as está a definir que o elemento é um HTMLInputElement
//HTML ELEMENT fornece propriedades como value, id, className, etc
//elemento genérico do HTML
input.addEventListener("input", (event) => {
    console.log("Digitei");
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});