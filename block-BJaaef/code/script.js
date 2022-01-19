  
let parentDiv = document.querySelector(".parent");
parentDiv.style.display = "flex";
parentDiv.style.flexWrap = "wrap";
parentDiv.style.justifyContent = "space-evenly"
parentDiv.style.padding = "40px";


got.houses.forEach((book) => {
    book.people.forEach((house) => {
        
        let div = document.createElement("div");
        div.style.width = "300px";
        div.style.height = "200px";
        div.style.border = "1px solid black";
        div.style.margin = "15px";
        div.style.padding = "16px";
        div.style.borderRadius = "5px";

        let img = document.createElement("img");
        img.src = `${house.image}`;
        img.style.borderRadius = "50%";
        img.style.border = "2px solid darkgreen"
        img.style.objectFit = "cover";

        let h2 = document.createElement("h2");
        h2.innerText =`${house.name}`;
        h2.style.fontSize = "12px";
        h2.style.marginTop = "-50px";
        h2.style.marginBottom = "40px"
        h2.style.textAlign = "center";

        let p = document.createElement("p");
        p.innerText = `${house.description}`;

        p.style.marginBottom = "15px"
        p.style.textAlign = "center";
        p.style.fontSize = "12px"

        let btn = document.createElement("button");
        btn.style.background = "rgb(231,237,253)"
        btn.style.padding = "5px"
        btn.innerText = "Learn More!"
        btn.style.width = "100%"
        btn.style.borderRadius = "5px";

        div.append(img, h2, p, btn);
        parentDiv.append(div);

    })
})