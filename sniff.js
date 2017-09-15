module.exports = (...args) => {
  let tag = 'SNIFF'
  let val
  if (args.length === 2) {
    tag = args[0]
    val = args[1]
  } else {
    val = args[0]
  }
  console.log(`[${tag}]`, val)
  return val
}