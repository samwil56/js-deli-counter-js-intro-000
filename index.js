function takeANumber(line, name) {
  line.push(name)
  var place = line.indexOf(name) +1
  return `Welcome, ${name}. You are number ${place} in line.`
}

function nowServing(line) {
  var first = line[0]
  if (first == undefined ) {return "There is nobody waiting to be served!"}
  else {return `Currently serving ${first}.`}

  console.log(line.shift())
}
