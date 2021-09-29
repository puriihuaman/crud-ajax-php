
const readUser = (( doc ) => {

	const contentUsers = doc.getElementById('content--users');

	return readAllUser = ( ) => {
		const path = 'php/components/read-all.php';
	
		fetch( path )
			.then(( response ) => response.ok ? Promise.resolve( response ): Promise.reject( new Error('Error al cargar!') ) )
			.then(( response ) => response.json())
			.then(( data ) => {
				console.log( data );
			})
			.catch(( error ) => console.log( `Error: ${error.message}`))
	}

	// .content__user
	// 							input(type="checkbox", name="" id='id-1' class='content__checkbox')
	// 							p(data-name='pedro' class='content__text') Pedro
	// 							p(class='content__text') Purihuaman
	// 							p(class='content__text content__text--email') purihuamanpurihuamanpedro@gmail.com
	// 							a(href="#" class="content__link button button--edit") Editar
	// 							a(href="#" class='button button--delete') Eliminar
})( document );
