input.onButtonPressed(Button.A, function () {
    add_x = 0
    add_y = 1
})
input.onButtonPressed(Button.B, function () {
    add_x = 1
    add_y = 0
})
let add_y = 0
let add_x = 0
let apple_x = randint(1, 4)
let apple_y = randint(1, 4)
let snake_x = 0
let snake_y = 0
led.plot(snake_x, snake_y)
add_x = 0
add_y = 1
basic.forever(function () {
    led.plot(apple_x, apple_y)
    basic.pause(500)
    led.unplot(snake_x, snake_y)
    snake_x += add_x
    snake_y += add_y
    if (snake_x >= 5) {
        snake_x = 0
    }
    if (snake_y >= 5) {
        snake_y = 0
    }
    led.plot(snake_x, snake_y)
    if (snake_x == apple_x && snake_y == apple_y) {
        apple_x = randint(0, 4)
        apple_y = randint(0, 4)
        led.plot(apple_x, apple_y)
    }
})
