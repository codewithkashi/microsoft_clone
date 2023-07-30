search.addEventListener("click", ()=>{
document.getElementById("links").style.display = "none"
document.getElementById("rightNav").style.display = "none"
document.getElementById("searchBar").style.display = "block"
document.getElementById("burger").style.display = "none"
})
cancel.addEventListener("click", ()=>{
    document.getElementById("links").style.display = "flex"
    document.getElementById("rightNav").style.display = "flex"
    document.getElementById("searchBar").style.display = "none" 
})
arrow.addEventListener("click", ()=>{
    document.getElementById("searchBar").style.display = "none" 
    document.getElementById("burger").style.display = "block"
    document.getElementById("search").style.display = "block"
    document.getElementById("rightNav").style.display = "flex"
})
let a = 0
burger.addEventListener("click", ()=>{
    if(a==0){
        document.getElementById("links").style.display = "flex"
         "none"
        a = 1
        document.getElementById("navbar").style.paddingBottom = "150px"
    }
    else{
        a = 0
        document.getElementById("links").style.display = "none"
        document.getElementById("navbar").style.paddingBottom = "0px"
        

    }
})