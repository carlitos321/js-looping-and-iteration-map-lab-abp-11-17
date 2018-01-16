function lowerCaseDrivers (drivers) {
    return drivers.map(function(lower) {
      return lower.toLowerCase()
  })
}

function nameToAttributes(names) {
  return names.map(function(name) {
    let fName = name.split(" ")[0]
    let lName = name.split(" ")[1]
    return {firstName: fName, lastName: lName}
  })
}

//function attributesToPhrase
