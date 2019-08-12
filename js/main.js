(function(){
	setInterval(alert('Site em desenvolvimento'),3000);

	let products = [
		{
			status:2,
			marca:'Adidas',
			name:'Futistril0933',
			src:'img07.jpg',
			valor: 12098
		},
		{
			status:1,
			marca:'Fila',
			name:'Constroso300',
			src:'img02.jpg',
			valor: 598
		},
		{
			status:2,
			marca:'Rider',
			name:'Xexena002',
			src:'img10.jpg',
			valor: 15000
		},
		{
			status:1,
			marca:"Puma",
			name:'Colapse3882',
			src:'img04.jpg',
			valor: 20
		},
		{
			status:1,
			marca:'Nike',
			name:'Leproso4432',
			src:'img05.jpg',
			valor: 120.43
		},
		{
			status:2,
			marca:'Olimpicos',
			name:'Cobal3321',
			src:'img06.jpg',
			valor:130
		}
	];

	const $ = (e) => {
		return document.querySelector(e);
	}

	console.log(products);
	let list = products.map(function(elem){
		const soma = () => {
			if (elem.status == 2) {
				return "<span class='status'>Esgotado</span>";
			}else{
				return "<span class='status'></span>";
			}
		}

		const block = () => {
			if (elem.status == 2) {
				return "<button class='bloqueio' disabled='disabled'>Comprar</button>";
			}else{
				return "<button class='button'>Comprar</button>";
			}
		}

		document.getElementById("conteudo").innerHTML +=
		`
		<div class="container">
			<div class="content">
				${soma()}
				<div class="name">
					<h1>${elem.marca}</h1>
					<span>${elem.name}</span>
				</div>
				<div class="image">
					<img src="img/${elem.src}">
				</div>
				<div class="information">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					<div class="money">
						<span>
							${elem.valor.toLocaleString('pt-br',
								{style:'currency',
								currency:'BRL'}
							)}
						</span>
						${block()}
					</div>
				</div>
			</div>
		</div>
		`;
	})

})();