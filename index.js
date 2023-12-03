document.querySelector('.filtro-carta').addEventListener("keyup",(e)=>{

    const search = e.target.value;

    document.querySelectorAll(".carta").forEach((tarjeta)=>{
        
        const name = tarjeta.textContent.toLocaleLowerCase().trim();

        if (search != '')
            name.includes(search) ? tarjeta.classList.remove("filter") : tarjeta.classList.add("filter");
        else
            tarjeta.classList.remove('filter');
    });
    
});