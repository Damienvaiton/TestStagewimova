const Per = document.getElementById("Test");
const tabledata = document.getElementById("TAB");
const reset = document.getElementById("reset");

var original = tabledata.innerHTML;

reset.addEventListener("click", (event) => {
	tabledata.innerHTML = original;
});

Per.addEventListener("click", (event) => {
	$.ajax({
		type: "POST",
		url: "./getdata.php",
		datatype: "json",
		success: function (data) {
			tabledata.innerHTML = original;
			

			let datas = JSON.parse(data);

			for (let value of datas) {
				var row = document.createElement("tr");
				var cell1 = document.createElement("td");
				var cell2 = document.createElement("td");
				var cell3 = document.createElement("td");
				var cell4 = document.createElement("td");
				var cell5 = document.createElement("td");
				row.appendChild(cell1);
				row.appendChild(cell2);
				row.appendChild(cell3);
				row.appendChild(cell4);
				row.appendChild(cell5);
				var addcell1 = "{{prenom}}";
				var addcell2 = "{{nom}}";
				var addcell3 = "{{age}} ans";
				var addcell4 = "{{telephone}}";
				var addcell5 = "{{adresse}}";

				var template = Handlebars.compile(addcell1);
				var template2 = Handlebars.compile(addcell2);
				var template3 = Handlebars.compile(addcell3);
				var template4 = Handlebars.compile(addcell4);
				var template5 = Handlebars.compile(addcell5);

				var html = template({
					prenom: value.Prenom,
				});
				var html2 = template2({
					nom: value.Nom,
				});
				var html3 = template3({
					age: value.Age,
				});
				var html4 = template4({
					telephone: value.Telephone,
				});

				var html5 = template5({
					adresse: value.Adresse,
				});

				cell1.innerHTML += html;
				cell2.innerHTML += html2;
				cell3.innerHTML += html3;
				cell4.innerHTML += html4;
				cell5.innerHTML += html5;

				tabledata.appendChild(row);
			}
		},
	});
});
