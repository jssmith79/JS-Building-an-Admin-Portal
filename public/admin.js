
// Your Code Here
async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderBook)
}

function renderBook(book) {
 
    let root = document.getElementById("root")
    let listItem = document.createElement("li")
    let qtyInput = document.createElement("input")
    let saveBtn = document.createElement("button")
    

    listItem.innerHTML = `${book.title}`
    qtyInput.setAttribute('value', `${book.quantity}`)
    saveBtn.textContent = "Save"
    
    saveBtn.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook',{
            method: "PATCH",
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: book.id,
            quantity: qtyInput.value
            })
        })

    })
listItem.append(qtyInput, saveBtn)
root.append(listItem)

}

main()