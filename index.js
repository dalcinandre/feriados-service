import fs from 'fs'

fs.readFile('/tmp/feriados.json', 'utf-8', (err, data) => {
  if (err) throw err

  const _json = JSON.parse(data)

  const n = _json.map(({ date, name, type }) => Object.values(({ date: date.split('/').reverse().join('-'), name, type})))

  n.forEach((item) => console.log(`('${item[0]}','${item[1]}','${item[2]}'),`))
})
