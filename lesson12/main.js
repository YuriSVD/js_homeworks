const url = new URL("https://jsonplaceholder.typicode.com/users");
fetch(url)
    .then(value => value.json())
    .then(value => {
        const wrap = document.createElement("div");
        wrap.classList.add("wrap");
        for (const element of value) {
            const div = document.createElement("div");
            div.classList.add("linkDiv");
            const a = document.createElement("a");
            a.href = "details/details.html?data=" + JSON.stringify(element);
            a.innerText = `${element.id}. ${element.name}`;
            div.appendChild(a)
            wrap.appendChild(div);
        }
        document.body.appendChild(wrap);
    });