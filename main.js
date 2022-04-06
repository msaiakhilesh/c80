var newarray=[];
function submit(){
   

    for(i=1;i <=4;i++)
    {
        name =document.getElementById("student"+i).value;
        newarray.push(name);
    }
    
    document.getElementById("display_name").innerHTML=newarray;
    document.getElementById("submit_button").style.display = "none"; 
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    newarray.sort();
    document.getElementById("display_name").innerHTML=newarray;
}