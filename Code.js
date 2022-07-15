var speechRecognition =window.webkitSpeechRecognition
var recognition = new speechRecognition()
var textbox = $("#textbox")
var instructions = $("#instructions")
var content = ''
var lang = document.getElementById("lang-select")

$("#start-btn").click(function (event){

    recognition.lang = lang.value

    if (content.length){
        content += ''
    }
    recognition.start()
})

recognition.onstart = function(){
    instructions.text("Program Is Running")
}

recognition.onspeechend = function(){
    instructions.text("Press The Start Button To Run The Program Again")
}

recognition.onresult = function(event){
    var current = event.resultIndex
    var transcript = event.results[current][0].transcript
    content = transcript
    textbox.val(content)
}

recognition.onerror = function(){
    instructions.text("ERROR")
}

textbox.on('input', function(){
    content = $(this).val()
})