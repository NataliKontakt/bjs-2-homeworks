function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age;
  this.marks = [];
  
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = (subjectName);
}

Student.prototype.addMarks = function (...marksToAdd) {
    if (this.marks) {
      this.marks.length;
      this.marks.push(...marksToAdd);
    } 
     
}

Student.prototype.getAverage = function () {
    let result = this.marks.reduce((acc, item, index, marks) => {
        acc += item, 0;
        if (index === this.marks.length - 1) {
          return acc / this.marks.length;
        }
        return acc;
      }, 0)
      this.average = (result);
   
    return(result);
    
} 

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = (reason);
}

