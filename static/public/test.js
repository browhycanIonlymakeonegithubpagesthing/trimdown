var themeid = localStorage.getItem("style");
//Loads theme
themeEle = document.createElement("link");
themeEle.rel="stylesheet";
if (themeid === "mainStyle") {
  themeEle.href = "./default.css"
}
if (themeid === "darkStyle") {
    themeEle.href = "./dm.css";
}
document.body.appendChild(themeEle);