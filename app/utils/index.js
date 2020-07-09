const response = {
  success: (res, data = '', status = 200) => {
    return res.status(status).json(
      {
        error: false,
        status,
        data
      }
    )
  },
  error: (res, message = 'Internal server error', status = 500) => {
    return res.status(status).json(
      {
        error: true,
        status,
        message
      }
    )
  }
}

function order (list) {
  return list.sort((a, b) => b.skills.length - a.skills.length)
}

module.exports = {
  response,
  order
}
