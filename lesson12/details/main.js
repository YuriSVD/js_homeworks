const getUserData = () => {
    let url = new URL(location.href);
    return JSON.parse(url.searchParams.get("data"));
}
const user = getUserData();
console.log(user);
/*const userPrinter = (user, number) => {
    for (const userKey in user) {
        const div = document.createElement("div");
        div.style.marginLeft = number + "px";
        div.style.border = "solid 1px black";
        if (typeof user[userKey] === "object") {
            div.innerText = `${userKey}:`;
            const margin = number + 20;
            document.body.appendChild(div);
            userPrinter(user[userKey], margin);
        } else {
            div.innerText = `${userKey}: ${user[userKey]}`;
            document.body.appendChild(div);
        }
    }
};*/ // дуже просто
const userPrinter = (user, number, isInnerDiv) => {
    const elementsByClassName = document.querySelectorAll(".wrapper");
    for (const userKey in user) {
        const data = user[userKey];
        const div = document.createElement("div");
        div.style.marginLeft = number + "px";
        //div.style.border = "solid 1px black";
        div.style.display = "flex";
        const keyDiv = document.createElement("div");
        div.style.alignItems = "center";
        const valueDiv = document.createElement("div");
        valueDiv.style.marginLeft = "20px";
        if (typeof data === "object") {
            const innerDiv = document.createElement("div");
            innerDiv.classList.add("wrapper");
            keyDiv.innerText = `${userKey}:`;
            div.append(keyDiv, innerDiv);
            const margin = 20;
            if (!!elementsByClassName.length && isInnerDiv) {
                const lastElement = elementsByClassName[elementsByClassName.length - 1];
                lastElement.appendChild(div);
            } else {
                document.body.appendChild(div);
            }
            isInnerDiv = true
            userPrinter(data, margin, isInnerDiv);
        } else {
            keyDiv.innerText = userKey + ":";
            valueDiv.innerText = data;
            div.append(keyDiv, valueDiv);
            if (!!elementsByClassName.length) {
                const lastElement = elementsByClassName[elementsByClassName.length - 1];
                lastElement.appendChild(div);
            } else {
                document.body.appendChild(div);
            }
        }
    }
    isInnerDiv = false;
};
userPrinter(user, 0, false);