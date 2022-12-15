firebase.database().ref('todos').on('child_added',function(data){
      var list = document.createElement('li')
    var displayList = document.createTextNode(data.val().value)
    list.appendChild(displayList)
    var getList = document.getElementById('list')
    getList.appendChild(list)
    var dltbtn = document.createElement('button')
    var dltBtnText = document.createTextNode('Delete')
    dltbtn.appendChild(dltBtnText)
    list.appendChild(dltbtn)
    dltbtn.setAttribute('onclick','delete1(this)') 
    dltbtn.setAttribute('id',data.val().key)
    var editBtn = document.createElement('button')
    var editBtnText = document.createTextNode('Edit')
    editBtn.appendChild(editBtnText)
    list.appendChild(editBtn)
    editBtn.setAttribute('onclick','edit(this)')
    editBtn.setAttribute('id',data.val().key)
})


function add(){
    var getInput = document.getElementById('todo-items')
    var a = firebase.database().ref('todos')
    var key = a.push().key
    var obj = {
        value : getInput.value,
        key : key
    }
    a.child(key).set(obj)
  
    getInput.value = ""
}

function edit(e){
    var pr = prompt('enter the updated value',e.parentNode.firstChild.nodeValue)
    var obj = {
        key : e.id,
        value : pr
    }
    firebase.database().ref('todos').child(e.id).set(obj)
    e.parentNode.firstChild.nodeValue= pr
}

// function deleted(){
//     var list = document.getElementById('list')
//     list.innerHTML = ""
// }

function delete1(e){
    firebase.database().ref('todos').child(e.id).remove()
    // console.log(e)
    e.parentNode.remove()
}