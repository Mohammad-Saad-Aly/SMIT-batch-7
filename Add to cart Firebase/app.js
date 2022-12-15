// function  showitems(){
//     var img = document.getElementById('img1').src
//     var price = document.getElementById('price').innerHTML
//     var model = document.getElementById('model').innerHTML
//     // console.log(img,price,model)
//     var cart_img = document.getElementById('img2')
//     var cart_price = document.getElementById('cart-price')
//     var cart_model = document.getElementById('cart-model')

//     cart_img.src = img
//     cart_price.innerHTML = price
//     cart_model.innerHTML = model

// }

// console.log(firebase.database)
function sendData(){
    var name1 = document.getElementById('name')
    var roll = document.getElementById('roll')
    // console.log(name,roll)
    var obj = {
        name : name1.value,
        roll : roll.value
    }
    // console.log(obj)

    // var key = Math.random() * 786237894
    // console.log(key)
    firebase.database().ref('student').push(obj)

}

// function getdata(){
//     firebase.database().ref('student').once('value',function(data){
//         console.log(data.val())
//     })
// }

function getdata(){
        firebase.database().ref('student').on('child_added',function(data){
            console.log(data.val())
        })
    }
    
getdata()