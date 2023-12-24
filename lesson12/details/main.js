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
const userPrinter = (user, userDiv) => {
    for (const userKey in user) {
        const data = user[userKey];
        const div = document.createElement("div");
        div.classList.add("item");
        const keyDiv = document.createElement("div");
        keyDiv.classList.add("keyDiv");
        const valueDiv = document.createElement("div");
        valueDiv.classList.add("valueDiv");
        keyDiv.innerText = userKey + ":";
        if (typeof data === "object") {
            const innerDiv = document.createElement("div");
            div.append(keyDiv, innerDiv);
            userDiv.appendChild(div);
            userPrinter(data, innerDiv);
        } else {
            valueDiv.innerText = data;
            div.append(keyDiv, valueDiv);
            userDiv.appendChild(div);
        }
    }
};
/*const userPrinter = (user, isInnerDiv, userDiv) => {
    userDiv.style.display = "flex";
    //const wrap = document.createElement("div");
    const keysDiv = document.createElement("div");
    const valuesDiv = document.createElement("div");
    userDiv.append(keysDiv, valuesDiv);
    const elementsByClassName = document.querySelectorAll(".wrapper");
    for (const userKey in user) {
        const data = user[userKey];
        const keyDiv = document.createElement("div");
        const valueDiv = document.createElement("div");
        if (typeof data === "object") {
            const innerDiv = document.createElement("div");
            innerDiv.classList.add("wrapper");
            keyDiv.innerText = userKey + ":";
            keysDiv.appendChild(keyDiv);
            valuesDiv.appendChild(innerDiv);
            isInnerDiv = true
            userPrinter(data, isInnerDiv, innerDiv);
        } else {
            keyDiv.innerText = userKey + ":";
            valueDiv.innerText = data;
            keysDiv.appendChild(keyDiv);
            valuesDiv.appendChild(valueDiv);
        }
    }
    isInnerDiv = false;
};*/
const userInfo = document.createElement("div");
userInfo.classList.add("userInfo");
userPrinter(user, userInfo);
document.body.appendChild(userInfo);