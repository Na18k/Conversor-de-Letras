	
	// Obter elementos do HTML
	var entrada = document.getElementById("entradaTexto");
	var idiomaUsado = document.getElementById("idioma");
	var botaoTraduzir = document.getElementById("traduzir");
	var textoTraduzido = document.getElementById("textoTraduzido");

	var info = document.getElementById("informacoes");
	// ======================

	var idiomas = [
		"kainan",
		"macon",
		"rune",
		"galactic",
		"templar",
	]

	function trocaFontFunc(entradaEIgual) {
		// Verifica se a entrada é igual ao idioma chamado
		if(idiomaUsado.value == entradaEIgual) {

			// Remove a class anterior;
			textoTraduzido.classList.remove("textoTraduzidoDefault");
			// Adiciona a classe que representa o idioma;
			textoTraduzido.classList.add(entradaEIgual);
		}
	}

	function trocaFont() {
		for(let i = 0; i < idiomas.length; i++) {
			trocaFontFunc(idiomas[i]);
		}
	}
	function resetFont() {
		for(let i = 0; i < idiomas.length; i++) {
			textoTraduzido.classList.remove(idiomas[i]);
		}
		
		textoTraduzido.classList.add("textoTraduzidoDefault");
	}
	botaoTraduzir.onclick = function font() {
		resetFont();
		trocaFont();

		if (idiomaUsado.value === "kainan") {
			textoTraduzido.textContent = ` ${aplicaRegras()} `;
		} else {
			textoTraduzido.textContent = ` ${entrada.value} `;
		}
		
	};

	// O acento grave não pode ser colocado em um tipo de string especifico.
	var acentoGrave = "`";

	function remov() {
		// Aparece a informaçoes para que possa see usado.
		info.classList.remove("informacoesEscondido");
	}

	function infoMsg() {
		// Reseta a mensagem  anterior se ouver
		info.textContent = " ";
		info.innerHTML = " ";

		if (idioma.value == "kainan") {
			remov();
			info.innerHTML = `
				<h3>Regras de "Letras e Números de Kainan"</h3>
				<p class="subtitulo">Como esse idioma possui caracteres adicionais, que representam estados diferentes na gráfia, foi necessário a substituição de caracteres por outros, para que esteja em si completo o alfabeto.</p>
				<p class="legenda">Legenda: Se possuir "<b class="jaAplicadaComJS">0=0</b>" representa que essa regra já é adicionada automaticamente; já se possuir "<b class="naoAplicadaComJS">0=0</b>" então a regra deve ser posta pelo próprio usuário!</p>
				<div class="regras">
					<h4>Regras:</h4>
					<p><b class="jaAplicadaComJS">0=0</b> _ : O simbolo que compreende Underline, representa a caractere "<b class="kainan">_</b>", que por regra é colocado após, quando uma letra se repete em uma palavra.</p>
					<p><b class="naoAplicadaComJS">0=0</b> , : O simbolo que compreende Virgula, representa a caractere "<b class="kainan">,</b>", que por regra é colocado quando se coloca após, um pausa em uma frase.</p>
					<p><b class="jaAplicadaComJS">0=0</b> ^ : O simbolo que compreende Acento circunflexo, representa a caractere "<b class="kainan">^</b>", que por regra é colocado quando há a junção de NH, CH, LH, substituindo somente a letra "H" no caso.</p>
					<p><b class="jaAplicadaComJS">0=0</b> ~ : O simbolo que compreende Acento Til, representa a caractere "<b class="kainan">~</b>", que por regra é colocado quando uma letra está totalmente sozinha.</p>
					<p><b class="naoAplicadaComJS">0=0</b> ${acentoGrave} : O simbolo que compreende Acento Grave, representa a caractere "<b class="kainan">${acentoGrave}</b>", que por regra é colocado após, quando uma letra é muda.</p>

					<p class="proibido">Por favor tente não utilizar letras acentuadas ou modificadas, por mais que que elas são transformadas automaticamente para as letras base pelo sistema de tradução, tente evitar caracteres exóticos!</p>
				</div>
			`
		} else 
			if(idioma.value == "rune") {
				remov();
				info.textContent = "Esse idioma não está totalmente oficializado, e pode estar incorreto! [Não se aceita números]" 
		} else 
			if(idioma.value == "templar") {
				remov();
				info.innerHTML = `
				<h3>Regras de "Templars Cipher"</h3>
				<p class="subtitulo">Cifra de substituição simples. veja mais em: <a href="https://www.dafont.com/pt/templarscipherplus.font?text=Ol%E1">Templários Cipher Plus</a></p>
				<div class="alinhaCentro">
					<img src="img/Templarcipher.png" class="imgInfo" alt="Cifra Templária">
				</div>
				
				`
		} else
			if(idioma.value == "galactic") {
				remov();
				info.textContent = "Esse idioma é usado na mesa de encantamento do Minecraft!" 
		} else
			if (info.classList.contains("informacoesEscondido") == false) {
				// Esconde se não for usado.
				info.classList.add("informacoesEscondido");
		}
	}

	// Ativar Depois
	setInterval(infoMsg, 1000);


	// ==============================================================================================================
	//																												|
	//																												|
	//                                          Letras e Números de Kainan 											|
	//																												|
	//																												|
	// ==============================================================================================================

	// var palavra = "Olá tudo bem? Isso é um teste para achar regras e achar CH, LH, NH!";
	// var separadorDePalavra = palavra.split(" ");
	
	// --------------------------------------------------------
	// Dados de configuração [Por favor não modificar!!!!!]
	// --------------------------------------------------------

	var letrasDefaut = [
		"a", "A",
		"b", "B",
		"c", "C",
		"ç", "Ç",
		"d", "D",
		"e", "E",
		"f", "F",
		"g", "G",
		"h", "H",
		"i", "I",
		"j", "J",
		"k", "K",
		"l", "L",
		"m", "M",
		"n", "N",
		"o", "O",
		"p", "P",
		"q", "Q",
		"r", "R",
		"s", "S",
		"t", "T",
		"u", "U",
		"v", "V",
		"w", "W",
		"x", "X",
		"y", "Y",
		"z", "Z"
	]
	var regraDoH = ["ch", "lh", "nh", "CH", "LH", "NH"];
	var regraDoHAplicada = ["c^", "l^", "n^", "C^", "L^", "N^"];

		// --------------------------------------------------------------------------------------------------------------
		//																												|
		// 												FUNÇÕES AUXILIARES												|
		//																												|
		// --------------------------------------------------------------------------------------------------------------

	 	// Créditos há
	 	// https://pt.stackoverflow.com/questions/237762/remover-acentos-javascript
	 	//
	 	// [Houve modificações para o projeto]
	 	//
			function retiraAcentos(str) {

			    com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";

				sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";

			    novastr="";

			    for(i = 0; i < str.length; i++) {

			        troca = false;

			        for (a = 0; a < com_acento.length; a++) {

			            if(str.substr(i,1) == com_acento.substr(a, 1)) {

			                novastr += sem_acento.substr(a, 1);
			                troca = true;
			                break;
			            }
			        }

			        if (troca==false) {
			            novastr+=str.substr(i,1);
			        }
			    }

			    return novastr;
			}

		// --------------------------------------------------------------------------------------------------------------
		//																												|
		// 											FIM FUNÇÕES AUXILIARES												|
		//																												|
		// --------------------------------------------------------------------------------------------------------------


	function aplicaRegras() {

		// ===================================================================================================================
		// Regras:
		//
		// Com a falta de caracteres, foi buscado a substituição de algus ja existentes como se vê abaixo
		//
		//	_ colocado quando há repetição de letra; 
		//
		//	, colocado quando indica pausa na frase ou palavra; [Adicionado já com virgula, feita pelo próprio usuário];
		//
		//	^ é colocado quando há a junção de NH, CH, LH, substituindo somente a letra "H" no caso. {Feito}
		//	
		//	~ é colocado quando uma letra está totalmente sozinha. {Feito};
		//
		// ===================================================================================================================

		var palavra = `${entrada.value}`;
		var separadorDePalavra = palavra.split(" ");

		// Passa palavra por palavra do array "separadorDePalavras".
		for(let cont = 0; cont < separadorDePalavra.length; cont++) {

			// Previnir que o usuário se pr acaso colocar acentação nas letra a mesma seja tocada para uma letra sem a acentuação.
			separadorDePalavra[cont] = retiraAcentos(separadorDePalavra[cont]);


			// Se a letra estiver soziha então ele verificará, se ela é abta para receber o sinal gramátical para isso.
			if(separadorDePalavra[cont].length == 1) {
				// Se estiver sozinha vai verificar se ela está presente em letrasDefault, para saber se está abta ou não a receber, se estiver no array letrasDefault, entã será adicionado
				for(let cont2 = 0; cont2 <letrasDefaut.length; cont2++){

					if (separadorDePalavra[cont] === letrasDefaut[cont2]) {
						// Aplica a regra de letra sozinha.
						separadorDePalavra[cont] = separadorDePalavra[cont] + "~";
					}
				}
			}

			// Aplica a regra dos CH, NH, LH
			for(let cont3 = 0; cont3 < separadorDePalavra[cont].length; cont3++) {

				for(let i2 = 0; i2 < regraDoH.length; i2++) {

					if(separadorDePalavra[cont].substr(cont3, cont3 + 2) === regraDoH[i2]) {

						separadorDePalavra[cont] = separadorDePalavra[cont].replace(regraDoH[i2], regraDoHAplicada[i2]);
					}
				}
				
			}
			
			// Aplica a regra de repetição de letra _
			var str = separadorDePalavra[cont];

			let armazena = [];
				
				for(let i3 = 0; i3 < str.length; i3++) {

					let tem = false;

					for(let i4 = 0; i4 < armazena.length; i4++) {

						// Verifica se o caractere já existe.
						if(str.substring(i3, i3 + 1).toUpperCase() == armazena[i4].toUpperCase()) {
							// Adiciona sem a distinção de maiuscula ou não.
							tem = true;
							break;

						}
					}

					if (tem == false) {

						// Adiciona o caractere sem a regra
						armazena.push(str.substring(i3, i3 + 1));

					} else if(tem == true) {

						// Insere a letra junto como o caractere de repetição
						armazena.push(str.substring(i3, i3 + 1) + "_");
					}
				}

				str = "";

				for(let i4 = 0; i4 < armazena.length; i4++) {

					str += armazena[i4];
				}
				separadorDePalavra[cont] = str;
			
		}

		var saidaRegras = "";
		// Depois de ter feito a tratamento das regras, ele ira junta-las novamente, e retorna-la com as regras aplicadas.
		for(let palavras = 0; palavras < separadorDePalavra.length; palavras++) {
			
			saidaRegras += " " + separadorDePalavra[palavras] + " ";
		}
		return saidaRegras;
	}

		function regraDaLetraRepetida(str) {

				let armazena = [];
				
				for(let i3 = 0; i3 < str.length; i3++) {

					let tem = false;

					for(let i4 = 0; i4 < armazena.length; i4++) {

						// Verifica se o caractere já existe.
						if(str.substring(i3, i3 + 1) == armazena[i4]) {

							tem = true;
							break;
						}
					}

					if (tem == false) {

						// Adiciona o caractere sem a regra
						armazena.push(str.substring(i3, i3 + 1));
						console.log("Adicionado: " + str.substring(i3, i3 + 1));

					} else if(tem == true) {

						// Insere a letra junto como o caractere de repetição
						armazena.push(str.substring(i3, i3 + 1) + "_");
					}
				}

				return armazena;

		}