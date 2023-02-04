function initiate(){
    var saveBtn = document.getElementById('save');
    saveBtn.addEventListener('click', saveItem);
}

function saveItem(){
    
    var name = document.getElementById('name').value;
    // console.log(name);
    
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var desi = document.getElementById('desi').value;
    var location = document.getElementById('location').value;
    var email = document.getElementById('email').value;
    var doj = document.getElementById('doj').value;
    var no = document.getElementById('no').value;

    var data=[
        {name:name},
        {age:age},
        {gender:gender},
        {desi:desi},
        {location:location},
        {email:email},
        {doj:doj},
        {no:no}

    ]
    
    var jsondata =JSON.stringify(data);
    
    sessionStorage.setItem(name, jsondata);
}

addEventListener("load",initiate);

