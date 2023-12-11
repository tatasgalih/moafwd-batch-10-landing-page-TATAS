function btnAction(){
    let getEmailEl = document.getElementById('getEmail')
    let keteranganEl = document.getElementById('keterangan')

    if (getEmailEl.value == '' || keteranganEl.value == '' || formFileEl.value == '') {
        alert('Data tidak boleh kosong!')
    } else {
        let formData = new FormData()
        formData.append('email', getEmailEl.value)
        formData.append('keterangan', keteranganEl.value)
        alert('Terimakasih, data Kamu sudah terkirim!')
    }
    let emailFullEl = document.getElementById('emailFull')
    let keteranganFullEl = document.getElementById('keteranganFull')
    
    emailFullEl.innerHTML = getEmailEl.value
    formFullEl.innerHTML = formFile.value
    keteranganFullEl.innerHTML = keteranganEl.value
    
}