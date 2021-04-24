function reverse(str){
  var str1 = ''
  for(var i=0; i<str.length; i++){
    str1 += str[str.length -1 - i]
  }
  console.log(str1)
}

reverse('hello');
