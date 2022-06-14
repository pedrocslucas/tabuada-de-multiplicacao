function gerarTabuada(){
        let txtNum = document.getElementById('txtn').value
        let tabuada = document.getElementById('seltab')
        if(txtNum.length == 0){
                window.alert('Por favor, digite um número!')
        }else{
                var numero = Number(txtNum)
                var cont = 1
                tabuada.innerHTML = ``
                while(cont <= 10){
                        let item = document.createElement('option')
                        item.text = `${numero} x ${cont} = ${numero*cont}`
                        item.value = `tab${cont}`
                        tabuada.appendChild(item)
                        cont++
                }
        }
}