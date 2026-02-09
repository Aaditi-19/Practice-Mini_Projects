var isFriend = document.querySelector("p");
var btn = document.querySelector("button");
var  flag = 0;
btn.addEventListener("click", function(){
    if(flag === 0){
        isFriend.textContent  = "Friends Now !";
        btn.textContent = "Remove";
        // console.log("friends");
        flag = 1;
        
    }
    else{
        isFriend.textContent  = "You may know each other"
        btn.textContent = "Add";
        // console.log("not friends");
        flag = 0;
    }
    
})