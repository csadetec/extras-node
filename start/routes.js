'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.post('/login', 'AuthController.login')

Route.group(() => {
  Route.resource('/users', 'UserController').apiOnly()
  Route.resource('/profiles', 'ProfileController').apiOnly()
  Route.resource('/employees', 'EmployeeController').apiOnly()
  Route.resource('/reasons', 'ReasonController').apiOnly()
  Route.resource('/services/employees', 'ServiceEmployeeController').apiOnly()

  Route.get('/services/employees/:start/:end', 'ServiceEmployeeController.index')
  Route.get('/reports', 'ServiceEmployeeController.indexAll')
  
  Route.post('/pdf', 'PdfController.create')
  Route.get('/pdf', 'PdfController.get')
  
  Route.resource('/services', 'ServiceController').apiOnly()

}).middleware('auth')
Route.get('/services/employees/pdf/:start/:end', 'ServiceEmployeeController.filterPdf')
