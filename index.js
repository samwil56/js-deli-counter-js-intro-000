function takeANumber(line, name) {
  line.push(name)
  var place = list.indexOf(name) +1
  return `Welcome, ${name}. You are number ${place} in line.`
}
