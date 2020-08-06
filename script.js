$(function () {
    galerySpacing()
    greenUpper()
})
// jq
galerySpacing=()=>{
    setTimeout(()=> {
        const galery = $('#galery')
        const galeryWidth = +galery.find('.galery_box').width()
        const images = galery.find('img')
        const half = galeryWidth / 2,
            fourth = galeryWidth / 4
        images.each((key, item) => {
            if (+$(item).width()+5 > half) {
                $(item).width(half)
            } else if (+$(item).width() < half && +$(item).width() > fourth) {
                $(item).width(fourth)
            }
        })
    },0)
}
//js vaniva
greenUpper=()=>{
    const endless = document.querySelector('#endless')
    const textElement = endless.getElementsByTagName('p')[0]
    let text = textElement.innerText
    text = text.replace('green','<span class="text-uppercase">green</span>')
    textElement.innerHTML = text
}
