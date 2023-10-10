/*Vi vælger burger menu iconet og alllinks(de overordnet links så vi
    kan bruge dem nedenfor) */
const burger = document.querySelector(".burger");
const alllinks = document.querySelector(".alllinks");

/*Vi sætter en eventlistner på burger iconet
og laver en funktion som siger når man 
klikker på ikonet skal den putte classen 
active på burger iconet så det ændre sig samt
alllinks for at vise dem, vi bruger toggle for at
kunne trykke på burger iconet igen og fjerne menuen */
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  alllinks.classList.toggle("active");
});

/*Her vælger vi alle sublinks fra dropdown menuen
så når vi trykker på den så fjerner vi classen
active og menuen forsvinder og burger iconet går
tilbage til normal */
document.querySelectorAll(".sublink").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    alllinks.classList.remove("active");
  })
);
