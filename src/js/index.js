document.addEventListener("DOMContentLoaded", function () {
	loadComponents("menu", "./components/menu");
	loadScript("./components/story/script.js");
	loadPost("post", "./components/post", "./components/post/script.js");
	loadSuggestedAccounts()
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

const ACCOUNTS = [
	{
		username: "leomessi",
		avatar: "public/leomessi/avatar.jpg",
		name: "Leo Messi",
		image: "public/leomessi/1.jpg",
	},
	{
		username: "cristiano",
		avatar: "public/cristiano/avatar.jpg",
		name: "Cristiano Ronaldo",
		image: "public/cristiano/1.jpg",
	},
	{
		username: "zuck",
		avatar: "public/zuck/avatar.jpg",
		name: "Mark Zuckerberg",
		image: "public/zuck/1.jpg",
	},
	{
		username: "_ananthu_td_",
		avatar: "public/_ananthu_td_/avatar.jpg",
		name: "Ananthu T D",
		image: "public/_ananthu_td_/1.jpg",
	},
	{
		username: "emmawatson",
		avatar: "public/emmawatson/avatar.jpg",
		name: "Emma Watson",
		image: "public/emmawatson/1.jpg",
	},
	{
		username: "therock",
		avatar: "public/therock/avatar.jpg",
		name: "Dwayne Johnson",
		image: "public/therock/1.jpg",
	},
];

async function loadPost(id, componentPath, scriptUrl) {
	const component = await fetch(componentPath).then((data) => data.text());
	if (!component) return;
	const node = document.getElementById(id);
	for (let i = 0; i < ACCOUNTS.length; i++) {
		let temp = new DOMParser().parseFromString(component, "text/html");
		temp.getElementById("avatar").setAttribute("href", ACCOUNTS[i].avatar);
		temp.getElementById("username").innerHTML = ACCOUNTS[i].username;
		temp.getElementById("name").innerHTML = ACCOUNTS[i].name;
		temp.getElementById("name").innerHTML = ACCOUNTS[i].name;
		temp.getElementById("post-img").setAttribute("src", ACCOUNTS[i].image);
		temp.getElementById("follow").id = "follow-btn-" + i;
		temp.getElementById("like").id = "like-btn-" + i;
		temp.getElementById("save").id = "save-btn-" + i;
		temp.getElementById("input-comment").id = "input-comment-" + i;
		temp.getElementById("post-comment").id = "post-comment-btn-" + i;
		node.innerHTML += new XMLSerializer().serializeToString(temp);
	}
	if (scriptUrl) loadScript(scriptUrl);
}

async function loadSuggestedAccounts() {
	const node = document.getElementById('suggested-accounts');
	for (let i = 0; i < ACCOUNTS.length; i++) {
		let account = `<div  class="flex my-3 cursor-pointer"><img
		src="${ACCOUNTS[i].avatar}"
		width="44px"
		height="44px"
		alt=""
		class="rounded-full"
	/>
	<p class="flex items-center mx-4 text-sm">${ACCOUNTS[i].username}</p>
	<button class="ml-auto text-xs font-medium text-instaBlue">
		Follow
	</button></div>`;
		node.innerHTML += account;
	}
}
