function calculate(){
     let height = document.getElementById(`height`).value
     let weight = document.getElementById(`weight`).value
     let result = document.getElementById(`result`)
     let count = weight / (height * height)
     result.style.marginLeft = `65%`
     result.style.color = `#CBD0F7;`
     count = count.toFixed(2)
     result.innerHTML = `<h4>IMC:${count}</h4>`
}
