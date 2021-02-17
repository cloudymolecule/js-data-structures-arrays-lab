// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function appendDriver(name){
    const driversCopy = [...drivers, name]
    return driversCopy
}

function prependDriver(name){
    const driversCopy = [name, ...drivers]
    return driversCopy
}

function removeLastDriver(){
    const driversCopy = drivers.slice(0, drivers.length - 1)
    return driversCopy
}

function removeFirstDriver(){
    const driversCopy = drivers.slice(1)
    return driversCopy
}