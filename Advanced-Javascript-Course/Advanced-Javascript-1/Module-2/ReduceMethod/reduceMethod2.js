const studentsArr = [
    {
        name: 'Mike',
        grade: 75
    },
    {
        name: 'Emma',
        grade: 83
    },
    {
        name: 'Seth',
        grade: 66
    }
]

// by default total variable is the first element of the array (in this case the first object)
// by giving the second parameter, I can initialize the total variable with whatever I want
function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce(function(total, currentStudent) {
        return total + currentStudent.grade;
    }, 0)
    return totalGrades / studentsArr.length;
}
console.log(calculateClassAverage(studentsArr))

