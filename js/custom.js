// (function() {
// 	'use strict';

// 	var tinyslider = function() {
// 		var el = document.querySelectorAll('.testimonial-slider');

// 		if (el.length > 0) {
// 			var slider = tns({
// 				container: '.testimonial-slider',
// 				items: 1,
// 				axis: "horizontal",
// 				controlsContainer: "#testimonial-nav",
// 				swipeAngle: false,
// 				speed: 700,
// 				nav: true,
// 				controls: true,
// 				autoplay: true,
// 				autoplayHoverPause: true,
// 				autoplayTimeout: 3500,
// 				autoplayButtonOutput: false
// 			});
// 		}
// 	};
// 	tinyslider();

	


// 	var sitePlusMinus = function() {

// 		var value,
//     		quantity = document.getElementsByClassName('quantity-container');

// 		function createBindings(quantityContainer) {
// 	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
// 	      var increase = quantityContainer.getElementsByClassName('increase')[0];
// 	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
// 	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
// 	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
// 	    }

// 	    function init() {
// 	        for (var i = 0; i < quantity.length; i++ ) {
// 						createBindings(quantity[i]);
// 	        }
// 	    };

// 	    function increaseValue(event, quantityAmount) {
// 	        value = parseInt(quantityAmount.value, 10);

// 	        console.log(quantityAmount, quantityAmount.value);

// 	        value = isNaN(value) ? 0 : value;
// 	        value++;
// 			console.log(document.getElementById("price12").value)
// 			alert(document.getElementById("price12").value)
// 			document.getElementById("price12").value += (document.getElementById("price12").value)/(value-1)
// 	        quantityAmount.value = value;


// 	    }

// 	    function decreaseValue(event, quantityAmount) {
// 	        value = parseInt(quantityAmount.value, 10);

// 	        value = isNaN(value) ? 0 : value;
// 	        if (value > 0) value--;

// 	        quantityAmount.value = value;
// 	    }
	    
// 	    init();
		
// 	};
// 	sitePlusMinus();


// })()



// MonMessage = `message ici`;
// NbrMessage = 10
// intervalMes = 1 // En seconde

// bourerDeMessageMonPote(MonMessage, NbrMessage, intervalMes);

// async function bourerDeMessageMonPote(message, nombreDeMessage, interval) {
  
//     for (let i = 0; i < nombreDeMessage ; i++) {
//             // a changer, si ce selecteur ne marche pas
//             const SelecteurDeChampDeTexte = 'P.copyable-text.selectable-text';
//             const ChampDeTexte = document.querySelector(SelecteurDeChampDeTexte);
//             await ecrireLeMessageDansLeChamp(ChampDeTexte, message, interval);
//             // a changer, si ce selecteur ne marche pas
//             await actionDeClique('button.tvf2evcx.oq44ahr5.lb5m6g5c.svlsagor.p2rjqpw5.epia9gcq');
//         }
  
//     function ecrireLeMessageDansLeChamp(el, leMessage, interval) {
//         return new Promise ((res, rej) =>{
//         setTimeout(() => {
//             if (el) {
//                 el.focus();
//                 if (!document.execCommand('insertText', false, leMessage)) {
//                     el.value = leMessage;
//                 }
//                 el.dispatchEvent(new Event('change', {bubbles: true}));
//                 res(true);
//             }else{
//                 rej(new Error('Erreur-Msg: Votre version de whatsapp n\'est pas compatble avec ce programme.\nErreur: Vous devriez modifer le code....'));
//             }
//         }, interval * 1000);
//     })
//     }
  
//     function actionDeClique(SelecteurDeBoutonDeClique) {
//         return new Promise((res, rej) => {
//             if (document.querySelector(SelecteurDeBoutonDeClique)) {
//                 document.querySelector(SelecteurDeBoutonDeClique).click();
//                 console.log('Sent...');
//                 res(true);
//             }else{
//                 rej(new Error('Erreur-Click: Votre version de whatsapp n\'est pas compatble avec ce programme.\nErreur: Vous devriez modifer le code....'));
//             }
//         })
//     }
// }



function send_whatsapp_sms() {
	let phonenumber= "+237620300235";

	let message = "Bonjour "

	url = "https://wa.me/" + phonenumber + "?text="
	+" *Message :* "+message+ "%0a"
	+" *Message :* "+message+ "%0a"
	+"comment puis je faire pour l'avoir s'il vous plait !" + "%0a%0a";
	// +"&source=" + encodeURIComponent("images/product-3.png");

	window.open(url, '_blank').focus();
}
