const icon360 = document.querySelector('.icon_360')
const exitIcon = document.querySelector('.exit_icon')
const product = document.querySelector('#product_img')

icon360.onclick = () => {
  product.src = 'externos/dinamic-sofa.gif' 
  exitIcon.style.display = 'block'
  icon360.style.display = 'none'
}

exitIcon.onclick = () => {
  product.src = 'externos/static-sofa.png' 
  icon360.style.display = 'block'
  exitIcon.style.display = 'none'
}