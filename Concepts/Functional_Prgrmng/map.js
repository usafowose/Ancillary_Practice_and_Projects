const students = [
    { name: 'Andrew', age: 22, credits: 100, major: 'Economics', enrolled: true },
    { name: 'John', age: 20, credits: 74, major: 'Business-Finance', enrolled: false },
    { name: 'Ian', age: 21, credits: 45, major: 'Philosophy', enrolled: false }
];

const studentActions = {
    addStatus (studArr = []) {
        return studArr.map(student => {
            switch (student.enrolled) {
                case true: student.status = 'Active'
                    break;
                case false: student.status = 'Inactive'
                    break;
            }; return student
        });
    },
    legalAge (studArr = []) {
        return studArr.filter(student => student.age > 20);
    }
};
console.log(studentActions.legalAge(students));
