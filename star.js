let element = document.getElementById("starfield")
let starfield = { element: element, width: element.offsetWidth, height: element.offsetHeight, centerX: element.offsetWidth / 2, centerY: element.offsetHeight / 2 }

class Star {
	static speed_factor = 1
	constructor(radius) {
		this.radius = radius

		this.x = Math.floor(Math.random() * starfield.width)
		this.y = Math.floor(Math.random() * starfield.height)

		this.vector = { X: this.x - starfield.centerX, Y: this.y - starfield.centerY }
		this.speed = Star.speed_factor * radius
		this.counter = 0

		this.div = document.createElement("div")
		this.div.classList.add("ellipse")
		this.div.style.width = `${this.radius}px`
		this.div.style.height = `${this.radius}px`
		this.div.style.left = `${this.x}px`
		this.div.style.bottom = `${this.y}px`
		this.div.style.opacity = 0.01
		// this.div.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)} )`
	}

	update(position) {
		const manu = this.speed * 2.5
		this.counter++
		this.vector = { X: this.x - position.X, Y: this.y - position.Y }

		if (this.counter <= manu) {
			this.div.style.width = `${(this.counter * this.radius) / manu}px`
			this.div.style.height = `${(this.counter * this.radius) / manu}px`
			this.div.style.opacity = `${this.counter / manu}`
		}
		this.div.style.left = `${(this.x += (this.vector.X * manu) / 500)}px`
		this.div.style.bottom = `${(this.y += (this.vector.Y * manu) / 500)}px`
	}

	out() {
		if (this.x > starfield.width || this.x < 0 || this.y > starfield.height || this.y < 0) {
			return true
		} else {
			return false
		}
	}
}
