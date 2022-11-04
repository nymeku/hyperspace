window.onload = () => {
	let element = document.getElementById("starfield")
	let starfield = { element: element, width: element.offsetWidth, height: element.offsetHeight, centerX: element.offsetWidth / 2, centerY: element.offsetHeight / 2 }

	const Stars = new Array(500).fill("")

	for (let i = 0; i < Stars.length; i++) {
		const star = new Star(Math.floor(Math.random() * 10) - 4)
		starfield.element.appendChild(star.div)
		Stars[i] = star
	}

	const mousePosition = { X: starfield.centerX, Y: starfield.centerY }
	window.addEventListener("mousemove", (e) => {
		mousePosition.X = e.clientX
		mousePosition.Y = window.innerHeight - e.clientY
	})

	setInterval(() => {
		for (let i = 0; i < Stars.length; i++) {
			if (Stars[i].out()) {
				starfield.element.removeChild(Stars[i].div)
				const st = new Star(Math.floor(Math.random() * 10) + 5)
				starfield.element.appendChild(st.div)
				Stars[i] = st
			} else {
				Stars[i].update(mousePosition)
			}
		}
	}, 16)
}
