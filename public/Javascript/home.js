

async function func3() {
    // myChart1=new Chart(),myChart2=new Chart(),mychart3=new Chart(),myChart4=new Chart(),myChart5=new Chart();
    myChart7 = new Chart();
    /* mychart2.destroy();
    mychart3.destroy();
    mychart4.destroy();
    mychart5.destroy();*/
    let canvas1 = document.getElementById('myChart');
    let canvas2 = document.getElementById('myChart6');
    let canvas3 = document.getElementById('myChart15');
    let canvas4 = document.getElementById('myChartAll');
    //let canvas5=document.getElementById('myChartCountry');
    canvas1.hidden = false;
    canvas2.hidden = true;
    canvas3.hidden = true;
    canvas4.hidden = true;
    //canvas5.hidden=true;
    //canvas1.height="400px";
    //canvas1.width="600px";
    document.getElementById('header').innerHTML = `Number of Cases in India`;
    const response = await fetch("https://api.covid19india.org/data.json");
    const resp = await response.json();
    //response.then(pp=>{
    const value = resp.cases_time_series;
    let a = [];
    let b = [];
    let c = [];
    let k = value.length;
    let j = value.length;
    let l = value.length;
    //console.log(value);
    for (let i = value.length - 1; i >= 0; i--) {
        a[k--] = value[i].dailyconfirmed;
        b[j--] = value[i].date;
        c[l--] = value[i].dailydeceased;
    }
    //console.log(a);
    //console.log(b);

    var ctx = document.getElementById('myChart').getContext('2d');
    myChart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: b,
            datasets: [{
                label: 'Number of Cases in India',
                data: a,
                backgroundColor: [
                    'rgba(76, 62, 237, 0.7)'

                ],
                borderColor: [
                    'rgba(25, 12, 171, 0.6)'
                ],
                borderWidth: 2,
                fill: true
            }
            ],

        },

        options: {
            scales: {
                y: {

                    beginAtZero: true
                }
            }
        }
    })
};
async function func15() {
    //mychart1.destroy();
    /* mychart3.destroy();
     mychart2.destroy();*/
    // mychart4.destroy();
    //mychart5.destroy();
    let canvas1 = document.getElementById('myChart');
    let canvas2 = document.getElementById('myChart6');
    let canvas3 = document.getElementById('myChart15');
    let canvas4 = document.getElementById('myChartAll');
    //let canvas5=document.getElementById('myChartCountry');
    canvas1.hidden = true;
    canvas2.hidden = true;
    canvas3.hidden = false;
    canvas4.hidden = true;
    //canvas5.hidden=true;
    //canvas3.height="400px";
    //canvas3.width="600px";
    document.getElementById('header').innerHTML = `Number of Cases in India`;
    const response = await fetch("https://api.covid19india.org/data.json");
    const resp = await response.json();
    //response.then(pp=>{
    const value = resp.cases_time_series;
    let a = [];
    let b = [];
    let c = [];
    let k = 15;
    let j = 15;
    let l = 15;
    //console.log(value);
    for (let i = value.length - 1; i >= value.length - 15; i--) {
        a[k--] = value[i].dailyconfirmed;
        b[j--] = value[i].date;
        c[l--] = value[i].dailydeceased;
    }
    // console.log(a);
    //console.log(b);

    var ctx = document.getElementById('myChart15').getContext('2d');
    myChart2 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: b,
            datasets: [{
                label: 'Number of Cases in India',
                data: a,
                backgroundColor: [
                    'rgba(76, 62, 237, 0.5)'
                ],
                borderColor: [
                    'rgba(25, 12, 171, 0.8)'
                ],
                borderWidth: 4,
                fill: true
            }],

        },

        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

};
async function func6() {
    //mychart2.destroy();
    //mychart1.destroy();
    // mychart4.destroy();
    /* myChart3.destroy();
     mychart5.destroy();*/
    let canvas1 = document.getElementById('myChart');
    let canvas2 = document.getElementById('myChart6');
    let canvas3 = document.getElementById('myChart15');
    let canvas4 = document.getElementById('myChartAll');
    //let canvas5=document.getElementById('myChartCountry');
    canvas1.hidden = true;
    canvas2.hidden = false;
    canvas3.hidden = true;
    canvas4.hidden = true;
    //canvas5.hidden=true;
    //canvas2.height="400px";
    //canvas2.width="600px";
    document.getElementById('header').innerHTML = `Number of Cases in India`;
    const response = await fetch("https://api.covid19india.org/data.json");
    const resp = await response.json();
    //response.then(pp=>{
    const value = resp.cases_time_series;
    let a = [];
    let b = [];
    let c = [];
    let k = 180;
    let j = 180;
    let l = 180;
    // console.log(value);
    for (let i = value.length - 1; i >= value.length - 180; i--) {
        a[k--] = value[i].dailyconfirmed;
        b[j--] = value[i].date;
        c[l--] = value[i].dailydeceased;
    }
    // console.log(a);
    // console.log(b);

    var ctx = document.getElementById('myChart6').getContext('2d');
    myChart3 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: b,
            datasets: [{
                label: 'Number of Cases in India',
                data: a,
                backgroundColor: [
                    'rgba(76, 62, 237, 0.5)'
                ],
                borderColor: [
                    'rgba(25, 12, 171, 0.8)'
                ],
                borderWidth: 3,
                fill: true
            }],

        },

        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

};
async function funcAll() {
    /* mychart2.destroy();
    mychart3.destroy();
    mychart1.destroy();
    /*mychart5.destroy();*/

    let canvas1 = document.getElementById('myChart');
    let canvas2 = document.getElementById('myChart6');
    let canvas3 = document.getElementById('myChart15');
    let canvas4 = document.getElementById('myChartAll');
    //let canvas5=document.getElementById('myChartCountry');
    canvas1.hidden = true;
    canvas2.hidden = true;
    canvas3.hidden = true;
    canvas4.hidden = false;
    //canvas5.hidden=true;
    //canvas4.height="400px";
    //canvas4.width="600px";
    document.getElementById('header').innerHTML = `Number of Cases in India`;
    const response = await fetch("https://api.covid19india.org/data.json");
    const resp = await response.json();
    //response.then(pp=>{
    const value = resp.cases_time_series;
    let a = [];
    let b = [];
    let c = [];
    let k = value.length;
    let j = value.length;
    let l = value.length;
    //console.log(value);
    for (let i = value.length - 1; i >= 0; i--) {
        a[k--] = value[i].dailyconfirmed;
        b[j--] = value[i].date;
        c[l--] = value[i].dailydeceased;
    }
    //console.log(a);
    // console.log(b);

    var ctx = document.getElementById('myChartAll').getContext('2d');
    myChart4 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: b,
            datasets: [{
                label: 'Number of Cases in India',
                data: a,
                backgroundColor: [
                    'rgba(76, 62, 237, 0.5)'
                ],
                borderColor: [
                    'rgba(25, 12, 171, 0.8)'
                ],
                borderWidth: 3,
                fill: true
            }],

        },

        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

};
async function check(country) {
    let response;

    response = await fetch(`https://api.covid19api.com/total/dayone/country/${country}`);
    let resp = await response.json();
    if (response.status == 404 || resp.length == 0) {
        response = await fetch(`https://api.covid19api.com/total/dayone/country/south-africa`);
        resp = await response.json();

    }
    return resp;
    //throw new Error("rashid");
    //return await response.json();


    // console.log(response);
    //return await response.json();
    /*finally{
        return await response.json();
    }*/

};

