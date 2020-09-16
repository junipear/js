//one
const url1 = 'https://4091006.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=373&deploy=1&compid=4091006&h=184958ab913324566f9b';

let request1 = new XMLHttpRequest();
let tableOne = '';

request1.open('GET', url1, true);

request1.onload = function() {
    let firstreport = JSON.parse(this.response);
    //console.log(firstreport);
    for (let i = 0; i < firstreport.DueDateSevenPm1a.length; i++) {
        tableOne += '<tr><td>' +
            firstreport.DueDateSevenPm1a[i].tranid + '</td><td>' + firstreport.DueDateSevenPm1a[i].custbody_wo_current_work_center + '</td><td>' + firstreport.DueDateSevenPm1a[i].lastmodifieddate + '</td></tr>'
    }
    document.querySelector('#table1').innerHTML = tableOne;
}

request1.send();
