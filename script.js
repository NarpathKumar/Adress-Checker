console.clear();
var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
var tbody = $('tbody');
var dataRow = $('.data-row');
var prevRow;
var latestArray = [];
var newArr = []

function createTable(c1,c2,c3,c4,c5){
    var tr = $('<tr>').addClass('data-row');
    var td1 = $('<td>').addClass('column1').text(c1);
    var td2 = $('<td>').addClass('column2').text(c2);
    var td3 = $('<td>').addClass('column3').text(c3);
    var td4 = $('<td>').addClass('column4').text(c4);
    var td5 = $('<td>').addClass('column5').text(c5);
    tr.append(td1,td2,td3,td4,td5)
    tr.click(function(){
    var id = this.children[0].innerHTML;
        if(prevRow === undefined) {
            this.classList.add("active")
            for(var i=0; i<latestArray.length; i++){
               if(latestArray[i].id == id){
                    $('#top-name').text(latestArray[i].firstName + " " + latestArray[i].lastName)
                    $('#desc-of').val(latestArray[i].description);
                    $('#add').text(latestArray[i].address.streetAddress);
                    $('#city').text(latestArray[i].address.city);
                    $('#state').text(latestArray[i].address.state);
                    $('#zip').text(latestArray[i].address.zip);
                }
            }
            prevRow = this;
        }
        else if(prevRow != this){
            this.classList.add("active");
            prevRow.classList.remove("active");
            for(var i=0; i<latestArray.length; i++){
                if(latestArray[i].id == id){
                    $('#top-name').text(latestArray[i].firstName + " " + latestArray[i].lastName)
                    $('#desc-of').val(latestArray[i].description);
                    $('#add').text(latestArray[i].address.streetAddress);
                    $('#city').text(latestArray[i].address.city);
                    $('#state').text(latestArray[i].address.state);
                    $('#zip').text(latestArray[i].address.zip);
                 }
             }
            prevRow = this;
        }
        else if(prevRow === this) alert("Same Element")
    })

    return tr;
}

$.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",function(e){
    for(var i=0; i<e.length; i++) {
        latestArray.push(e[i]);
    }
    for(var i=0; i<e.length; i++){
            tbody.append(createTable(e[i].id, e[i].firstName, e[i].lastName, e[i].email, e[i].phone));
        }
})

// $('#search-box').on({
//     'input': function(e){
        
//         var inp = e.target.value.toLowerCase();
//         if(inp!=null || inp!=""){
//             for(var i=0; i<latestArray.length; i++){
//               var word = latestArray[i].firstName
//               for(var j=0; j<word.length; j++){
//                   console.log(word[j])
//                 if(word.substr(j,inp.length) == inp){
//                   newArr.push(latestArray[i].id);
//                   console.log(newArr)
//                   break;
//                 }
//               }
//             }
//         }
    
//     }
// })

