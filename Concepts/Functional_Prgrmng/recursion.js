// creating functions that recall themselves

// 1. Countdown function (no timer)
const regularCountdown = (value, fn) => {
    fn(value);
    return (value > 0) ? regularCountdown(value - 1, fn) : value
}

regularCountdown(10, value => console.log(value))

// 2. Countdown function (with timer)
const timerCountdown = (value, fn, delay = 1000) => {
    fn(value)
    return (value > 0) ? setTimeout(() => timerCountdown(value - 1, fn), delay) : value
}
timerCountdown(20, value => console.log(value));


// 3. rECURSIVELY SEARCHING FOR FIELDS IN NESTED OBJS 
const drew = {
    type: 'person',
    data: {
        gender: 'male',
        info: {
            age: 23,
            fullName: {
                first: 'Andrew',
                last: 'Fowose'
            }
        }
    }
}

// we want to achieve this functionality -> deepPick('type', drew) => return 'person'
// deepPick('data.info.fullName.first', drew) => returns 'Andrew'

const deepPick = (fields, obj = {}) => {
    let [first, ...remaining] = fields.split('.');
    return (remaining.length) ? deepPick(remaining.join('.'), obj[first]) : obj[first]
}

console.log(deepPick('type', drew));
console.log(deepPick('data.info.fullName.first', drew))