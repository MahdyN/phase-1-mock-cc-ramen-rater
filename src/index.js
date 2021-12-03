document.addEventListener("DOMContentLoaded", () => {
    const ramenMenu = document.querySelector('div#ramen-menu')           // store node where we want to add all ramen images in
    const selectedImage = document.querySelector('img.detail-image')
    const selectedName = document.querySelector('h2.name')
    const selectedRestaurant = document.querySelector('h3.restaurant')
    const selectedRating = document.querySelector('span#rating-display')
    const selectedComment = document.querySelector('p#comment-display')

    fetch('http://localhost:3000/ramens')
    .then((response) => response.json())
    .then((ramenData) => {
        ramenData.forEach((ramenItem) => {
            const ramenImage = document.createElement("img")
            ramenImage.setAttribute('src', `${ramenItem.image}`)
            ramenMenu.appendChild(ramenImage)
            ramenImage.addEventListener('click', (e) =>{
                selectedImage.setAttribute("src", e.target.src)
                selectedName.innerText= ramenItem.name
                selectedRestaurant.innerText= ramenItem.restaurant
                selectedRating.innerText = ramenItem.rating
                selectedComment.innerText = ramenItem.comment

            })
        })
        
    
    
    
    })


})
