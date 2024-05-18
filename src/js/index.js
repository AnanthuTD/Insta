document.addEventListener("DOMContentLoaded", function () {
	loadComponents("menu", "./components/menu");
	loadComponents("story-ring", "./components/story", "", 10);
	loadPost("post", "./components/post", "./components/post/script.js", 10);
});

async function loadComponents(id, componentPath, scriptUrl, num = 1) {
	const component = await fetch(componentPath).then((data) => data.text());
	if (!component) return;
	const node = document.getElementById(id);
	for (let i = 0; i < num; i++) {
		node.innerHTML += component;
	}
	if (scriptUrl) loadScript(scriptUrl);
}

function loadScript(url) {
	const script = document.createElement("script");
	script.src = url;
	document.body.appendChild(script);
}

async function loadPost(id, componentPath, scriptUrl, num = 1) {
	const component = await fetch(componentPath).then((data) => data.text());
	if (!component) return;
	const node = document.getElementById(id);
	for (let i = 0; i < num; i++) {
		let temp = new DOMParser().parseFromString(component, "text/html");
		temp.getElementById("follow").id = "follow-btn-" + i;
		temp.getElementById("like").id = "like-btn-" + i;
		temp.getElementById("save").id = "save-btn-" + i;
		temp.getElementById("input-comment").id = "input-comment-" + i;
		temp.getElementById("post-comment").id = "post-comment-btn-" + i;
		node.innerHTML += new XMLSerializer().serializeToString(temp);
	}
	if (scriptUrl) loadScript(scriptUrl);
}
