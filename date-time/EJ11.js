function clock(){
    let date = new Date(Date.now());
    return date.getHours() +":"+date.getMinutes()+":"+date.getSeconds();
}

    setInterval(() => {
        console.log(clock());
        setTimeout(() => {
            console.clear();
        }, 1000);
    }, 1000);
