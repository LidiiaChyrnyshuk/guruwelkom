(function () {
	const container = document.getElementById("chip");

	const canvas = document.createElement("canvas");
	canvas.style.position = "absolute";
	canvas.style.top = "0"; // виправлено
	canvas.style.right = "0"; // залишено
	canvas.style.width = "100%"; // адаптивна ширина
	canvas.style.height = "100%"; // адаптивна висота
	container.appendChild(canvas);

	const ctx = canvas.getContext("2d");
	const img = new Image();
	img.src = "images/hero/guru_chips.webp";

	let scale = 1;

	function resizeCanvas() {
		const dpr = window.devicePixelRatio || 1;
		const width = container.clientWidth;
		const height = container.clientHeight;

		canvas.width = width * dpr;
		canvas.height = height * dpr;
		ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transforms
		ctx.scale(dpr, dpr);
	}

	window.addEventListener("resize", resizeCanvas);
	resizeCanvas(); // викликати при завантаженні

	img.onload = () => {
		requestAnimationFrame(draw);
	};

	function draw() {
		const width = container.clientWidth;
		const height = container.clientHeight;

		ctx.clearRect(0, 0, width, height);
		ctx.save();

		// Центруємо
		ctx.translate(width / 2, height / 2);

		// Масштабування під контейнер
		const baseScale = Math.min(width / img.width, height / img.height);
		const pulse = 1 + 0.05 * Math.sin(performance.now() / 300);
		const finalScale = baseScale * pulse;

		ctx.scale(finalScale, finalScale);
		ctx.drawImage(img, -img.width / 2, -img.height / 2);
		ctx.restore();

		requestAnimationFrame(draw);
	}
})();
