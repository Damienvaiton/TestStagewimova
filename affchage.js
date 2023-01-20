const Per = document.getElementById("Test");

Per.addEventListener("click", (event) => {
	$.ajax({
		type: "POST",
		url: "./getdata.php",
		datatype: "json",
		success: function (data) {
			let datas = JSON.parse(data);

			for (let value of datas) {
				

				var liste =
					"<p>Prenom: {{prenom}}  Nom: {{nom}}  Âge: {{age}}  Numero de Téléphone 0{{telephone}}  Adresse: 	{{adresse}} </p>";

				var template = Handlebars.compile(liste);

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
