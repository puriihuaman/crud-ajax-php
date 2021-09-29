const modal = (( doc ) => {
	const main = doc.getElementById('main'),
				allUsers = doc.getElementById('all-users'),
				usersInfo = doc.getElementById('users-info'),
				modal = doc.getElementById('modal'),
				allUsersChecks = doc.getElementById('select-all-users'),
				deleteAllUsers = doc.getElementById('delete-all-users'),
				topBarTitle = doc.getElementById('top-bar-title'),
				confirmUserInfo = doc.getElementById('confirm-user-info');

	let allUsersButtons = Array.from(doc.querySelectorAll('.content__user .button'));
	let allChecks = Array.from(doc.querySelectorAll('.content__user .content__checkbox'));
	let newUser = true;

	const showUserInfo = ( ) => {
		modal.classList.add('users-modal--active');
	}

	const hideUserInfo = ( ) => {
		modal.classList.remove('users-modal--active');
	}


	// Seleciona un solo regisstro
	const selectUser = ( id ) => {
		const element = doc.getElementById( id );
		allUsersButtons = Array.from(doc.querySelectorAll('.content__user .button'));
		allChecks = Array.from(doc.querySelectorAll('.content__user .content__checkbox'));

		if ( element.checked ) {
			allChecks.map(( check ) => check.checked = false);
			element.checked = true;
			allUsersButtons.map(( button ) => button.classList.add('button--hide'));
			[...element.parentElement.querySelectorAll('.button')].map(( button ) => button.classList.remove('button--hide'))
		} else {
			allUsersButtons.map(( button ) => button.classList.remove('button--hide'));
		}
	}
	
	// Selecciona todos los registros de usuarios
	const selectAllUsers = ( ) => {
		allUsersButtons = Array.from(doc.querySelectorAll('.content__user .button'));
		allChecks = Array.from(doc.querySelectorAll('.content__user .content__checkbox'));

		if ( allUsersChecks.checked ) {
			allChecks.map(( check ) => check.checked = true);
			allUsersButtons.map(( button ) => button.classList.add('button--hide'));
			deleteAllUsers.classList.remove('button--hide');
		} else {
			allChecks.map(( check ) => check.checked = false);
			allUsersButtons.map(( button ) => button.classList.remove('button--hide'));
			deleteAllUsers.classList.add('button--hide');
		}
	}

	// Añadir un registro
	const addUser = ( ) => {
		topBarTitle.textContent = 'Nuevo usuario';
		confirmUserInfo.textContent = 'Registrar';
	}

	// Guarda un 
	const saveUser = ( ) => {
		topBarTitle.textContent = 'Editar usuario';
		confirmUserInfo.textContent = 'Guardar';
	}

	main.addEventListener('click', ( ev ) => {
		if ( ev.target.classList.contains('top-bar__user-info') ) {
			newUser = true;
			addUser();
			showUserInfo();
		} else if ( ev.target.classList.contains('button--cancel') ) {
			hideUserInfo();
		} else if (ev.target.classList.contains('content__checkbox') ) {
			selectUser( ev.target.id );
		} else if ( ev.target.id === 'select-all-users' ) {
			selectAllUsers();
		} else if ( ev.target.classList.contains('button--edit')) {
			newUser = false;
			saveUser();
			showUserInfo();
		}
	})
})( document );