funcDeath();
async function funcDeath() {
    document.getElementById("deathButton").hidden = true;
    let canvas7 = document.getElementById('myChart7');
    let canvas8 = document.getElementById('myChart8');
    canvas7.hidden = true;
    canvas8.hidden = false;
    //canvas3.height="400px";
    //canvas3.width="600px";
    document.getElementById('header2').innerHTML = `Number of Deaths in India`;
    const response = await fetch("https://api.covid19india.org/data.json");
    const resp = await response.json();
    //response.then(pp=>{
    const value = resp.cases_time_series;
    let a = [];
    let b = [];
    let c = [];
    let k = value.length;
    let j = value.length;
    let l = value.length;
    //console.log(value);
    for (let i = value.length - 1; i >= 0; i--) {
        a[k--] = value[i].dailyconfirmed;
        b[j--] = value[i].date;
        c[l--] = value[i].dailydeceased;
    }
    // console.log(a);
    //console.log(b);

    var ctx = document.getElementById('myChart8').getContext('2d');
    myChart8 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: b,
            datasets: [{
                label: 'Number of Deaths in India',
                data: c,
                backgroundColor: [
                    'rgba(166, 76, 79, 0.7)'
                ],
                borderColor: [
                    'rgba(245, 20, 27)'
                ],
                borderWidth: 4,
                fill: true
            }],

        },

        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

};
async function compareCountry() {
    /*myChart2.destroy();
     myChart3.destroy();
     myChart4.destroy();
     myChart1.destroy();
    myChart5.destroy();*/
    myChart7.destroy();
    document.getElementById("deathButton").hidden = false;
    let canvas7 = document.getElementById('myChart7');
    let canvas8 = document.getElementById('myChart8');
    canvas7.hidden = false;
    canvas8.hidden = true;
    const name = document.getElementById('selectCountry2').value
    const country = name.toLowerCase();
    document.getElementById('header2').innerHTML = `Number of Cases in ${name}`;
    /*console.log(name); 
    let canvas1=document.getElementById('myChart');
    let canvas2=document.getElementById('myChart6');
    let canvas3=document.getElementById('myChart15');
    let canvas4=document.getElementById('myChartAll');
    canvas1.hidden=true;
    canvas2.hidden=true;
    canvas3.hidden=true;
    canvas4.hidden=true;
    canvas5.hidden=false;
    //mychart1.destroy();*/
    //let canvas6=document.getElementById('myChart6');



    const resp = await check(country);
    console.log(resp);
    const value = resp;
    let a = [];
    let b = [];
    let c = [];
    let k = value.length;
    let j = value.length;
    let l = value.length;
    //console.log(value);
    for (let i = value.length - 2; i > 0; i--) {
        let cases = value[i].Confirmed - value[i - 1].Confirmed;
        if (cases > 0) {
            a[k--] = cases;
            b[j--] = (new Date(value[i].Date.substring(0, 10)).toUTCString()).substring(4, 16);
        }
    }
    // console.log(a);
    //console.log(b);
    var ctx = document.getElementById('myChart7').getContext('2d');
    //canvas6.height="400px";
    //canvas6.width="600px";
    myChart7 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: b,
            datasets: [{
                label: `Number of Cases in ${name}`,
                data: a,
                backgroundColor: [
                    'rgba(237, 199, 173, 0.5)'
                    //'rgba(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256),0.5)'

                ],
                borderColor: [
                    'rgba(201, 97, 26, 0.8)'
                ],
                borderWidth: 2,
                fill: true
            }],

        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
        // myChart5.update();
    })

};
function func() {
    let a = document.getElementById('magic');
    a.classList.toggle("mystyle");
    // a.style.display="block";
    // b=document.getElementById('hide');

    // b.classList.toggle("change");
}

function func2() {
    let c = 0;
    let notFound = document.getElementById('notFound');
    let filter2 = document.getElementById('filter2').value.toUpperCase();
    let st = document.getElementsByClassName("stateSearch");
    for (let i = 0; i < st.length; i++) {
        let ss = st[i].getElementsByTagName('td')[0];
        let sp = ss.innerHTML.toUpperCase();
        if (sp) {
            if (sp.indexOf(filter2) > -1)
                st[i].hidden = false;
            else {
                c++;
                st[i].hidden = true;
            }
        }
    }
    if (c == st.length)
        notFound.hidden = false;
    else
        notFound.hidden = true;
}

function compareAndToggle() {
    const graph1 = document.getElementById('graphsCompare1');
    const graph2 = document.getElementById('graphsCompare2');
    graph2.classList.toggle("toggle");
    //graph1.classList.remove('col-lg-12');
    //graph2.classList.remove('col-lg-12');
    graph1.classList.replace("col-lg-12", 'col-lg-6');
    graph2.classList.replace('col-lg-12', 'col-lg-6');
    // graph1.classList.toggle("toggle");
}
function deathGraphVisible() {
    funcDeath();
    document.getElementById("mychart7").hidden = true;
    document.getElementById("mychart8").hidden = false;

}