function parseCount(string){
    let result = (Number.parseFloat(string,10));
    if (isNaN(result)){
        throw new Error("Невалидное значение");
    } else {
        return result;
    }
}

function validateCount(string){
    try{
        return parseCount(string);
    } catch (error){
        return (error);
    } finally {
        
    }
}
class Triangle {
	constructor(sideAB, sideBC, sideCA){
		this.sideAB = sideAB;
		this.sideBC = sideBC;
        this.sideCA = sideCA;
        if (sideAB + sideBC < sideCA ||
            sideBC + sideCA < sideAB ||
            sideCA + sideAB < sideBC){
            throw new Error("Треугольник с такими сторонами не существует");
        }
	}
    
    get perimeter(){
        return (this.sideAB + this.sideBC + this.sideCA);
        
    }
   

    get area(){
        let semiPerimeter = this.perimeter/2;
        let area = (Math.sqrt(semiPerimeter * (semiPerimeter - this.sideAB) * 
        (semiPerimeter - this.sideBC) * (semiPerimeter - this.sideCA))).toFixed(3); 
        return Number.parseFloat(area,10);
    }
    
}
function getTriangle(sideAB, sideBC, sideCA){
    try{
        return new Triangle(sideAB, sideBC, sideCA);
    } catch (error){
        return {
            get perimeter(){
                return 'Ошибка! Треугольник не существует';
            },
            get area(){
                return 'Ошибка! Треугольник не существует';
            }
        } 
    }
}
    
    
