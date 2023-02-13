const optionsNavigation = document.querySelectorAll('.menu-selection');

console.log(optionsNavigation);

optionsNavigation.forEach(option => {
	option.addEventListener('click', () => {
		optionsNavigation.forEach(option2 => {
			if(option2.hasAttribute('data-selected'))
				option2.removeAttribute('data-selected');
		});

		option.setAttribute('data-selected', 'true');
	});
});