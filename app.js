let selection = document.querySelector("#items");
let quantity = document.querySelector("#quantity");
let addBtn = document.querySelector("#addBtn");
let inputForm = document.querySelector("#inputForm");
let rows = document.querySelector("#rows");
let total = document.querySelector("#total");
let print = document.getElementById("print");

//create option
products.forEach((product) => {
	let newOption = new Option(product.name, product.id);
	selection.append(newOption);
});

inputForm.addEventListener("submit", (e) => {
	e.preventDefault();
	//selected name ===> selection.options[selection.selectedIndex].text;
	let currentProduct = products.find((p) => p.id == selection.value);
	let cost = currentProduct.price * quantity.value;

	let tr = document.createElement("tr");
	tr.classList.add("list");
	tr.innerHTML = `
					<td>
					${currentProduct.name}
					<p class="text-danger mb-0 del-btn" onclick="del(event)">Delete</p>
					</td>
					<td class="text-end">${currentProduct.price}</td>
					<td class="text-end">${quantity.value}</td>
					<td class="text-end cost">${cost}</td>
				`;

	rows.append(tr);
	inputForm.reset();
	calcTotal();
});

let del = (event) => {
	if (confirm("Do you to delete this parmently?")) {
		event.target.parentElement.parentElement.remove();
	}
	calcTotal();
};

const calcTotal = () => {
	let costs = document.querySelectorAll(".cost");
	let costsTotal = [...costs].reduce((pv, cv) => pv + Number(cv.innerText), 0);
	total.innerText = costsTotal;
};

print.addEventListener("click", () => window.print());
