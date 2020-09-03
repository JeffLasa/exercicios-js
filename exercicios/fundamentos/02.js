function ladosDoTriangulo(a, b, c) {
    if (a === b && b === c) {
        console.log('Equilátero')
    } else if (a == b || a == c || b == c) {
        console.log('Isóceles')
    } else {
        console.log('Escaleno')
    }
}

ladosDoTriangulo(3, 3, 3)
ladosDoTriangulo(3, 2, 2)
ladosDoTriangulo(3, 2, 3)
ladosDoTriangulo(3, 3, 2)
ladosDoTriangulo(2, 3, 4)
