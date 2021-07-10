const grid = document.querySelector('.card')
const button = document.querySelector('.card__button')

button.addEventListener('click',() => {
    
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
        const tooltipText = document.querySelector('#tooltiptext')
        const toolTip = document.querySelector('.card__button')

        if( !tooltipText ) {
            
            let toolTipText = document.createElement('span')
            toolTipText.setAttribute('id','tooltiptext')
            toolTipText.style.position = 'absolute'
            toolTipText.style.visibility = 'visible'
            toolTipText.style.zIndex = 1
            toolTipText.style.display = 'flex'
            toolTipText.style.justifyContent = 'center'
            toolTipText.style.alignItems = 'center'
            toolTipText.style.textTransform = 'uppercase'
            toolTipText.style.color = 'hsl(212, 23%, 69%)'
            toolTipText.style.background = 'hsl(217, 19%, 35%)'
            toolTipText.style.marginBottom = '100px'
            toolTipText.style.width = '200px'
            toolTipText.style.height = '50px'
            toolTipText.style.borderRadius = '10px'
            toolTipText.innerText = 'share'
            const facebookImg = document.createElement('img')
            facebookImg.src = './images/icon-facebook.svg'
            facebookImg.style.marginLeft='5%'
            toolTipText.appendChild(facebookImg)
            const twitterImg = document.createElement('img')
            twitterImg.src = './images/icon-twitter.svg'
            twitterImg.style.marginLeft='5%'
            toolTipText.appendChild(twitterImg)
            const pinterestImg = document.createElement('img')
            pinterestImg.src = './images/icon-pinterest.svg'
            pinterestImg.style.marginLeft='5%'
            toolTipText.appendChild(pinterestImg)

            toolTip.appendChild(toolTipText)

        } else if( tooltipText.style.visibility == 'hidden' ) {
            
            tooltipText.style.visibility = 'visible'
        }
        else if ( tooltipText.style.visibility == 'visible') {
            
            tooltipText.style.visibility = 'hidden'
        }
    }
})