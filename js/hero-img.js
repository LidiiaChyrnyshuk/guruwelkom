(function () {
	const container = document.getElementById("hero-image");

	const canvas = document.createElement("canvas");
	canvas.style.position = "absolute";
	canvas.style.top = "0";
	canvas.style.left = "0";
	canvas.style.width = "100%";
	canvas.style.height = "100%";
	container.appendChild(canvas);

	const ctx = canvas.getContext("2d");

	const img = new Image();
	let currentSrc = "";

function selectImageByScreenWidth() {
	const width = window.innerWidth;
	let newSrc = "";

	if (width >= 1512) {
		newSrc = "../images/hero/hero_1834.webp";
	} else if (width >= 1024) {
		newSrc = "../images/hero/hero_1200.webp";
	} else {
		newSrc = "../images/hero/hero_595.webp";
	}

	if (newSrc !== currentSrc) {
		currentSrc = newSrc;
		img.src = currentSrc;
	} else {
		if (img.complete) draw();
	}
}

	function resizeCanvas() {
		const dpr = window.devicePixelRatio || 1;
		const width = container.clientWidth;
		const height = container.clientHeight;

		canvas.width = width * dpr;
		canvas.height = height * dpr;

		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.scale(dpr, dpr);

		// Після зміни розміру — перерисовуємо
		if (img.complete) draw();
	}

	window.addEventListener("resize", () => {
		resizeCanvas();
		selectImageByScreenWidth();
	});

	img.onload = () => {
		resizeCanvas();
		draw();
	};

	// Початкові дії
	selectImageByScreenWidth();
	resizeCanvas();

	function draw() {
		const width = container.clientWidth;
		const height = container.clientHeight;

		ctx.clearRect(0, 0, width, height);
		ctx.save();

		ctx.translate(width / 2, height / 2);

		const scale = Math.min(width / img.width, height / img.height);

		ctx.scale(scale, scale);
		ctx.drawImage(img, -img.width / 2, -img.height / 2);

		ctx.restore();
	}
})();
