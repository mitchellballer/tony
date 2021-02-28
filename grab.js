var person;

function readUrl(url){
    let url_str = document.URL;

    let url_args = new URL(url_str);
    let params = url_args.searchParams;

    if (params.has('id')){
        document.getElementById("known_person").hidden = false;
        //document.getElementById("person_name").innerHTML += (params.get('id'));
        person = params.get('id');
        if(person == "dave"){
            document.getElementById("dave").hidden = false;
        }else if(person == "george"){
            document.getElementById("george").hidden = false;
        }

    } else if (params.has('results')){
        document.getElementById("responses").hidden = false;
        
    } else {
        //document.getElementById("unknown_person").hidden = false;
        person = "unknown"
        document.getElementById("no_params").hidden = false;
    }
    
}

function rsvp(){
    result = document.querySelector('input[name="rsvp"]:checked').value;
    document.getElementById("result").innerHTML = person + " is: " + result;
    if(person == "asdf"){
        document.getElementById("asdf_response").innerHTML += result;
    }else if(person == "asdf2"){
        document.getElementById("asdf2_response").innerHTML += result;
    }else{
        document.getElementById("rando_response").innerHTML += result;
    }
}