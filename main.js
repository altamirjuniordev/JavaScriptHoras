function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()   
    let saudacao = document.getElementById('saudacao')
    let img = document.getElementById('img')
    let Hora = hora.toString()
    let Minutos = minutos.toString() 

    function zero(h,m) {
        if (h.length==1) {
            hora = `0${Hora}`
        }
         if (m.length==1) {
            minutos = `0${Minutos}`         
        }
    }
    zero(Hora,Minutos)
    if (hora<4) {
        
        saudacao.innerHTML = (`Boa madruga, horário: ${hora}:${minutos}h !`)
        img.src = 'madrugada.png'
    }  else if (hora<12) {
        saudacao.innerHTML = (`Bom dia, horario: ${hora}:${minutos}h!`)
        img.src = 'manha.png'
    } else if (hora<18) {
        saudacao.innerHTML = (`Boa tarde, horario: ${hora}:${minutos}h!`)
        img.src = 'tarde.png'
    } else {
        saudacao.innerHTML = (`Boa noite, horário: ${hora}:${minutos}h!`)
        img.src = 'noite.png'
    }
}       
