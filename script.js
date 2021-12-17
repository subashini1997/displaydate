
var inele=document.createElement('input');
inele.setAttribute('type','date')
inele.setAttribute('id','my_date')
document.body.append(inele);

var btn=document.createElement('button');
btn.setAttribute('type','button');
btn.className="btn btn-primary";
btn.innerHTML="Display Data";
btn.addEventListener('click',display_date);
document.body.append(btn);

var p=document.createElement('p');

var br=document.createElement('br');
document.body.append(p);

function display_date()
{
var dt= new Date(document.getElementById('my_date').value);

if( Date.parse(dt))
{
    var today_dt=new Date(); 
    var ms=today_dt.getTime()-dt.getTime();
    var sec=Math.floor(ms/1000);
    var min=Math.floor(sec/60);
    var hr =Math.floor(min/ 60);
  
    var day=Math.floor(hr/24);
    
    var year_diff=today_dt.getFullYear()-dt.getFullYear();
    //var month_diff=today_dt.getMonth()-dt.getMonth();
    var month_diff = (year_diff * 12)+(today_dt.getMonth()-dt.getMonth());
    var str=`Given Input Date is ${dt} <br> Year ${year_diff} <br> Month ${month_diff} <br> Day ${day} <br> hours ${hr}<br> Minutes ${min} <br> seconds ${sec} <br> Milliseconds ${ms}`;

    document.querySelector('p').innerHTML=str;
 
   
}
}

