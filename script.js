 let div = document.getElementById("bloco")

 const data = new Date()

 const formatter = Intl.DateTimeFormat('pt-BR', {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour:"numeric",
    minute:"numeric",
    second:"numeric",
 });


 div.innerHTML = formatter.format(data);
 