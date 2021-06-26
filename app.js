const countEl = document.getElementById('count');
function updateVisitCount(){
    fetch ('https://api.countapi.xyz/update/4dur/savage/?amount=1')
    .then(res => res.json())
    .then(res => {countEl.innerHTML = res.value;});
}