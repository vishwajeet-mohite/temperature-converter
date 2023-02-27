document.getElementById('convert').onclick=tempConvert;
document.getElementById('clear').onclick=clearform;
document.getElementById('kelvin').onclick=kelvinform;

function tempConvert(){
    var fahrenit=document.getElementById("fahrenit").value;
    var celsius=document.getElementById("celsius").value;

    if(fahrenit!= ''){
        celsius=(parseFloat(fahrenit)-32) /1.8;
    }else{
        fahrenit=(parseFloat(celsius)* 1.8) + 32;
    }

    document.getElementById('fahrenit').value=parseFloat(fahrenit).toFixed(1);
    document.getElementById('celsius').value=parseFloat(celsius).toFixed(1);
    

}

function clearform(){
    document.getElementById('fahrenhit').value='';
    document.getElementById('celsius').value='';
}