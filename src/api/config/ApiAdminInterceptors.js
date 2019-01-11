import toastr from 'toastr'
import AuthService from '../AuthService'

export function beforeRequest (config) {
  const token = AuthService.getToken()
  if (token) {
    config.headers['Authorization'] = 'JWT ' + token
  }
  return config
}

export function responseSuccess (response) {
  return response.data
}

export function responseError (error) {
  if (!error.response) {
    toastr.error('Отсутствует соединение с сервером.', '', {
      'positionClass': 'toast-top-center',
      'timeOut': '10000'
    })
  } else {
    if (error.response.status === 400) {
      if (error.response.data.non_field_errors) {
        toastr.error(error.response.data.non_field_errors[0],
          'Ошибка',
          {
            'positionClass': 'toast-top-center',
            'timeOut': '10000'
          }
        )
      }
    }

    if (error.response.status === 401) {
      localStorage.clear()
      window.location.reload()
    }

    if (error.response.status === 403) {
      toastr.error('Нет прав доступа!',
        'У вас недостаточно прав для выполнения этой операции.',
        {
          'positionClass': 'toast-top-center',
          'timeOut': '10000'
        }
      )
    }

    if (error.response.status === 404) {
      toastr.error('Страница не найдена',
        'Упс!',
        {
          'positionClass': 'toast-top-center',
          'timeOut': '10000'
        }
      )
    }

    if (error.response.status >= 500) {
      toastr.error('Сервер временно недоступен!', '',
        {
          'positionClass': 'toast-top-center',
          'timeOut': '10000'
        }
      )
    }
  }

  return Promise.reject(error.response.data)
}
