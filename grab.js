function readUrl(url){
    let url_str = document.URL;

    let url_args = new URL(url_str);
    console.log(url_args.searchParams);
    let params = url_args.searchParams;

    console.log(params.get('id'));
    if (params.has('id')){
        document.getElementById("known_person").hidden = false;
        document.getElementById("person_name").innerHTML += (params.get('id'));
    } else {
        document.getElementById("unknown_person").hidden = false;
    }
    
}