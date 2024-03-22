class ComparingTriangles{
	constructor(triangleOne, triangleTwo){
		this.triangle_One_Base = triangleOne.base
		this.triangle_Two_Base = triangleTwo.base
		this.triangle_One_Height = triangleOne.height
		this.triangle_Two_Height = triangleTwo.height
	}
	calcArea(){
		const areaFirstTriangle = (this.triangle_One_Base * this.triangle_One_Height) / 2
		const areaSecondTriangle = (this.triangle_Two_Base * this.triangle_Two_Height) / 2
		return {areaFirstTriangle, areaSecondTriangle}
	}

	render(){
		const areas = this.calcArea()
		const areaFirstTriangle = parseFloat(areas.areaFirstTriangle.toFixed(2))
		const areaSecondTriangle = parseFloat(areas.areaSecondTriangle.toFixed(2))
		//or i could make with destructuration const = {areaFirstTriangle, areaSecondTriangle = this.calcArea()}, but for now we work with that.

		if (areaFirstTriangle > areaSecondTriangle) {
			console.log(`First triangle ${areaFirstTriangle} is bigger than second Triangle ${areaSecondTriangle}`)
		} else if (areaFirstTriangle < areaSecondTriangle){
			console.log(`Second Triangle ${areaSecondTriangle} is bigger than first triangle ${areaFirstTriangle}`)
		} else {
			console.log(`Triangles are even ${areaFirstTriangle}, ${areaSecondTriangle}`)	
		}
	}
}

window.onload = function(){
	const testData1 = new ComparingTriangles(triangleOne, triangleTwo)
	testData1.render()
	
	const testData2 = new ComparingTriangles(triangleThree, triangleFour)
	testData2.render()
	
	const testData3 = new ComparingTriangles(triangleFive, triangleSix)
	testData3.render()
}

const triangleOne = {
	base: 10,
	height: 13
}
const triangleTwo = {
	base: 16.5,
	height: 20.3
}
const triangleThree = {
	base: 16.5,
	height: 20.3
}
const triangleFour = {
	base: 20.3,
	height: 16.5
}
const triangleFive = {
	base: 7.8,
	height: 5.6
}
const triangleSix = {
	base: 9.3,
	height: 12.4
}