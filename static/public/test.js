const themeid = localStorage.getItem("style");
if (themeid) {
//Loads theme
themeEle = document.createElement("link");
themeEle.rel="stylesheet";
if (themeid === "mainStyle") {
  themeEle.href = "./default.css"
}
if (themeid === "darkStyle") {
    themeEle.href = "./dm.css";
}
} else {
  themeEle.href = "./default.css"
}
document.body.appendChild(themeEle);