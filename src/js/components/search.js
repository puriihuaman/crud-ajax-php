const search = (( doc ) => {
	const searchInput = document.getElementById('search-input');
	let allNames = [...doc.querySelectorAll('[data-name]')];

	searchInput.addEventListener('keyup', () => {
		let value = searchInput.value.toLowerCase();

		if ( value == '' ) {
			for (const name of allNames) {
				name.parentElement.style.display = 'grid';
			}
		}
		for (const name of allNames) {
			if ( name.dataset.name.indexOf( value )  == -1 ) name.parentElement.style.display = 'none';
			else name.parentElement.style.display = 'grid';
		}
	});
})( document );