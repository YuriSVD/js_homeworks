const url = new URL("http://jsonplaceholder.typicode.com/users");
fetch(url)
    .then(value => value.json())
    .then(value => {
        const wrap = document.createElement("div");
        wrap.style.display = "flex";
        wrap.style.flexWrap = "wrap";
        wrap.style.justifyContent = "space-around";
        for (const element of value) {
            const div = document.createElement("div");
            div.style.width = "45vw";
            div.style.height = "10vh";
            //div.style.border = "solid 1px black";
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            const a = document.createElement("a");
            a.style.textDecoration = "none";
            a.style.color = "black";
            a.style.fontSize = "2.5vw"
            a.href = "details/details.html?data=" + JSON.stringify(element);
            a.innerText = `${element.id}. ${element.name}`;
            div.appendChild(a)
            wrap.appendChild(div);
        }
        document.body.appendChild(wrap);
    });