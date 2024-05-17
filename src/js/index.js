

document.addEventListener("DOMContentLoaded", function () {
	loadComponents(
		"menu",
		"./components/menu",
	);
});

async function loadComponents(id, componentPath, scriptUrl) {
	const component = await fetch(componentPath).then((data) => data.text());
	if (!component) return;
	const node = document.getElementById(id);
	node.innerHTML = component;
	if (scriptUrl) loadScript(scriptUrl);
}

function loadScript(url) {
	const script = document.createElement("script");
	script.src = url;
	document.body.appendChild(script);
}