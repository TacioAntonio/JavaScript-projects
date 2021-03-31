this.addEventListener('message', function (e) {
    console.log(e);
    console.log(e.data);
    if(e.data === 'Loop') {
        for (let index = 0; index < 10000000000; index++) {}
    
        this.postMessage({ message: e.data+' - Mensagem recebida.' })
    }

    if(e.data === 'Fast') {
    
        this.postMessage({ message: e.data+' - Mensagem recebida.' })
    }
})