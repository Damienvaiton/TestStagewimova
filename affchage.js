const Per = document.getElementById("Test");
const reset = document.getElementById("Reset");

Per.addEventListener("click", (event) => {
	$.ajax({
		type: "POST",
		url: "./getdata.php",
		datatype: "json",
		success: function (data) {
			let datas = JSON.parse(data);

			var ts =
				"<table> <tr> <th>Prenom</th> <th>Nom</th> <th>Age</th> <th>Telephone</th> <th>Adresse</th> </tr> <tr> <td>{{prenom}}</td> <td>{{nom}}</td> <td>{{age}}</td> <td>0{{telephone}}</td> <td>{{adresse}}</td> </tr> </table>";

			var template = Handlebars.compile(ts);

			for (let value of datas) {
				var html = template({
					prenom: value.Prenom,
					nom: value.Nom,
					age: value.Age,
					telephone: value.Telephone,
					adresse: value.Adresse,
				});
				
				document.body.innerHTML += html;
			}
		},
	});
});
