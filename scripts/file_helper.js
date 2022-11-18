function saveTextAsFile()
{
	if (globalHLSL == "") {
		logToConsole("You can only save the HLSL file after rendering has started.");
		return;
	}
	var textToWrite = globalHLSL;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	// var fileNameToSaveAs = document.getElementById("fileToSave").value;

	var downloadLink = document.createElement("a");
	downloadLink.download = "pixel.hlsl";
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function loadFileAsText()
{
	var input = document.createElement('input');
	input.type = 'file';
	input.accept = ".frag, .glsl, .txt"

	input.onchange = e => { 
	   var file = e.target.files[0]; 
	   var reader = new FileReader();
	   reader.readAsText(file,'UTF-8');
	   reader.onload = readerEvent => {
	      var content = readerEvent.target.result;
	      document.getElementById("shader_source").value = content;
	   }
	}
	input.click();
}

function logToConsole(msg) {
	document.getElementById("console").value = msg;
}

function loadExpectedImage(shaderFilePath) {
	var input = document.createElement('input');
	input.type = 'file';
	input.accept = ".png";

	input.onchange = e => { 
	   var file = e.target.files[0]; 
	   var reader = new FileReader();
	   reader.onload = readerEvent => {
	      var content = readerEvent.target.result;
	      document.getElementById("expected-image").src = content;
	   }
	   reader.readAsDataURL(file);
	}
	input.click();
}
