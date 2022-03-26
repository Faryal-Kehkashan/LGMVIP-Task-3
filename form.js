function addStudent()
{
    var name= document.myform.name.value;
    var email= document.myform.email.value;
    var date= document.myform.date.value;
    var field = document.myform.field.value;
    var year= document.myform.year.value;
    var gender= document.myform.gender.value;

    var tble_row = document.createElement('tr');
    var td1 = tble_row.appendChild(document.createElement('td'));
    td1.innerHTML = name;

    var td2 = tble_row.appendChild(document.createElement('td'));
    td2.innerHTML = email;

    var td3 = tble_row.appendChild(document.createElement('td'));
    td3.innerHTML = date;

    var td4 = tble_row.appendChild(document.createElement('td'));
    td4.innerHTML = field;

    var td5 = tble_row.appendChild(document.createElement('td'));
    td5.innerHTML = year;

    var td6 = tble_row.appendChild(document.createElement('td'));
    td6.innerHTML = gender;

    document.getElementById("tbl").appendChild(tble_row);
    
}