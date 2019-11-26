function makeSand(v1, v2){
    sand= 'bread,'
    sand = sand + v1 + ','
    sand += v2 + ','
    sand += 'bread'

    console.log(sand)
    return sand
}

result = makeSand('cheese', 'pickle')
console.log(result)