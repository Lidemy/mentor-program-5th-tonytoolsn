// eslint-disable-next-line
const request = require('request')
// eslint-disable-next-line
const process = require('process')
const { argv } = process.argv

const method = argv[2]

switch (method) {
  case 'list':
    request('https://lidemy-book-store.herokuapp.com/books?_limit=20', (error, response, body) => {
      if (error) {
        console.log('error: ', error)
        return
      }
      let json
      try {
        json = JSON.parse(body)
      } catch (error) {
        console.log('error: ', error)
        return
      }
      for (let i = 0; i < json.length; i++) {
        console.log(`${json[i].id}${json[i].name}`)
      }
    })
    break

  case 'read':
    request('https://lidemy-book-store.herokuapp.com/books/'`＄{argv[3]}`, (error, response, body) => {
      if (error) {
        console.log('error: ', error)
        return
      }
      let json
      try {
        json = JSON.parse(body)
      } catch (error) {
        console.log('error: ', error)
        return
      }
      console.log(`${json.id} ${json.name}`)
    })
    break

  case 'create':
    request.post({
      url: 'https://lidemy-book-store.herokuapp.com/books/',
      form: {
        name: argv[3]
      }
    }, (error, response, body) => {
      if (error) {
        console.log('error: ', error)
        return
      }
      console.log(body)
    })
    break

  case 'update':
    request.patch({
      url: 'https://lidemy-book-store.herokuapp.com/books/'`＄{argv[3]}`,
      form: {
        name: argv[4]
      }
    }, (error, response, body) => {
      if (error) {
        console.log('error: ', error)
        return
      }
      console.log(body)
    })
    break

  case 'delete':
    request.delete({
      url: 'https://lidemy-book-store.herokuapp.com/books/'`＄{argv[3]}`
    }, (error, response, body) => {
      if (error) {
        console.log('error: ', error)
        return
      }
      console.log(body)
    })
    break
}
