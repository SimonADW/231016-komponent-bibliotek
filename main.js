// Accordion 

const navButtons = document.querySelectorAll(".navButton");

const components = document.querySelectorAll(".component");


const displayComponent = (event) => {
	const button = event.currentTarget;	
	const componentToDisplay = button.dataset.component;

	components.forEach(component => {
		component.classList.remove("component--visible");

		if (component.dataset.name === componentToDisplay) {
			component.classList.add("component--visible");
		};
	})

	navButtons.forEach(button => {

		button.classList.remove("navButton--active");

		if (button.dataset.component === componentToDisplay) {
			button.classList.add("navButton--active");
		}
	});
}

navButtons.forEach(button => {
	button.addEventListener("click", displayComponent);
});
