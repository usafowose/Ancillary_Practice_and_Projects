// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:
// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Example:
// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

// REQS-------------
// h > 0 ;

// h known (height of thrower (floors) ?) (metres)

// ball bounces (bounce) @ decimal of height i.e half = 0.5, 2/3 = 0.66

// mom is standing @ 1.5m 

// return -1 if all above arent met

// ******* Ball only seen by mom if it comes higher than window (>1.5)


// -----------------------------------------------------------------------------------------
// ------------------------------LOGIC-----------------------------------------------------------
// already accounted for first sight otw down
// when balls hits ground (multiply orginal h * bounce for new h), then if (new h>window) {counter ++, new new h = new h * bounce } ... check again for height relative to window

// -----------------------------------------------------------------------------------------
let counter = 0;

const wrongParams = (h, bounce, window) => (h <= 0 || bounce <= 0 || bounce > 1 || window >= h)


const overWindow = (h, b, w) => {
    let newHeight = h * b;
    if (newHeight > w) { return newHeight } else { return false }
}

const resetCounter = (counter ) => {
    counter = 0
}

const bouncingBall = (h, b, w) => {

    if (wrongParams(h, b, w) === true) { return -1 } else { counter++ };  // dropping past window
    let newHeight = overWindow(h, b, w);

    if (newHeight != false) {
        counter += 1;
        let newh = newHeight;
        bouncingBall(newh, b, w);
    } else {
      return resetCounter();
    }

    return counter

}

console.log(bouncingBall(3.0, 0.66, 1.5))
console.log(bouncingBall(30, 0.66, 1.5));


