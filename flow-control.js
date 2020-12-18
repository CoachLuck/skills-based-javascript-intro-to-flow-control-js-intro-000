function basicTeenager(age) {
  if (age < 20 && age > 12) {
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age < 20 && age > 12) {
    return "You are a teenager!"
  }

  return "You are not a teenager";
}

function ageChecker(age) {
  if (age > 19) {
    return "You are a grownup"
  } else if (age > 12) {
    return "You are a teenager"
  } else {
    return "You are a kid"
  }
}

function ternaryTeenager(age) {
  return (age < 20 && age > 12) ? "You are a teenager!" : "You are not a teenager";
}

function switchAge(age) {
  switch (age) {
    case age < 20 && age > 12:
      return "You are a teenager"
    default:
      return "You have an age"
  }
}
