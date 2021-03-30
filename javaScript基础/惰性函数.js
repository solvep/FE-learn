/* 
惰性函数， 一个api在不同浏览器调用的结果是不一样的，有时候我们需要用if 判断来实现不同的兼容问题。

*/


var f = function(a) {
  console.log('a', a)
  var e = parseInt(a,10)
  console.log('测试有没有重复！')
  e = e * e 

  f.a = e
  f = function() {
    return e
  }
  return e
}
console.log(f("3")) 
console.log(f("3"))
console.log(f("4"))

// xhr 

function createXHR(){
  var xhr = null;
  try {
      // Firefox, Opera 8.0+, Safari，IE7+
      xhr = new XMLHttpRequest();
  }
  catch (e) {
      // Internet Explorer 
      try {
          xhr = new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch (e) {
          try {
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
          }
          catch (e) {
              xhr = null;
          }
      }
  }
  return xhr;
}

//惰性函数

function createXHR(){
  var xhr=null;
  if(typeof XMLHttpRequest !='undefined'){
      xhr = new XMLHttpRequest();
      createXHR=function(){
          return new XMLHttpRequest();
      }
  }else{
      try {
          xhr = new ActiveXObject("Msxml2.XMLHTTP");
          createXHR=function(){
              return new ActiveXObject("Msxml2.XMLHTTP");
          }
      }
      catch (e) {
       try {
              xhr = new ActiveXObject("Microsoft.XMLHTTP");
              createXHR=function(){
                  return new ActiveXObject("Microsoft.XMLHTTP");
              }
          }
          catch (e) {
              createXHR=function(){
                  return null;
              }
          }
      }
  }
  return xhr;
}

// 重新给createXHR 赋值，第一次之后以后 直接返回 可兼容的xhr


