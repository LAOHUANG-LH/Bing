if ('serviceWorker'in navigator) {
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('/web/sw.js', {
            scope: '/web/'
        })
    }
    )
}
