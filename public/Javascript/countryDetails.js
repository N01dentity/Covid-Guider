 func3();               
async function check(country)
           {
               let response;
         
                 response= await fetch(`https://api.covid19api.com/total/dayone/country/${country}`);
                   let resp=await response.json();
                   if(response.status==404 || resp.length==0)
                   {
                       response= await fetch(`https://api.covid19api.com/total/dayone/country/south-africa`);
                       resp=await response.json();
                    
                   }
                   //console.log(resp)
                   return resp;
                }
async function func3()
{
    const coun=document.getElementById('country').innerText;
    const country=coun.toLowerCase();
                const resp=await check(country);
                    let value=resp;
                    let a=[];
                    let b=[];
                    let c=[];
                    let k=value.length;
                    let j=value.length;
                    let l=value.length;
                //console.log(value[0].Country);
                for(let i=value.length-2;i>0;i--)
                {
                    let cases=value[i].Confirmed-value[i-1].Confirmed;
                    if(cases>0)
                    {
                        a[k--]=cases;
                        b[j--]=(new Date(value[i].Date.substring(0,10)).toUTCString()).substring(4,16);
                    }
                }
   var ctx = document.getElementById('myChart').getContext('2d');
            var myChart1 = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: b,
                    datasets: [{
                        label: `Number of Cases in ${coun}`,
                        data: a,
                        backgroundColor: [
                            'rgba(138, 141, 242, 0.7)',
                            
                            
                        ],
                        borderColor: [
                            'rgba(16, 23, 232, 0.6)',
                        ],
                        borderWidth: 2,
                        fill:true
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
    func4();
async function func4()
{
    const coun2=document.getElementById('country').innerText;
    const country2=coun2.toLowerCase();
                //const resp=await response.json();
                const resp2=await check(country2);
                   // document.getElementById('canv').hidden=true;
                    let value2=resp2;
                    let a2=[];
                    let b2=[];
                    let c2=[];
                    let k2=value.length;
                    let j2=value.length;
                    let l2=value.length;
                //console.log(value[0].Country);
                for(let i2=value2.length-2;i2>0;i2--)
                {
                    let cases2=value2[i2].Deaths-value2[i2-1].Deaths;
                    if(cases2>0)
                    {
                        a2[k2--]=cases2;
                        b2[j2--]=(new Date(value2[i2].Date.substring(0,10)).toUTCString()).substring(4,16);
                    }
                }
   var ctx = document.getElementById('myChart2').getContext('2d');
            var myChart2 = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: b2,
                    datasets: [{
                        label: `Number of Deaths in ${coun2}`,
                        data: a2,
                        backgroundColor: [
                            'rgba(166, 76, 79,0.7)'
                            
                        ],
                        borderColor: [
                        'rgb(245, 20, 27)'
                        ],
                        borderWidth: 2,
                        fill:true
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
        }
    }