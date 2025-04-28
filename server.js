// import {createServer} from 'node:http'

// const server = createServer((req, res) => {
//     res.write('oiiee')

//     return res.end()
// })

// server.listen(3333)


import {fastify} from 'fastify'

const server = fastify()

server.get('/', () => {
    return 'toma comecemo'
})

server.get('/hello', () => {
    return 'hello'
})
server.get('/papa', () => {
    return 'papa'
})
server.get('/node', () => {
    return 'nodezada pai'
})
server.listen({
    port: 3333,
})