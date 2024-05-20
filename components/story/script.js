function setScrollRight(bool) {
	const scrollRight = document.getElementById("scroll-right");
	
	if (bool) {
		// Remove the hidden class and add the lg:flex class
		scrollRight.classList.remove("hidden");
		scrollRight.classList.add("flex");
	} else {
		// Add the hidden class and remove the lg:flex class
		scrollRight.classList.add("hidden");
		scrollRight.classList.remove("flex");
	}
}


function setScrollLeft(bool) {
	const scrollLeft = document.getElementById("scroll-left");
	
	if (bool) {
		// Remove the hidden class and add the lg:flex class
		scrollLeft.classList.remove("hidden");
		scrollLeft.classList.add("flex");
	} else {
		// Add the hidden class and remove the lg:flex class
		scrollLeft.classList.add("hidden");
		scrollLeft.classList.remove("flex");
	}
}


function handleClickLeft() {
	const container = document.getElementById("scroll-container");
	const containerWidth = container?.getBoundingClientRect().width || 0;
	const scrollAmount = containerWidth / 2;

	if (container && container.scrollLeft !== 0) {
		container.scrollBy({ left: -scrollAmount, behavior: "smooth" });

		setScrollRight(true);

		const scrollLeft = container.scrollLeft - scrollAmount;

		if (Math.floor(scrollLeft)<=0) {
			setScrollLeft(false);
		}
	}
}

function handleClickRight() {
	const container = document.getElementById("scroll-container");
	const containerWidth = container?.getBoundingClientRect().width || 0;
	const contentWidth = container?.scrollWidth || 0;
	const scrollAmount = containerWidth / 2;

	if (container && contentWidth - container.scrollLeft > containerWidth) {
		container.scrollBy({ left: scrollAmount, behavior: "smooth" });

		setScrollLeft(true);

		const scrollLeft = container.scrollLeft + scrollAmount;

		if (Math.round(containerWidth + scrollLeft) >= contentWidth) {
			setScrollRight(false);
		}
	}
}

function check() {
	const container = document.getElementById("scroll-container");
	const containerWidth = container?.getBoundingClientRect().width || 0;
	const contentWidth = container?.scrollWidth || 0;
	const scrollRight = document.getElementById("scroll-right");
	if (window.getComputedStyle(scrollRight).display === "none") {
		return;
	}
	if (container && contentWidth > containerWidth) {
		setScrollRight(true);
	}
}

const STORIES = [
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
		avatar: "public/ananthu/avatar.jpg",
		name: "Ananthu T D",
		image: "public/ananthu/1.jpg",
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
		avatar: "public/ananthu/avatar.jpg",
		name: "Ananthu T D",
		image: "public/ananthu/1.jpg",
	},
	{
		username: "leomessi",
		avatar: "public/leomessi/avatar.jpg",
		name: "Leo Messi",
		image: "public/leomessi/1.jpg",
	},
	{
		username: "therock",
		avatar: "public/therock/avatar.jpg",
		name: "Dwayne Johnson",
		image: "public/therock/1.jpg",
	},
	{
		username: "emmawatson",
		avatar: "public/emmawatson/avatar.jpg",
		name: "Emma Watson",
		image: "public/emmawatson/1.jpg",
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
		avatar: "public/ananthu/avatar.jpg",
		name: "Ananthu T D",
		image: "public/ananthu/1.jpg",
	},
	{
		username: "leomessi",
		avatar: "public/leomessi/avatar.jpg",
		name: "Leo Messi",
		image: "public/leomessi/1.jpg",
	},
];

async function loadStories() {
	const id = "story-ring",
		componentPath = "./components/story";

	const component = await fetch(componentPath).then((data) => data.text());
	if (!component) return;
	const node = document.getElementById(id);
	for (let i = 0; i < STORIES.length; i++) {
		let temp = new DOMParser().parseFromString(component, "text/html");
		temp
			.getElementById("story-avatar")
			.setAttribute("href", STORIES[i].avatar);
		node.innerHTML += new XMLSerializer().serializeToString(temp);
	}

	// 1 millisecond delay to wait for the scroll-container to be visible
	setTimeout(() => {
		check();
	}, 1);
}

loadStories();
