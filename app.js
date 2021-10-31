window.onload=function(){
	let search = document.getElementsByClassName('btn')[0];
	var url = "http://localhost:8888/info2180-lab4/superheroes.php?query=";

	search.addEventListener("click", function(e){
		e.preventDefault();
        var req = new XMLHttpRequest();
		var s = document.getElementById("search").value;

		req.onreadystatechange = function(){
			if (req.readyState == XMLHttpRequest.DONE) {
				if (req.status == 200){	
					var response = req.responseText;
                    var result = document.getElementById('results')
					result.innerHTML= response;
				}else{
					alert("There was a problem with the request.");
				}
			}
		}
		console.log(s);
		req.open('GET',url+s, true);
		req.send();
	});
}