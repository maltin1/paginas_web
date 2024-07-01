const portafolio = document.querySelector("#portafolio")
const servicios = document.querySelector("#servicios")

/*Menu Portafolio*/
portafolio.addEventListener("click", (p) => {
    p.preventDefault();

    const sectionP = document.querySelector(".portafolio");
    sectionP.scrollIntoView({behavior: "smooth"});
})



/*Menu Servicios*/
servicios.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".servicios");
    sectionS.scrollIntoView({behavior: "smooth"});
})
