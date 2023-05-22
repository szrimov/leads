export function SET_ERROR_CODE_FOR_PAGE(context, error) {
  if (process.server) {
    context.$nuxt.context.res.statusCode = error.status
    context.$fetchState.error = {
      statusCode: error.status,
      message: error.message
    }
  } else {
    context.$nuxt.error({statusCode: error.status, message: error.message})
  }
}
