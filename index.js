function takeANumber(line, name) {
  line.push(name)
  var place = line.indexOf(name) +1
  return `Welcome, ${name}. You are number ${place} in line.`
}

function nowServing(line) {
  var first = line[0]
  line.shift()
  if (first == undefined ) {return "There is nobody waiting to be served!"}
  else {return `Currently serving ${first}.`}


}

function currentLine(line) {
  var len = line.length -1
  return 'The line is currently: '
  for (i=0, i<= len, i++) {
    var position = i+1
    return `${poistion}. ${line[i]}`
    if (i != len) {return ', '}
  }
}
