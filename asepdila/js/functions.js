const queryParams = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function encodeHTML(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

let showEnvelope = function(){
	Swal.fire({
		title: '<div class="row envelope"><h1><sup style="font-size:3.5rem" title="Asep Maulana Nuriman (Maunklana)" data-bs-toggle="tooltip" data-bs-placement="top">Asep</sup><small>&</small><sub style="font-size:3.5rem" title="Nabila Dea Santika (Dila)" data-bs-toggle="tooltip" data-bs-placement="top">Nabila</sub></h1></div>',
		html: receiverhtml,
		footer: '<small class="envelopefooter">Build with <i class="bi bi-suit-heart-fill" style="font-size:0.5rem;padding:0 0.1rem;"></i> in Bandung by Asep under kukulutus of Nabila</small>',
		confirmButtonText: '<i class="bi bi-envelope-paper-fill"></i>&nbsp;&nbsp;Buka Undangan',
		confirmButtonColor: '#991188', //Warna kesukaan Nabila
		width: '100%',
		heightAuto: false,
		grow: 'fullscreen',
		background: 'transparent',
		backdrop: `
		linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("img/bg-landing.jpg")
		no-repeat center/auto 100%
		`,
		showClass: {
			popup: '',// disable icon animation
		},
		hideClass: {
			popup: 'animate__animated animate__slideOutUp',
			backdrop: 'animate__animated animate__slideOutUp',
		},
		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false,
		imageUrl: 'img/asepdila.png',
		imageWidth: 300,
		imageHeight: 300,
		imageAlt: 'Asep Maulana Nuriman (Maunklana) & Nabila Dea Santika (Dila)'
	}).then((result) => {
		showInvitation();		
		Swal.fire({
			title: '',
			html: '<h1><i class="bi bi-volume-up-fill"></i></h1>Nyalakan backsound?',
			confirmButtonColor: '#991188', //Warna kesukaan Nabila
			showCancelButton: true,
			confirmButtonText: 'Ya, nyalakan',
			cancelButtonText: 'Tidak',
			reverseButtons: true,
		}).then((result) => {					
			if (result.isConfirmed) {
				players.audio.play();
			}
		})
	})
}
let showInvitation = function(){
	$('.xhidden').each(function() {
		$(this).addClass('animate__animated animate__slideInUp');
		$(this).css('visibility', 'visible');
	});
}