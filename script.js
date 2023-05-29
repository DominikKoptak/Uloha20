
https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js

function calcBirthday(){
    let date = document.getElementById("narodeniny").value.split("-");
    let d = moment().set({'month': date[1] -1, 'date': date[2]});
    //d.setMonth(date[1] -1);
    //d.setUTCDate(date[2]);
    let ms = moment();
    //let dVal = d.valueOf();
    let dif = d - ms;

    if (dif < 0) {
        d = moment().add(1, 'year').set({'month': date[1] -1, 'date': date[2]});
        meh = d.valueOf();
        let bb = Math.round((d - ms) /86400000);
    console.log("Za " + bb + " dní máš narodeniny");
    }else{let bb = Math.round((d - ms) /86400000);
        if(bb == 0){console.log("Všetko najlepšie!");
            }else{console.log("Za " + bb + " dní máš narodeniny");}
    }

    switch (date[1]) {
        case "03":
        case "04":
        case "05": 
        console.log("JAR");
            
            break;
        case "06":
        case "07":
        case "08": 
        console.log("LETO");
            
            break;
        case "09":
        case "10":
        case "11": 
        console.log("JESEŇ");
            
            break;
        case "12":
        case "01":
        case "02": 
        console.log("ZIMA");
            
            break;
    
        default:
            break;
    }
}