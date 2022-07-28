"use strict";
const https = require("https");
const querystring = require("querystring");
const httpcodes = require("./codes.json");
const default_data = require("./default.json");

/*######################################################################################
#
# Por que fiz a linguagem em inglês? 
# R: Pois eu gosto deste idioma e quis seguir o padrão como quase todos os outros devs.
#
# Esse código pode ser copiado para criar algo diferente, novo, superior ou etc?
# R: É claro! Mas você >PRECISA< manter o copyright, leia mais da licença abaixo.
#
# Por que este código parece igual ao seu outro da NASA?
# R: Por que eu quis fazer algo confortável para quem veio de outros projetos meus.
# R: Ou seja, quis manter o mesmo formato para facilitar, e vou continuar fazendo isso.
#
########################################################################################
#
#	MIT License
#
#	Copyright (c) 2022 KillovSky - Lucas R.
#
#	Permission is hereby granted, free of charge, to any person obtaining a copy
#	of this software and associated documentation files (the "Software"), to deal
#	in the Software without restriction, including without limitation the rights
#	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
#	copies of the Software, and to permit persons to whom the Software is
#	furnished to do so, subject to the following conditions:
#
#	The above copyright notice and this permission notice shall be included in all
#	copies or substantial portions of the Software.
#
#	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
#	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
#	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
#	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
#	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
#	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
#	SOFTWARE.
#
######################################################################################*/

/* Cria a exports para atuar como função */
exports.gerar = (
	quantity = "1",
	commas = "",
	type = ""
) => {

	/* Faz uma promise com a função para funcionar perfeitamente */
	return new Promise(resolve => {

		/* Define a pontuação se não inserida */
		if (commas == "" || commas == null || commas == false) {
			commas = "N";
		} else if (commas == true) {
			commas = "S";
		} else {
			commas = "N";
		}

		/* Escolhe o tipo de informação a gerar [type em letra minuscula] */
		type = type == null ? "" : type.toLowerCase();
		if (type == "" || type == null || type == "pessoa") {
			type = "gerar_pessoa";
		} else if (type == "rg") {
			type = "gerar_rg";
		} else if (type == "cpf") {
			type = "gerar_cpf";
		} else if (type == "cnpj") {
			type = "gerar_cnpj";
		} else {
			type = "gerar_pessoa";
		}

		/* Limita a quantidade de dados a gerar, para evitar sobrecarga na 4DEVS */
		/* Você pode tirar o limite disso removendo o if, mas VAI sofrer problemas GRAVES... */
		if (quantity > 10) {
			quantity = "10";
		}

		/* Cria a object de return em casos de erros, não afetando o usuário mas permitindo que ele saiba quando der erro */
		let response = default_data[Math.floor(Math.random() * default_data.length)];

		/* Body de acesso na API */
		let body = querystring.stringify({
			acao: type,
			pontuacao: commas,
			txt_qtde: quantity
		});

		/* Opções de acesso na API */
		let options = {
			hostname: "www.4devs.com.br",
			path: "/ferramentas_online.php",
			method: "POST",
			headers: {
				"authority": "www.4devs.com.br",
				"accept": "*/*",
				"accept-language": "en-US,en;q=0.9,pt;q=0.8",
				"Content-Type": "application/x-www-form-urlencoded",
				"Content-Length": body.length
			}
		};

		/* Try - Catch para caso dê um erro pior */
		try {

			/* Let para obter a chunk da requisição */
			let data = "";

			/* Faz a requisição na API */
			const req = https.request(options, function (res) {

				/* Insere as informações na JSON */
				let Today_Day = new Date();
				response.date = Today_Day.toLocaleString();
				response.code = res.statusCode;
				response.explain = httpcodes[res.statusCode];
				response.headers = res.headers;

				/* Recebe a chunk da API */
				res.on("data", function (chunk) {
					data += chunk;
				});

				/* Em caso de falhas */
				req.on("error", function (err) {
					response.error = true;
					response.code = err.code;
					response.error_msg = err.message;
					return resolve(response);
				});

				/* Finaliza pois o resultado foi recebido */
				res.on("end", function () {

					/* Cria uma let temporariamente para filtrar o resultado */
					let Four_Devs = false;

					/* Outro Try - Catch para checar se tudo correu bem e a resposta esta aceitável */
					try {
						Four_Devs = JSON.parse(data);
					} catch (error) {
						Four_Devs = false;
						response.error_msg = error.message;
					}

					/* Verifica se obteve erro, se sim, não edita o JSON padrão, mas insere o erro, garantindo a funcionalidade */
					if (response.code !== 200 || Four_Devs == false) {

						/* Refaz os parâmetros acima caso algum erro aconteça */
						if (response.error_msg == "Unexpected end of JSON input") {
							response.code = response.code !== 200 ? response.code : 400;
							response.explain = httpcodes[response.code];
							response.headers = res.headers;
						}
						response.error = true;
						response.dev_msg = "Maybe you got blocked by the server, make sure you're not using proxy or something and try on another machine.";

						/* Se não tiver erros, verifica se alguma informação faltou */
					} else {

						/* Define as keys padrões do JSON, para caso uma delas não exista */
						let keys_JSON = [
							"nome",
							"idade",
							"cpf",
							"rg",
							"data_nasc",
							"sexo",
							"signo",
							"mae",
							"pai",
							"email",
							"senha",
							"cep",
							"endereco",
							"numero",
							"bairro",
							"cidade",
							"estado",
							"telefone_fixo",
							"celular",
							"altura",
							"peso",
							"tipo_sanguineo",
							"cor"
						];

						/* For para checar todos os dados recebidos */
						for (let i = 0; i < Four_Devs.length; i++) {

							/* For para checar key por key da resposta */
							for (let keyset of keys_JSON) {

								/* Se não tiver a key, insere um valor aleatório do default */
								Four_Devs[i][keyset] = Four_Devs[i][keyset] == null ? default_data[i].dados[0][keyset] : Four_Devs[i][keyset];
								
							}
							
						}

						/* Finaliza o JSON */
						response.error = false;
						response.dados = Four_Devs;
						
					}
					
				});

				/* Finaliza o request e retorna o JSON */
				return resolve(response);
				
			});

			/* Em caso de falhas 2x */
			req.on("error", function (err) {
				response.error = true;
				response.code = err.code;
				response.error_msg = err.message;
				return resolve(response);
			});

			/* Faz a POST body no request e finaliza a requisição */
			req.write(body);
			req.end();

			/* Caso der erro em alguma coisa, não afeta o resultado e cai no catch abaixo */
		} catch (error) {
			response.error = true;
			response.code = error.code;
			response.error_msg = error.message;
			return resolve(response);
		}
		
	});

};