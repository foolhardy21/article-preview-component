const grid = document.querySelector('.card')
const button = document.querySelector('.card__button')


button.addEventListener('click',() => {
    
    if(document.body.clientWidth < 700) {
        
        const authorImg = document.querySelector('.card__authorimg')
        const authorName = document.querySelector('.card__authorinfo')
        const shareButton = document.querySelector('.card__button')
        
        if( ifAuthorVisible(authorImg) ) {

            toggleDisplay(authorImg,'none')
            toggleDisplay(authorName,'none')       
            
            let sharePanel = createElement('div')
            sharePanel.setAttribute('id','card__sharepanel')
            
            styleMobileSharePanel(sharePanel)
            
            grid.appendChild(sharePanel)

            styleMobileShareButton(shareButton)
                    
        } else {
            const sharePanel = document.querySelector('#card__sharepanel')
            grid.removeChild(sharePanel)
            
            shareButton.removeAttribute('style')
            toggleDisplay(authorImg, 'flex')
            toggleDisplay(authorName, 'block')
        }
    } else {
        const tooltipText = document.querySelector('#tooltiptext')
        const toolTip = document.querySelector('.card__button')

        if( !tooltipText ) {
            
            let toolTipText = createElement('span')
            toolTipText.setAttribute('id','tooltiptext')
            
            styleDesktopSharePanel(toolTipText)
            
            toolTip.appendChild(toolTipText)

        } else if( tooltipText.style.visibility == 'hidden' ) {
            
            tooltipText.style.visibility = 'visible'
        }
        else if ( tooltipText.style.visibility == 'visible') {
            
            tooltipText.style.visibility = 'hidden'
        }
    }
})

function toggleDisplay( element, value) {
    element.style.display = value
}

function styleMobileSharePanel(element) {
    
    buildMobileSharePanelGrid(element, 7, 8, 1, 5)
    
    element.style.borderBottomLeftRadius = '10px'
    
    styleSharePanel( element )
    
    appendImages(element)
    
}
function buildMobileSharePanelGrid(element, rowStart, rowEnd, colStart, colEnd) {
    element.style.gridRowStart = rowStart
    element.style.gridRowEnd = rowEnd
    element.style.gridColumnStart = colStart
    element.style.gridColumnEnd = colEnd
}
function styleSharePanel(element, background = 'hsl(217, 19%, 35%)', color = 'hsl(212, 23%, 69%)',
display = 'flex', justify = 'center', align = 'center', text = 'share', transform = 'uppercase') {
    
    element.style.background = background
    element.style.color = color            
    element.style.display = display 
    element.style.justifyContent = justify 
    element.style.alignItems = align
    element.innerText = text
    element.style.textTransform = transform 
    
}
function appendImages( element ) {
    const facebookImg = createElement('img')
    getImage(facebookImg, './images/icon-facebook.svg', '5%', element)
    
    const twitterImg = createElement('img')
    getImage(twitterImg, './images/icon-twitter.svg', '5%', element)
    
    const pinterestImg = createElement('img')
    getImage(pinterestImg, './images/icon-pinterest.svg', '5%', element)
    
    
}
function createElement(type) {
    return document.createElement(type)
}
function getImage(imgContainer, path, leftMargin, element) {
    imgContainer.src = path
    imgContainer.style.marginLeft=leftMargin
    element.appendChild(imgContainer)
}

function styleMobileShareButton(button) {
    button.style.background='hsl(217, 19%, 35%)'
    button.style.borderBottomRightRadius = '10px'
    
}

function ifAuthorVisible(author) {
    return ( !author.style.display 
                || author.style.display == 'flex' ) ? true : false
}

function styleDesktopSharePanel(element) {

            styleSharePanel(element)
            element.style.position = 'absolute'
            element.style.visibility = 'visible'
            element.style.marginBottom = '100px'
            element.style.width = '200px'
            element.style.height = '50px'
            element.style.borderRadius = '10px'
            
            appendImages( element )

}
