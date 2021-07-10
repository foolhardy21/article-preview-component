const grid = document.querySelector('.card')
const button = document.querySelector('.card__button')

button.addEventListener('click',() => {
    console.log(grid.childNodes)
    if(document.body.clientWidth < 700) {
        
        const authorImg = document.querySelector('.card__authorimg')
        const authorName = document.querySelector('.card__authorinfo')
        const shareButton = document.querySelector('.card__button')
        
        if( !authorImg.style.display || authorImg.style.display == 'flex') {

            authorImg.style.display='none'
            authorName.style.display='none'       
            
            let sharePanel = document.createElement('div')
            sharePanel.setAttribute('id','card__sharepanel')
            sharePanel.style.gridRowStart = 7
            sharePanel.style.gridRowEnd = 8
            sharePanel.style.gridColumnStart = 1
            sharePanel.style.gridColumnEnd = 5
            sharePanel.style.background = 'hsl(217, 19%, 35%)'
            sharePanel.style.color = 'hsl(212, 23%, 69%)'
            sharePanel.style.borderBottomLeftRadius = '10px'
            sharePanel.style.display = 'flex'
            sharePanel.style.justifyContent = 'center'
            sharePanel.style.alignItems = 'center'
            sharePanel.innerText = 'share'
            sharePanel.style.textTransform = 'uppercase'
            const facebookImg = document.createElement('img')
            facebookImg.src = './images/icon-facebook.svg'
            facebookImg.style.marginLeft='5%'
            sharePanel.appendChild(facebookImg)
            const twitterImg = document.createElement('img')
            twitterImg.src = './images/icon-twitter.svg'
            twitterImg.style.marginLeft='5%'
            sharePanel.appendChild(twitterImg)
            const pinterestImg = document.createElement('img')
            pinterestImg.src = './images/icon-pinterest.svg'
            pinterestImg.style.marginLeft='5%'
            sharePanel.appendChild(pinterestImg)
            
            
            
            grid.appendChild(sharePanel)

            shareButton.style.background='hsl(217, 19%, 35%)'
            shareButton.style.borderBottomRightRadius = '10px'
        
        } else {
            const sharePanel = document.querySelector('#card__sharepanel')
            grid.removeChild(sharePanel)
            
            shareButton.removeAttribute('style')
            authorImg.style.display = 'flex'
            authorName.style.display = 'block'
        }
    } else {
        console.log('dekstop')
    }
})