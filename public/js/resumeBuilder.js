/*
This is empty on purpose! Your code to build the resume will go here.
 */


var resume = []
$.ajax({
  url: "json.json",
  method: "get"
}).done(function(res) {
  resume = res
  let dataReplaser = /%data%/
  
  let htmlAppender = function(ajaxArray) {
    let keys = Object.keys(ajaxArray)
    for( one of keys) {
      let obj = ajaxArray[one]
      eval(ajaxArray[one].display)
      disp()
    }
    $(document).trigger('dom-bind', document)
    document.dispatchEvent(new Event('load'))
  }

  htmlAppender(resume[0])
  $(document).on('dom-bind', function (e, context) {
    htmlAppender(resume[0])
  })
  console.log(2)

}).then(() => {

  $("#mapDiv").append(googleMap)
  initializeMap(resume[0])


}

)
