function Calculate(){
     let height = document.getElementById(`height`).value
     let weight = document.getElementById(`weight`).value
     let result = document.getElementById(`result`)
     let count = weight / (height * height)
     count = count.toFixed(2)
     result.innerHTML = `<h4>${count}</h4>`
}
