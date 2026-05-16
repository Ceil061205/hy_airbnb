function styleToStringToObject(style) {
  if (!style) return {}
  const styleObj = {}
  style.split(';').forEach(item => {
    const [key, value] = item.split(':')
    if (key && value) {
      styleObj[key.trim()] = value.trim()
    }
  })
  return styleObj
}

export default styleToStringToObject