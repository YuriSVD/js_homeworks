const getUserData = () => {
    let url = new URL(location.href);
    return JSON.parse(url.searchParams.get("data"));
}
const user = getUserData();
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
const userInfo = document.createElement("div");
userInfo.id = "userInfo";
userPrinter(user, userInfo);
document.body.appendChild(userInfo);