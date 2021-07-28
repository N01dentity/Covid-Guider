
pin = document.getElementById('pinNumber');
district = document.getElementById('districtNumber');
function pinCode() {

    pincode = document.getElementById('pincode');
    state = document.getElementById("state");
    pincode.hidden = false;
    state.hidden = true;
}
function districtNumber() {
    pincode = document.getElementById('pincode');
    state = document.getElementById("state");
    state.hidden = false;
    pincode.hidden = true;

}
async function loadDistrict() {
    const response = await fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states");
    const resp = await response.json();
    let allStates = document.getElementsByClassName('allStates');
    //console.log(resp.states);
    for (let i = 0; i < resp.states.length; i++) {
        allStates[i].innerHTML = resp.states[i].state_name;
        allStates[i].value = resp.states[i].state_id;
    }

}
async function selectDistrict() {
    const selectedState = document.getElementById('selectedState').value;
    const selectedDistricts = document.getElementById('selectedDistricts');
    const deleteOptions = document.getElementById('deleteOptions');
    if (selectedDistricts.hasChildNodes())
        selectedDistricts.removeChild(selectedDistricts.childNodes[0]);
    const response = await fetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${selectedState}`);
    const resp = await response.json();
    //console.log(resp.districts)
    //selectedDistricts.remove();
    let div = document.createElement('select');
    div.setAttribute('id', 'district_id');
    let option = document.createElement('option');
    option.innerHTML = "Select District"
    div.appendChild(option);
    for (let i = 0; i < resp.districts.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = resp.districts[i].district_name;
        opt.value = resp.districts[i].district_id;
        div.appendChild(opt);
    }
    selectedDistricts.appendChild(div);

}
async function pinCenters() {
    const searchResults = document.getElementById("searchResults");
    const date = document.getElementById('date').value;
    const pin = document.getElementById('pin').value;
    let dateArray = date.split("-");
    let newDate = dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0]
    let i = 0;
    if (searchResults.hasChildNodes())
        searchResults.removeChild(searchResults.childNodes[0]);
    console.log(pin);
    console.log(newDate);
    const response = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${newDate}`);
    const resp = await response.json();
    //console.log(resp);
    if (resp.sessions.length > 0) {
        searchResults.hidden = false;
        document.getElementById('noResultFound').hidden = true;
        let newTable = document.createElement('table');
        newTable.classList.add("table");
        newTable.classList.add("table-bordered");
        newTable.classList.add("table-striped");
        let thead = document.createElement('thead');
        let thead2 = document.createElement('thead');
        thead2.innerHTML = resp.sessions[0].date
        newTable.appendChild(thead2);
        let th = document.createElement('th');
        th.innerHTML = "Centre Name";
        thead.appendChild(th);
        let th2 = document.createElement('th');
        th2.innerHTML = "Address";
        thead.appendChild(th2);
        let th3 = document.createElement('th');
        th3.innerHTML = "Age Limit";
        thead.appendChild(th3);
        let th4 = document.createElement('th');
        th4.innerHTML = "Fee Type";
        thead.appendChild(th4);
        let th5 = document.createElement('th');
        th5.innerHTML = "Dose1";
        thead.appendChild(th5);
        let th6 = document.createElement('th');
        th6.innerHTML = "Dose2";
        thead.appendChild(th6);
        let th7 = document.createElement('th');
        th7.innerHTML = "Vaccine";
        thead.appendChild(th7);
        thead.classList.add("heading");
        newTable.appendChild(thead);
        let tbody;
        tbody = document.createElement('tbody');
        for (let i of resp.sessions) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 1; j++) {
                let td = document.createElement('th');
                td.innerHTML = i.name;
                tr.appendChild(td);
                let td2 = document.createElement('td');
                td2.innerHTML = i.address;
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = i.min_age_limit + "+";
                if (i.min_age_limit == 18)
                    td3.classList.add("age18");
                else
                    td3.classList.add("age45");
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = i.fee_type;
                if (i.fee_type == "Paid")
                    td4.classList.add("notAvailable");
                else
                    td4.classList.add("available")
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = i.available_capacity_dose1 + "+";
                if (i.available_capacity_dose1 == 0) {
                    td5.innerHTML = "Booked";
                    td5.classList.add("notAvailable");
                }
                else {
                    td5.classList.add("available");
                    td5.innerHTML = `<a style="color:rgb(67, 214, 67)" href="https://selfregistration.cowin.gov.in/">` + i.available_capacity_dose1 + `+</a>`
                }
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = i.available_capacity_dose2 + "+";
                if (i.available_capacity_dose2 == 0) {
                    td6.innerHTML = "Booked";
                    td6.classList.add("notAvailable")
                }
                else {
                    td6.classList.add("available");
                    td6.innerHTML = `<a style="color:rgb(67, 214, 67)" href="https://selfregistration.cowin.gov.in/">` + i.available_capacity_dose2 + `+</a>`

                }
                tr.appendChild(td6);
                let td7 = document.createElement('td');
                td7.innerHTML = i.vaccine;
                if (i.vaccine == "COVAXIN")
                    td7.classList.add("covaxin");
                tr.appendChild(td7);

            }
            c = 0;
            tbody.appendChild(tr);
        }
        newTable.appendChild(tbody);
        searchResults.appendChild(newTable);
    }
    else {
        document.getElementById('noResultFound').hidden = false;
        searchResults.hidden = true;
    }



}
async function districtsCenters() {
    const district_id = document.getElementById('district_id').value;
    console.log(district_id);
    const searchResults = document.getElementById("searchResults");
    const date = document.getElementById('date2').value;
    let dateArray = date.split("-");
    let newDate = dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0]
    let i = 0;
    const response = await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${newDate}`);
    const resp = await response.json();
    //console.log(resp);
    if (searchResults.hasChildNodes())
        searchResults.removeChild(searchResults.childNodes[0]);
    if (resp.sessions.length > 0) {
        searchResults.hidden = false;
        document.getElementById('noResultFound').hidden = true;
        let newTable = document.createElement('table');
        newTable.classList.add("table");
        newTable.classList.add("table-bordered");
        newTable.classList.add("table-striped");
        let thead = document.createElement('thead');
        let thead2 = document.createElement('thead');
        thead2.innerHTML = resp.sessions[0].date
        newTable.appendChild(thead2);
        let th = document.createElement('th');
        th.innerHTML = "Centre Name";
        thead.appendChild(th);
        let th2 = document.createElement('th');
        th2.innerHTML = "Address";
        thead.appendChild(th2);
        let th3 = document.createElement('th');
        th3.innerHTML = "Age Limit";
        thead.appendChild(th3);
        let th4 = document.createElement('th');
        th4.innerHTML = "Fee Type";
        thead.appendChild(th4);
        let th5 = document.createElement('th');
        th5.innerHTML = "Dose1";
        thead.appendChild(th5);
        let th6 = document.createElement('th');
        th6.innerHTML = "Dose2";
        thead.appendChild(th6);
        let th7 = document.createElement('th');
        th7.innerHTML = "Vaccine";
        thead.appendChild(th7);
        thead.classList.add("heading");
        newTable.appendChild(thead);
        let tbody;
        tbody = document.createElement('tbody');
        for (let i of resp.sessions) {
            let tr = document.createElement('tr');
            for (let j = 0; j < 1; j++) {
                let td = document.createElement('th');
                td.innerHTML = i.name;
                tr.appendChild(td);
                let td2 = document.createElement('td');
                td2.innerHTML = i.address;
                tr.appendChild(td2);
                let td3 = document.createElement('td');
                td3.innerHTML = i.min_age_limit + "+";
                if (i.min_age_limit == 18)
                    td3.classList.add("age18");
                else
                    td3.classList.add("age45");
                tr.appendChild(td3);
                let td4 = document.createElement('td');
                td4.innerHTML = i.fee_type;
                if (i.fee_type == "Paid")
                    td4.classList.add("notAvailable");
                else
                    td4.classList.add("available")
                tr.appendChild(td4);
                let td5 = document.createElement('td');
                td5.innerHTML = i.available_capacity_dose1 + "+";
                if (i.available_capacity_dose1 == 0) {
                    td5.innerHTML = "Booked";
                    td5.classList.add("notAvailable");
                }
                else {
                    td5.classList.add("available");
                    td5.innerHTML = `<a style="color:rgb(67, 214, 67)" href="https://selfregistration.cowin.gov.in/">` + i.available_capacity_dose1 + `+</a>`

                }
                tr.appendChild(td5);
                let td6 = document.createElement('td');
                td6.innerHTML = i.available_capacity_dose2 + "+";
                if (i.available_capacity_dose2 == 0) {
                    td6.innerHTML = "Booked";
                    td6.classList.add("notAvailable")
                }
                else {
                    td6.classList.add("available")
                    td6.innerHTML = `<a style="color:rgb(67, 214, 67)" href="https://selfregistration.cowin.gov.in/">` + i.available_capacity_dose2 + `+</a>`
                }
                tr.appendChild(td6);
                let td7 = document.createElement('td');
                td7.innerHTML = i.vaccine;
                if (i.vaccine == "COVAXIN")
                    td7.classList.add("covaxin");
                tr.appendChild(td7);

            }
            c = 0;
            tbody.appendChild(tr);
        }
        newTable.appendChild(tbody);
        searchResults.appendChild(newTable);
    }
    else {
        document.getElementById('noResultFound').hidden = false;
        searchResults.hidden = true;
    }
}

async function vaccineDetails() {
    const world = document.getElementById("world");
    const india = document.getElementById("india");
    const indiaDaily = document.getElementById("indiaDaily");
    const worldDaily = document.getElementById("worldDaily");
    const response = await fetch("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=30&fullData=true");
    const resp = await response.json();
    //console.log(resp);
    const latestUpdate = resp[resp.length - 1];
    world.innerHTML = latestUpdate.total;
    worldDaily.innerHTML = "+" + resp[resp.length - 2].daily;
    const respon = await fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=30&fullData=true");
    const respp = await respon.json();
    const resp3 = await fetch("https://disease.sh/v3/covid-19/countries");
    const response3 = await resp3.json();
    let i = 0;
    for (let r = 0; r < respp.length; r++) {
        if (respp[r].country == "India") {
            i = r;
            break;
        }
    }
    const indiaLatest = respp[i].timeline[respp[i].timeline.length - 1];
    india.innerHTML = indiaLatest.total;
    indiaDaily.innerHTML = "+" + respp[i].timeline[respp[i].timeline.length - 2].daily;
    let allCountries = document.getElementById("allCountries");
    const tbody = document.getElementById('tbody');
    //console.log(respp)
    for (let i of respp) {
        let tr = document.createElement('tr');
        let td3 = document.createElement('td');
        td3.innerHTML = i.country;
        tr.appendChild(td3)
        let td2 = document.createElement('td');
        td2.innerHTML = i.timeline[i.timeline.length - 2].daily;
        tr.appendChild(td2)
        let td1 = document.createElement('td');
        td1.innerHTML = i.timeline[i.timeline.length - 1].total;
        tr.appendChild(td1);
        for (let r = 0; r < response3.length; r++) {
            if (response3[r].country == i.country) {
                let td4 = document.createElement('td');
                let percentage=((i.timeline[i.timeline.length-1].total)/response3[r].population)*100;
                if(percentage>100)
                percentage=100;
                console.log(i.country,i.timeline[i.timeline.length-1].total,response3[r].population)
                td4.innerHTML=Math.round(percentage)+"%";
                tr.appendChild(td4);
            }
        }

        tbody.appendChild(tr);
        tr.setAttribute("class", "trSearch");
    }
    allCountries.appendChild(tbody);
    tbody.setAttribute("class", "searchCountry");
}
vaccineDetails();

function vaccineCountrySearch() {
    let search = document.getElementById("vaccineCountrySearch").value.toUpperCase();
    let data = document.getElementsByClassName("trSearch");
    let countryName;
    for (let i = 0; i < data.length; i++) {
        countryName = data[i].getElementsByTagName('td')[0];
        if (countryName) {
            let text = countryName.innerHTML.toUpperCase();
            if (text.indexOf(search) > -1)
                data[i].hidden = false;
            else
                data[i].hidden = true;

        }

    }

}

WorldVaccineGraph()
async function WorldVaccineGraph() {
    const response = await fetch("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=30&fullData=true");
    const resp = await response.json();
    const coun = document.getElementById('WorldVaccineGraph');
    let value1 = resp;
    let a = [];
    let b = [];
    let c = [];
    let k = value1.length - 2;
    let j = value1.length - 2;
    //console.log(value[0].Country);
    for (let i = value1.length - 2; i > 0; i--) {
        let cases = value1[i].daily
        if (cases > 0) {
            a[k--] = cases;
            b[j--] = (new Date(value1[i].date.substring(0, 10)).toUTCString()).substring(4, 16);
        }
    }
    var ctx = document.getElementById('WorldVaccineGraph').getContext('2d');
    myChart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: b,
            datasets: [{
                label: "Per Day Vaccination in World",
                data: a,
                backgroundColor: [
                    'rgba(184, 242, 150, 0.7)',


                ],
                borderColor: [
                    'rgba(89, 207, 21, 0.6)',
                ],
                borderWidth: 2,
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
    });

}
IndiaVaccineGraph()
async function IndiaVaccineGraph() {
    const respon = await fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=30&fullData=true");
    const respp = await respon.json();
    let value2 = respp;
    let b = [];
    let c = [];
    for (let i = value2.length - 2; i > 0; i--) {
        if (value2[i].country == 'India') {
            let l = value2[i].timeline.length - 2;
            let m = value2[i].timeline.length - 2;
            for (let f = value2[i].timeline.length - 2; f >= 0; f--) {
                let cases = value2[i].timeline[f].daily;
                if (cases > 0) {
                    c[l--] = cases;
                    b[m--] = (new Date(value2[i].timeline[f].date.substring(0, 10)).toUTCString()).substring(4, 16);
                }
            }

        }
    }
    var ctx2 = document.getElementById('IndiaVaccineGraph').getContext('2d');
    myChart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: b,
            datasets: [{
                label: "Per Day Vaccination in India",
                data: c,
                backgroundColor: [
                    'rgba(155, 189, 232, 0.7)',


                ],
                borderColor: [
                    'rgba(15, 92, 191, 0.6)',
                ],
                borderWidth: 2,
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
    });
}