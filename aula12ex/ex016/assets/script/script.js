function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade <= 10) { img.setAttribute('src', './assets/img/bebe-m.png') }

            else if (idade < 21) { img.setAttribute('src', './assets/img/jovem-m.png') }
      
            else if (idade < 50) { img.setAttribute('src', './assets/img/adulto-m.png') }

            else { img.setAttribute('src',('src', './assets/img/idoso-m.png')) }
        }


        else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >= 0 && idade <= 10) { img.setAttribute('src', './assets/img/bebe-f.png') }

            else if (idade < 21) { img.setAttribute('src', './assets/img/jovem-f.png') }

            else if (idade < 50) { img.setAttribute('src', './assets/img/adulto-f.png') }

            else { img.setAttribute('src', './assets/img/idoso-f.png') }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
