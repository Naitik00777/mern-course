console.log("Harsh is upcomming TOP G")
console.log("Naitik is also upcomming TOP G")


setTimeout(() => {
    console.log("I will escape matrix definitely")
}, 1000);
setTimeout(() => {
    console.log("I will escape matrix definitely !!!")
}, 0);

console.log("TOP GGG")

const fn = () => {
    console.log("Nothing") 
}


const callback = (arg, fn) => {
    console.log(arg) 
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Top G", fn);
    document.head.append(sc) 
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
