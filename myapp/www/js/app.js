// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.loginController', 'app.settingsController', 'app.signUpController', 'app.studentController', 'app.teacherController', 'app.translationsController', 'app.routes', 'app.directives', 'app.services', 'ngCookies', 'pascalprecht.translate', 'ui.router', 'firebase', 'firebaseConfig', 'LocalStorageModule'])

.config(function($ionicConfigProvider, $sceDelegateProvider, $translateProvider){
  
  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('es', translationsES);
  $translateProvider.translations('it', translationsIT);
  $translateProvider.translations('tr', translationsTR);
  $translateProvider.translations('de', translationsDE);
  $translateProvider.translations('hu', translationsHU);
  $translateProvider.translations('ru', translationsRU);
  $translateProvider.preferredLanguage('en');
  $translateProvider.fallbackLanguage('en');
  $translateProvider.useLocalStorage();
  $translateProvider.useSanitizeValueStrategy('escape');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
      cordova.plugins.Keyboard.disableScroll(true);
    }
  });

  $ionicPlatform.registerBackButtonAction(function(event) {
    event.preventDefault();
  }, 800);//registerBackButton

})
/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
});

var translationsEN = {
  
  ABOUT: 'About',
  ACCEPT: 'Accept',
  ACCOUNT_STUDENT_NOT_EXIST: 'It doesn\'t exist an student\'s account like that',
  ACCOUNT_TEACHER_NOT_EXIST: 'It doesn\'t exist an teacher\'s account like that',
  ACHIEVEMENT: 'Achievement',
  ACTIONS_ACHIEVEMENTS: 'Actions achievements',
  ACTIONS_CLASSROOM_STUDENTS: 'Actions students',
  ACTIONS_CLASSROOM_TEAMS: 'Actions teams',
  ACTIONS_ITEMS: 'Actions items',
  ACTION_MISSIONS: 'Actions missions',
  ACTIONS_TEACHER_HOME: 'Actions teacher home',
  ACTIONS_REWARDS: 'Actions rewards',
  ADD_ACHIEVEMENT: 'Add achievement',
  ADD_CLASS: 'Add class',
  ADD_ITEM: 'Add Item',
  ADD_LEVEL: 'Add level',
  ADD_REWARD: 'Añadir recompensa',
  ADD_STUDENT: 'Add student',
  ADD_TEAM: 'Add team',
  ADDITIONAL_POINTS_MISSION: 'Additional points (Optional)',
  ALREADY_HAVE_AN_ACCOUNT: 'Already have an account?',
  ASSIGN_STUDENT_TO_TEAM: 'Assign student to team...',
  ARCHIVE_CLASSES: 'Archive classrooms',
  AVAILABLE_POINTS: 'Available points',
  AVATAR: 'Avatar',
  BACKUP: 'Backup',
  BADGE: 'Badge',
  BECAUSE_COMPLETE_MISSION: 'because you completed the mission',
  BUTTON_LANG_DE: 'German',
  BUTTON_LANG_EN: 'English',
  BUTTON_LANG_ES: 'Spanish',
  BUTTON_LANG_HU: 'Hungarian',
  BUTTON_LANG_IT: 'Italian',
  BUTTON_LANG_RU: 'Russian',
  BUTTON_LANG_TR: 'Turkish',
  BUY_REWARDS: 'Buy rewards',
  CANCEL: 'Cancel',
  CANT_ASK_MORE_SCORE_THAN_MAX: 'You can\'t ask for more score than the asigned to the item',
  CANT_CREATE_MORE_TEAMS_THAN_STUDENT: 'You can\'t create more teams than students',
  CHANGE_AVATAR: 'Change avatar',
  CHANGE_SCORE: 'Change score',
  CHECK_EMAIL_TO_VERIFY: 'Check your email\'s inbox to restore your password',
  CLASS_NAME: 'Class name',
  CLASS_CODE: 'Classroom\'s code',
  CLASS_CLOSED: 'The classroom is closed',
  CLASSES_ARCHIVED: 'Archived classrooms',
  CLEAN_NOTIFICATIONS: 'Clear notifications',
  CONFIGURE_LEVELS: 'Configure levels',
  CONFIRM_PASSWORD: 'Confirm password',
  COPY_STUDENT_TO_ANOTHER_CLASS: 'Copy student to another class',
  CREATE: 'Create',
  CREATE_RANDOM_TEAMS: 'Create random teams',
  CREATE_DEMO_CLASS: 'Create demo classroom',
  DATA_CHANGED: 'Data changed',
  DELETE: 'Delete',
  DELETE_ACHIEVEMENTS: 'Delete achievement(s)',
  DELETE_CLASSROOMS: 'Delete classroom(s)',
  DELETE_ITEMS: 'Delete item(s)',
  DELETE_MISSIONS: 'Delete mission(s)',
  DELETE_REWARDS: 'Delete rewards(s)',
  DELETE_STUDENTS: 'Delete student(s)',
  DELETE_TEAMS: 'Delete team(s)',
  DESCRIPTION: 'Description',
  DONT_HAVE_ACCOUNT: 'Don\'t have an account?',
  EDIT: 'Edit',
  EDIT_ACHIEVEMENT: 'Edit achievement',
  EDIT_ITEMS: 'Edit items',
  EDIT_LEVEL: 'Edit level',
  EDIT_MEMBERS: 'Edit members',
  EDIT_REWARD: 'Edit reward',
  EDIT_REWARDS: 'Edit rewards',
  EDIT_STUDENTS: 'Edit students',
  EDIT_TEAM: 'Edit team',
  EMAIL: 'Email',
  EMAIL_ALREADY_USED: 'Email already used',
  EMAI_AUTOGENERATE: 'The email will be autogenerated',
  EMAIL_CHANGED: 'Email changed',
  EMAIL_EXAMPLE: 'example@example.com',
  EMAIL_INVALID: 'Invalid email',
  EMAIL_OF_ACCOUNT: 'Your email',
  ERROR_ACCESS_UNKNOW: 'Unknow access error',
  ERROR_WEAK_PASSWORD: 'Password must be at least of 6 characters',
  EVALUATE_STUDENTS: 'Evaluate student(s)',
  EVALUATE_TEAMS: 'Evaluate team(s)',
  EXPORT: 'Export',
  FILE_INVALID: 'The file is not a valid image',
  FORGOT_PASSWORD: 'Forgot password?',
  HAS_FINISHED: 'has finished',
  HAS_FINISHED_MISSION: 'has ended the mission',
  HAS_LOST_ACHIEVEMENT: 'has lost the achievement',
  HAS_RECIBED_MAX_POINTS_IN_ITEM: 'has recibed more of the max points in the item',
  HAS_UNLOCKED_LEVEL_ACHIEVEMENT: 'has unlocked the level',
  HAVE_FINISHED_MISSION: 'You have finished the mission',
  HAVE_LOST_ACHIEVEMENT: 'You have lost the achievement',
  HAVE_UNLOCKED_LEVEL_ACHIEVEMENT: 'You have unlocked the level',
  HELP: 'Help',
  HIDE_ARCHIVED_CLASSES: 'Hide archived',
  HIDE_MISSIONS_ENDED: 'Hide ended',
  IMAGE: 'Image',
  IMPORT: 'Import',
  IN_THE_ACHIEVEMENT: 'in the achievement',
  INSERT_CLASS_CODE: 'Insert a class code',
  INSERT_EMAIL_CORRECT: 'Insert an email valid',
  INTRODUCE_MISSION_NAME: 'Introduce a missions name',
  INTRODUCE_ADDITIONAL_POINTS: 'Introduce additional points for mission completion (Optional)',
  ITEM: 'Item',
  ITEMS: 'Items',
  LEVEL_IN_CLASS: 'Level in class',
  LEVEL_TITLE: 'Title',
  LEVEL_LEVEL: 'Level',
  LEVEL_REQUIRED_POINTS: 'Required points',
  LEVELS_CONFIGURATION: 'Levels configuration',
  LOCKED_ACHIVEMENTS: 'Locked achievements',
  LOCKED_ITEMS: 'Locked items',
  LOCKED_REWARDS: 'Locked rewards',
  LOG_OUT: 'Log out', 
  LOG_STUDENT: 'Log in as student',
  LOG_TEACHER: 'Log in as teacher',
  MAX_LEVEL: 'Max level',
  MAX_SCORE: 'Max score',
  MAX_SCORE_ESTABLISEHD: 'max score has been established',
  MAX_SCORE_WILL_ESTABLISH: 'the max score will be established',
  MESSAGE: 'Message',
  MISSION: 'Mission',
  MISSIONS: 'Missions',
  MISSIONS_ENDED: 'Missions ended',
  NAME: 'Name ',
  NEEDED_POINTS: 'Needed points',
  NEW_ACHIEVEMENT: 'New Achievement',
  NEW_CLASS: 'New class',
  NEW_ITEM: 'New Item',
  NEW_LEVEL: 'New level',
  NEW_REWARD: 'New reward',
  NEW_STUDENT: 'New Student',
  NEXT: 'Next',
  NONE: 'None',
  NOTIFICATION_OF_MISSION: 'The mission',
  NOTIFICATION_OF_STUDENT: 'The student',
  NOTIFICATION_HAS_LOST: 'You have lost',
  NOTIFICATION_HAS_WIN: 'You have won',
  NOTIFICATION_REWARD_OBTAINED: 'has obtained the reward',
  NOTIFICATION_REWARD_SPENT: 'has used the reward',
  NOTIFICATIONS: 'Notifications',
  NOT_ENOUGH_POINTS: 'You don\'t have enough point to buy',
  OPENING: 'Opening',
  PASSWORD: 'Password',
  PASSWORD_CHANGED: 'Password changed',
  PENDING_MISSIONS: 'Pending missions',
  PERMISSION: 'Permission',
  POINTS_IN_ITEM: 'Item\'s points',
  POINTS_ON_THE_ITEM: 'points in the item',
  PRICE: 'Price',
  PROFILE: 'Profile',
  QUANTITY: 'Quantity',
  RANDOM_STUDENT: 'Random student',
  RANDOM_TEAM: 'Random team',
  REQUIREMENTS: 'Requirements',
  REWARD: 'Reward',
  REWARDS: 'Rewards',
  REWARD_SHOP: 'Rewards shop',
  RULES: 'Rules',
  SAVE_CHANGES: 'Save changes',
  SCORE: 'Score',
  SEE_ARCHIVED_CLASSES: 'Show archived',
  SEE_CLASS_HASHCODE: 'See classroom\'s hashcode',
  SEE_CLASS_SHOP: 'Show classroom\'s shop',
  SEE_MISSIONS: 'Show misions',
  SEE_MISSIONS_ENDED: 'Show ended',
  SEE_RULES: 'Show rules',
  SEE_TEAMS: 'Show teams',
  SELECT: 'Select',
  SELECT_ACHIEVEMENTS: 'Select achievements',
  SELECT_CLASSROOMS: 'Select classrooms',
  SELECT_ITEMS: 'Select items',
  SELECT_MISIONS: 'Select missions',
  SELECT_QUANTITY_RANDOM_TEAMS: 'Select quantity of random teams to create',
  SELECT_REWARDS: 'Select rewards',
  SELECT_STUDENTS: 'Select students',
  SELECT_TEAMS: 'Select teams',
  SELECT_YOUR_CLASS: 'Select your class',
  SEND_MESSAGE: 'Send message',
  SET_ATTENDANCE_FOR_TODAY: 'Set attendance for today',
  SETTINGS: 'Settings',
  SCHOOL: 'School',
  SCHOOL_NOT_ESTABLISHED: 'Not established',
  SIGN_UP: 'Sign up',
  STUDENT: 'Student',
  STUDENT_DOESNT_HAVE_ENOUGH_POINTS: 'Student doesn\'t have enough points to remove in the item',
  STUDENTS: 'Students',
  STUDENTS_VIEW: 'Student\'s view',
  SURNAME: 'Surname',
  TAKE_ATTENDANCE: 'Take attendance',
  TAKE_PICTURE: 'Take picture',
  TEACHER: 'Teacher',
  TEACHER_MESSAGE: 'Teacher\'s message',
  TEAMS: 'Teams',
  TEAM_OBJECTIVE: 'Objective',
  TERMS_CONDITIONS: 'Terms and conditions',
  TOTAL_POINTS_CLASS: 'Total points',
  UNARCHIVE_CLASSES: 'Unarchive classrooms',
  UNLOCKED_ACHIEVEMENTS: 'Unlocked achievements',
  UNLOCKED_ITEMS: 'Unlocked items',
  UNLOCKED_REWARDS: 'Unlocked rewards',
  USE_DEFAULT_POINT: 'Use default points',
  UPLOAD_AVATAR: 'Upload avatar',
  USE_FOR_LEVEL: 'Use for level',
  USER_NOT_FOUND: 'User not found',
  USE_REWARD: 'Use reward',
  VERIFY_EMAIL: 'Verify your email to get access to your account',
  WRONG_CREDENTIALS: 'Email or password is wrong',
  YOU_HAVE_NOTIFICATIONS: 'You have notifications',
  YOU_WIN_REWARD: 'You have win the reward',
  YOUR_ACTUAL_LEVEL: 'Your actual level',
  YOUR_PASSWORD: 'Your Password',
  ZERO_SCORE_ESTABLISHED: 'the score has been established to 0',
  ZERO_SCORE_WILL_ESTABLISH: 'the score will be established to 0',
};
 
var translationsES= {
  
  ABOUT: 'Acerca de',
  ACCEPT: 'Aceptar',
  ACCOUNT_STUDENT_NOT_EXIST: 'No existe esa cuenta de alumno',
  ACCOUNT_TEACHER_NOT_EXIST: 'No existe esa cuenta de profesor',
  ACHIEVEMENT: 'Logro',
  ACTIONS_ACHIEVEMENTS: 'Acciones logros',
  ACTIONS_CLASSROOM_STUDENTS: 'Acciones estudiantes',
  ACTIONS_CLASSROOM_TEAMS: 'Aciones equipos',
  ACTIONS_ITEMS: 'Acciones items',
  ACTION_MISSIONS: 'Acciones misiones',
  ACTIONS_TEACHER_HOME: 'Acciones página principal',
  ACTIONS_REWARDS: 'Acciones recompensas',
  ADD_ACHIEVEMENT: 'Añadir logro',
  ADD_CLASS: 'Añadir clase',
  ADD_ITEM: 'Añadir item',
  ADD_LEVEL: 'Añadir nivel',
  ADD_REWARD: 'Añadir recompensa',
  ADD_STUDENT: 'Añadir estudiante',
  ADD_TEAM: 'Añadir equipo',
  ADDITIONAL_POINTS_MISSION: 'Puntos adicionales (Opcional)',
  ALREADY_HAVE_AN_ACCOUNT: '¿Ya tienes cuenta?',
  ASSIGN_STUDENT_TO_TEAM: 'Asignar a un estudiante al equipo...',
  ARCHIVE_CLASSES: 'Archivar clases',
  AVAILABLE_POINTS: 'Puntos disponibles',
  AVATAR: 'Avatar',
  BACKUP: 'Copia de seguridad',
  BADGE: 'Medalla',
  BECAUSE_COMPLETE_MISSION: 'por completar la misión',
  BUTTON_LANG_DE: 'Alemán',
  BUTTON_LANG_EN: 'Inglés',
  BUTTON_LANG_ES: 'Español',
  BUTTON_LANG_HU: 'Hungaro',
  BUTTON_LANG_IT: 'Italiano',
  BUTTON_LANG_RU: 'Ruso',
  BUTTON_LANG_TR: 'Turco',
  BUY_REWARDS: 'Comprar recompensas',
  CANCEL: 'Cancelar',
  CANT_ASK_MORE_SCORE_THAN_MAX: 'No puede pedir más puntuación de la máxima establecida en el item',
  CANT_CREATE_MORE_TEAMS_THAN_STUDENT: 'No puede crear más equipos que alumnos',
  CHANGE_AVATAR: 'Cambiar avatar',
  CHANGE_SCORE: 'Cambiar puntuación',
  CHECK_EMAIL_TO_VERIFY: 'Revisa tu correo electronico para restablecer tu contraseña',
  CLASS_NAME: 'Nombre de la clase',
  CLASS_CODE: 'Código de la clase',
  CLASS_CLOSED: 'La clase se encuentra cerrada',
  CLASSES_ARCHIVED: 'Clases archivadas',
  CLEAR_NOTIFICATIONS: 'Limpiar notificaciones',
  CONFIGURE_LEVELS: 'Configurar niveles',
  CONFIRM_PASSWORD: 'Confirmar contraseña',
  COPY_STUDENT_TO_ANOTHER_CLASS: 'Copiar estudiante a otra clase',
  CREATE: 'Crear',
  CREATE_RANDOM_TEAMS: 'Create random teams',
  CREATE_DEMO_CLASS: 'Crear clase demo',
  DATA_CHANGED: 'Datos cambiados',
  DELETE: 'Eliminar',
  DELETE_ACHIEVEMENTS: 'Borrar logro(s)',
  DELETE_CLASSROOMS: 'Borrar clase(s)',
  DELETE_ITEMS: 'Borrar item(s)',
  DELETE_MISSIONS: 'Borrar mision(es)',
  DELETE_REWARDS: 'Borrar recompensas(s)',
  DELETE_STUDENTS: 'Borrar alumno(s)',
  DELETE_TEAMS: 'Borrar equipo(s)',
  DESCRIPTION: 'Descripción',
  DONT_HAVE_ACCOUNT: '¿No tienes una cuenta?',
  EDIT: 'Editar',
  EDIT_ACHIEVEMENT: 'Editar logro',
  EDIT_ITEMS: 'Editar items',
  EDIT_LEVEL: 'Editar nivel',
  EDIT_MEMBERS: 'Editar miembros',
  EDIT_REWARD: 'Editar recompensa',
  EDIT_REWARDS: 'Editar recompensas',
  EDIT_STUDENTS: 'Editar estudiantes',
  EDIT_TEAM: 'Editar equipo',
  EMAIL: 'Correo',
  EMAIL_ALREADY_USED: 'El email indicado ya se encuentra en uso',
  EMAI_AUTOGENERATE: 'El email sera autogenerado',
  EMAIL_CHANGED: 'Email cambiado',
  EMAIL_EXAMPLE: 'ejemplo@ejemplo.com',
  EMAIL_INVALID: 'Email invalido',
  EMAIL_OF_ACCOUNT: 'Tu email',
  ERROR_ACCESS_UNKNOW: 'Error desconocido',
  ERROR_WEAK_PASSWORD: 'La contraseña debe ser de al menos 6 caracteres',
  EVALUATE_STUDENTS: 'Evaluar estudiante(s)',
  EVALUATE_TEAMS: 'Evaluar estudiante(s)',
  EXPORT: 'Exportar',
  FILE_INVALID: 'El archivo no es una imagen válida',
  FORGOT_PASSWORD: '¿Se te olvidó tu contraseña?',
  HAS_FINISHED: 'ha finalizado',
  HAS_FINISHED_MISSION: 'ha terminado la misión',
  HAS_LOST_MIN_POINTS_IN_ITEM: 'ha perdido más puntuacion de la máxima establecida en el item',
  HAS_LOST_ACHIEVEMENT: 'ha perdido el logro',
  HAS_RECIBED_MAX_POINTS_IN_ITEM: 'ha recibido más puntos de la máxima establecida en el item',
  HAS_UNLOCKED_LEVEL_ACHIEVEMENT: 'ha desbloqueado el nivel',
  HAVE_FINISHED_MISSION: 'Has terminado la misión',
  HAVE_LOST_ACHIEVEMENT: 'Has perdido el logro',
  HAVE_UNLOCKED_LEVEL_ACHIEVEMENT: 'Has desbloqueado el nivel',
  HELP: 'Ayuda',
  HIDE_ARCHIVED_CLASSES: 'Ocultar archivadas',
  HIDE_MISSIONS_ENDED: 'Ocultar finalizadas',
  IMAGE: 'Imagen',
  IMPORT: 'Importar',
  IN_THE_ACHIEVEMENT: 'en el logro',
  INSERT_CLASS_CODE: 'Introduzca un código de clase',
  INSERT_EMAIL_CORRECT: 'Introduzca un email correcto',
  INTRODUCE_MISSION_NAME: 'Introduzca un nombre de misión',
  INTRODUCE_ADDITIONAL_POINTS: 'Introduzca puntos adicionales por completar misión (Opcional)',
  ITEM: 'Item',
  ITEMS: 'Items',
  LEVEL_IN_CLASS: 'Nivel en clase',
  LEVEL_TITLE: 'Título',
  LEVEL_LEVEL: 'Nivel',
  LEVEL_REQUIRED_POINTS: 'Puntos requeridos',
  LEVELS_CONFIGURATION: 'Configuración de niveles',
  LOCKED_ACHIVEMENTS: 'Logros bloqueados',
  LOCKED_ITEMS: 'Items bloqueados',
  LOCKED_REWARDS: 'Recompensas bloqueadas',
  LOG_OUT: 'Cerrar sesión',
  LOG_STUDENT: 'Iniciar sesión como estudiante',
  LOG_TEACHER: 'Ingresar como profesor',
  MAX_LEVEL: 'Máximo nivel',
  MAX_SCORE: 'Puntuación máxima',
  MAX_SCORE_ESTABLISEHD: 'se ha establecido la máxima puntuación',
  MAX_SCORE_WILL_ESTABLISH: 'la máxima puntuación será establecida',
  MESSAGE: 'Mensaje',
  MISSION: 'Misión',
  MISSIONS: 'Misiones',
  MISSIONS_ENDED: 'Missiones terminadas',
  NAME: 'Nombre ',
  NEEDED_POINTS: 'Puntos necesarios',
  NEW_ACHIEVEMENT: 'Nuevo logro',
  NEW_CLASS: 'Nueva clase',
  NEW_ITEM: 'Nuevo item',
  NEW_LEVEL: 'Nuevo nivel',
  NEW_REWARD: 'Nueve recompensa',
  NEW_STUDENT: 'Nuevo Estudiante',
  NEXT: 'Siguiente',
  NONE: 'Ninguna',
  NOTIFICATION_OF_MISSION: 'La mision',
  NOTIFICATION_OF_STUDENT: 'El alumno',
  NOTIFICATION_HAS_LOST: 'Has perdido',
  NOTIFICATION_HAS_WIN: 'Has ganado',
  NOTIFICATION_REWARD_OBTAINED: 'ha obtenido la recompensa',
  NOTIFICATION_REWARD_SPENT: 'ha usado la recompensa',
  NOTIFICATIONS: 'Notificaciones',
  NOT_ENOUGH_POINTS: 'No tienes puntos suficientes para comprar',
  OPENING: 'Apertura',
  PASSWORD: 'Contraseña',
  PASSWORD_CHANGED: 'Contraseña cambiada',
  PENDING_MISSIONS: 'Misiones pendientes',
  PERMISSION: 'Permiso',
  POINTS_IN_ITEM: 'Puntos del item',
  POINTS_ON_THE_ITEM: 'puntos en el item',
  PRICE: 'Precio',
  PROFILE: 'Perfil',
  QUANTITY: 'Cantidad',
  RANDOM_STUDENT: 'Estudiante aleatorio',
  RANDOM_TEAM: 'Equipo aleatorio',
  REQUIREMENTS: 'Requisitos',
  REWARD: 'Recompensa',
  REWARDS: 'Recompensas',
  REWARD_SHOP: 'Tienda de recompensas',
  RULES: 'Reglas',
  SAVE_CHANGES: 'Salvar cambios',
  SCORE: 'Puntuación',
  SEE_ARCHIVED_CLASSES: 'Ver archivadas',
  SEE_CLASS_HASHCODE: 'Ver hashcode de la clase',
  SEE_CLASS_SHOP: 'Ver tienda de clase',
  SEE_MISSIONS: 'Ver misiones',
  SEE_MISSIONS_ENDED: 'Ver finalizadas',
  SEE_RULES: 'Ver reglas',
  SEE_TEAMS: 'Ver equipos',
  SELECT: 'Seleccionar',
  SELECT_ACHIEVEMENTS: 'Selecciona logros',
  SELECT_CLASSROOMS: 'Selecciona clases',
  SELECT_ITEMS: 'Selecciona items',
  SELECT_MISIONS: 'Selecciona misiones',
  SELECT_QUANTITY_RANDOM_TEAMS: 'Selecciona cantidad de equipos a crear',
  SELECT_REWARDS: 'Selecciona recompensas',
  SELECT_STUDENTS: 'Seleccionar estudiantes',
  SELECT_TEAMS: 'Selecciona equipos',
  SELECT_YOUR_CLASS: 'Selecciona tu clase',
  SEND_MESSAGE: 'Enviar mensaje',
  SET_ATTENDANCE_FOR_TODAY: 'Fijar la asistencia para hoy',
  SETTINGS: 'Ajustes',
  SCHOOL: 'Escuela',
  SCHOOL_NOT_ESTABLISHED: 'No establecida',
  SIGN_UP: 'Registrarse',
  STUDENT: 'Estudiante',
  STUDENTS: 'Estudiantes',
  STUDENT_DOESNT_HAVE_ENOUGH_POINTS: 'El alumno no dispone de suficientes puntos en el item',
  STUDENTS_VIEW: 'Viste de alumnos',
  SURNAME: 'Apellido',
  TAKE_ATTENDANCE: 'Tomar asistencia',
  TAKE_PICTURE: 'Seleccionar foto',
  TEACHER: 'Profesor',
  TEACHER_MESSAGE: 'Mensaje de profesor',
  TEAMS: 'Equipos',
  TEAM_OBJECTIVE: 'Objetivo',
  TERMS_CONDITIONS: 'Términos y condiciones',
  TOTAL_POINTS_CLASS: 'Puntos totales',
  UNARCHIVE_CLASSES: 'Desarchivar clases',
  UNLOCKED_ACHIEVEMENTS: 'Logros desbloqueados',
  UNLOCKED_ITEMS: 'Items desbloqueados',
  UNLOCKED_REWARDS: 'Recompensas desbloqueadas',
  UPLOAD_AVATAR: 'Subir avatar',
  USE_DEFAULT_POINT: 'Usar puntos por defecto',
  USE_FOR_LEVEL: 'Usar para nivel',
  USER_NOT_FOUND: 'Usuario no encontrado',
  USE_REWARD: 'Usar recompensa',
  WRONG_CREDENTIALS: 'Email o contraseña son incorrectos',
  VERIFY_EMAIL: 'Verifique su correo para poder acceder a su cuenta',
  YOU_HAVE_NOTIFICATIONS: 'Tienes notificaciones',
  YOU_WIN_REWARD: 'Has ganado la recompensa',
  YOUR_ACTUAL_LEVEL: 'Tu nivel actual',
  YOUR_PASSWORD: 'Tu contraseña',
  ZERO_SCORE_ESTABLISHED: 'se ha establecida la puntuación a 0',
  ZERO_SCORE_WILL_ESTABLISH: 'la puntuación será establecida a 0',
};

var translationsIT= {
  
  ACCEPT: 'Accetta',
  ADD_ITEM: 'Aggiungi oggetto',
  ADD_STUDENT: 'Aggiungi studente',
  ADD_TEAM: 'Aggiungi squadra',
  ALREADY_HAVE_AN_ACCOUNT: 'Hai già un account?',
  ASSIGN_STUDENT_TO_TEAM: 'Assegna studente a squadra...',
  AVATAR: 'Immagine profilo',
  BUTTON_LANG_DE: 'Tedesco',
  BUTTON_LANG_EN: 'Inglese',
  BUTTON_LANG_ES: 'Spagnolo',
  BUTTON_LANG_HU: 'Ungherese',
  BUTTON_LANG_IT: 'Italiano',
  BUTTON_LANG_RU: 'Russo',
  BUTTON_LANG_TR: 'Turco',
  CANCEL: 'Annulla',
  CHANGE_AVATAR: 'Cambia avatar',
  CLASS_NAME: 'Nome della classe',
  CONFIRM_PASSWORD: 'Conferma password',
  COPY_STUDENT_TO_ANOTHER_CLASS: 'Copia studente su un\'altra classe',
  CREATE: 'Crea',
  DELETE: 'Elimina',
  DESCRIPTION: 'Descrizione',
  DONT_HAVE_ACCOUNT: 'Non hai un account?',
  EDIT_TEAM: 'Modifica squadra',
  EMAIL: 'Email',
  EMAIL_ALREADY_USED: 'Email già in uso',
  EMAIL_EXAMPLE: 'esempio@esempio.com',
  EXPORT: 'Esporta',
  FORGOT_PASSWORD: 'Hai dimenticato la password?',
  IMPORT: 'Importa',
  ITEM: 'Oggetto',
  ITEMS: 'Oggetti',
  LOG_OUT: 'Esci', 
  LOG_STUDENT: 'Entra come studente',
  LOG_TEACHER: 'Entra come professore',
  MAX_SCORE: 'Punteggio massimo',
  MISSIONS: 'Missioni',
  NAME: 'Nome ',
  NEW_ACHIEVEMENT: 'Nuovo traguardo',
  NEW_CLASS: 'Nuova classe',
  NEW_ITEM: 'Nuovo oggetto',
  NEW_STUDENT: 'Nuovo Studente',
  NONE: 'Nessuna',
  PASSWORD: 'Password',
  PROFILE: 'Profilo',
  REQUIREMENTS: 'Requisiti',
  RULES: 'Regole',
  SAVE_CHANGES: 'Salva cambiamenti',
  SCORE: 'Punteggio',
  SELECT: 'Seleziona',
  SELECT_YOUR_CLASS: 'Seleziona la tua classe',
  SET_ATTENDANCE_FOR_TODAY: 'Imposta la frequenza di oggi',
  SETTINGS: 'Impostazioni',
  SIGN_UP: 'Registrati',
  SURNAME: 'Cognome',
  TAKE_PICTURE: 'Seleziona foto',
  TEAMS: 'Squadre',
  UPLOAD_AVATAR: 'Carica avatar',
  YOUR_PASSWORD: 'La tua password',
};

var translationsTR = {
  
  ACCEPT: 'Onayla',
  ADD_ACHIEVEMENT: 'Kazanım Ekle',
  ADD_ITEM: 'Öğe Ekle',
  ADD_STUDENT: 'Öğrenci Ekle',
  ADD_TEAM: 'Ekip Ekle',
  ALREADY_HAVE_AN_ACCOUNT: 'Hesabınız Var mı?',
  ASSIGN_STUDENT_TO_TEAM: 'Öğrenciyi bir ekipte görevlendir',
  AVATAR: 'Avatar',
  BUTTON_LANG_DE: 'Almanca',
  BUTTON_LANG_EN: 'İngilizce',
  BUTTON_LANG_ES: 'İspanyolca',
  BUTTON_LANG_HU: 'Macarca',
  BUTTON_LANG_IT: ' İtalyanca',
  BUTTON_LANG_RU: 'Rus',
  BUTTON_LANG_TR: 'Türkçe',
  CANCEL: 'İptal',
  CHANGE_AVATAR: 'Avatar Değiştir',
  CLASS_NAME: 'Sınıf Adı',
  CONFIRM_PASSWORD: 'Şifreyi Tekrar et',
  COPY_STUDENT_TO_ANOTHER_CLASS: 'Öğrenciyi başka sınıfa kopyala',
  CREATE: 'Yarat',
  DELETE: 'Sil',
  DESCRIPTION: 'Açıklama',
  DONT_HAVE_ACCOUNT: ' Hesabınız Yok mu?',
  EDIT_TEAM: 'Ekibi Düzenle',
  EMAIL: 'E-Posta',
  EMAIL_ALREADY_USED: 'E-posta zaten kullanılmış',
  EMAIL_EXAMPLE: 'example@example.com',
  EXPORT: 'Dışarı Aktar',
  FORGOT_PASSWORD: 'Şifremi Unuttum',
  IMPORT: 'İçeri Aktar',
  ITEM: 'Öğe',
  ITEMS: 'Maddeler',
  LOG_OUT: 'Çıkış', 
  LOG_STUDENT: ' Öğrenci Girişi',
  LOG_TEACHER: ' Öğretmen Girişi ',
  MAX_SCORE: 'Maksimum Skor',
  MISSIONS: 'Görevler',
  NAME: 'İsim',
  NEW_ACHIEVEMENT: 'Yeni Kazanım',
  NEW_CLASS: 'Yeni Sınıf',
  NEW_ITEM: 'Yeni Öğe',
  NEW_STUDENT: 'Yeni Öğrenci',
  NONE: 'Yok',
  PASSWORD: ' Şifre ',
  PROFILE: 'Profil',
  REQUIREMENTS: 'Gereksinimler',
  RULES: 'Kurallar',
  SAVE_CHANGES: 'Değişiklikleri Kaydet',
  SCORE: 'Skor',
  SELECT: 'Seç',
  SELECT_YOUR_CLASS: 'Sınıf Seç',
  SET_ATTENDANCE_FOR_TODAY: 'Günlük Katılım Düzenle',
  SETTINGS: 'Ayarlar',
  SIGN_UP: 'Kayıt Ol',
  SURNAME: 'Soyadı',
  TAKE_PICTURE: 'Fotoğraf Çek',
  TEAMS: 'Ekipler',
  UPLOAD_AVATAR: 'Avatar Yükle',
  YOUR_PASSWORD: 'Şifreniz',
};

var translationsDE = {
  
  ACCEPT: 'Annehmen',
  ADD_ACHIEVEMENT: 'Leistung hinzufuegen',
  ADD_ITEM: 'Element hinzufuegen',
  ADD_STUDENT: 'Schueler hinzufuegen',
  ADD_TEAM: 'Team hinzufuegen',
  ALREADY_HAVE_AN_ACCOUNT: 'Account vorhanden?',
  ASSIGN_STUDENT_TO_TEAM: 'Schueler zum Team… hinzufuegen',
  AVATAR: 'Avatar',
  BUTTON_LANG_DE: ' Deutsch',
  BUTTON_LANG_EN: 'Englisch',
  BUTTON_LANG_ES: 'Spanisch',
  BUTTON_LANG_HU: ' Ungarisch',
  BUTTON_LANG_IT: ' Italienisch',
  BUTTON_LANG_RU: 'Russisch',
  BUTTON_LANG_TR: ' Tuerkisch',
  CANCEL: 'Loeschen',
  CHANGE_AVATAR: 'Avatar wechslen',
  CLASS_NAME: 'Name der Klasse',
  CONFIRM_PASSWORD: 'Passwort bestaetigen',
  COPY_STUDENT_TO_ANOTHER_CLASS: 'Schueler zu einer anderen Klasse hinzufuegen',
  CREATE: 'Erstellen',
  DELETE: 'Loeschen',
  DESCRIPTION: 'Beschreibung',
  DONT_HAVE_ACCOUNT: ' Noch keinen Account?',
  EDIT_TEAM: 'Team bearbeiten',
  EMAIL: 'E-Mail',
  EMAIL_ALREADY_USED: 'E-Mail Adresse wird bereit benutzt',
  EMAIL_EXAMPLE: 'example@example.com',
  EXPORT: 'Export',
  FORGOT_PASSWORD: ' Passwort vergessen?',
  IMPORT: 'Import',
  ITEM: 'Element',
  ITEMS: 'Elemente',
  LOG_OUT: 'Abmelden', 
  LOG_STUDENT: ' Als Schueler anmelden',
  LOG_TEACHER: ' Als Lehrer anmelden',
  MAX_SCORE: 'Max Punkte',
  MISSIONS: 'Auftraege',
  NAME: 'Name',
  NEW_ACHIEVEMENT: 'Neue Leistung',
  NEW_CLASS: 'Neue Klasse',
  NEW_ITEM: 'Neues Element',
  NEW_STUDENT: 'Neuer Schueler',
  NONE: 'Keine',
  PASSWORD: 'Passwort',
  PROFILE: 'Profil',
  REQUIREMENTS: 'Voraussetzungen',
  RULES: 'Regeln',
  SAVE_CHANGES: 'Aenderungen sichern',
  SCORE: 'Punkte',
  SELECT: 'Auswaehlen',
  SELECT_YOUR_CLASS: 'Klasse auswaehlen',
  SET_ATTENDANCE_FOR_TODAY: 'Anwesenheit fuer heute festlegen',
  SETTINGS: 'Einstellungen',
  SIGN_UP: 'Anmelden',
  SURNAME: 'Nachname',
  TAKE_PICTURE: 'Foto aufnehmen',
  TEAMS: 'Teams',
  UPLOAD_AVATAR: 'Avatar hochladen',
  YOUR_PASSWORD: 'Dein Passwort',
};


var translationsHU = {

  ACCEPT: 'Elfogadás',
  ADD_ACHIEVEMENT: 'Új cél hozzáadása',
  ADD_ITEM: 'Elem hozzáadása',
  ADD_STUDENT: 'Hallgató hozzáadása',
  ADD_TEAM: 'Csoport hozzáadása',
  ALREADY_HAVE_AN_ACCOUNT: 'Már van fiókja?',
  ASSIGN_STUDENT_TO_TEAM: 'Hallgató hozzáadása ehhez a csoporthoz...',
  AVATAR: 'Avavtár',
  BUTTON_LANG_DE: 'Német',
  BUTTON_LANG_EN: 'Angol',
  BUTTON_LANG_ES: 'Spanyol',
  BUTTON_LANG_HU: 'Magyar',
  BUTTON_LANG_IT: 'Olasz',
  BUTTON_LANG_RU: 'Orosz',
  BUTTON_LANG_TR: 'Török',
  CANCEL: 'Mégse',
  CHANGE_AVATAR: 'Avatár megváltoztatása',
  CLASS_NAME: 'Csoport neve',
  CONFIRM_PASSWORD: 'Jelszó megerősítése',
  COPY_STUDENT_TO_ANOTHER_CLASS: 'Hallgató másolása másik csoporthoz',
  CREATE: 'Létrehozás',
  DELETE: 'Törlés',
  DESCRIPTION: 'Leírás',
  DONT_HAVE_ACCOUNT: 'Új fiók létrehozása',
  EDIT_TEAM: 'Csoport szerkesztése',
  EMAIL: 'E-mail',
  EMAIL_ALREADY_USED: 'A megadott email cím már használatban van',
  EMAIL_EXAMPLE: 'pelda@pelda.com',
  EXPORT: 'Exportálás',
  FORGOT_PASSWORD: 'Elfelejtett jelszó',
  IMPORT: 'Importálás',
  ITEM: 'Elem',
  ITEMS: 'Elemek',
  LOG_OUT: 'Kilépés',
  LOG_STUDENT: 'Belépés hallgatóként',
  LOG_TEACHER: 'Belépés tanárként',
  MAX_SCORE: 'Maximum pontszám',
  MISSIONS: 'Feladatok',
  NAME: 'Név',
  NEW_ACHIEVEMENT: 'Új célok',
  NEW_CLASS: 'Új csoport',
  NEW_ITEM: 'Új elem',
  NEW_STUDENT: 'Új hallgató',
  NONE: 'Nincs',
  PASSWORD: 'Jelszó',
  PROFILE: 'Profil',
  REQUIREMENTS: 'Feltételek',
  RULES: 'Szabályok',
  SAVE_CHANGES: 'Változtatások mentése',
  SCORE: 'Pontszám',
  SELECT: 'Kiválaszt',
  SELECT_YOUR_CLASS: 'Csoport kiválasztása',
  SET_ATTENDANCE_FOR_TODAY: 'Jelenléti ív létrehozása mára',
  SETTINGS: 'Beállítások',
  SIGN_UP: 'Feliratkozás',
  SURNAME: 'Vezetéknév',
  TAKE_PICTURE: 'Fénykép hozzáadása',
  TEAMS: 'Csoportok',
  UPLOAD_AVATAR: 'Avatár feltöltése',
  YOUR_PASSWORD: 'Jelszó',
};

var translationsRU = {

  ACCEPT: 'Принимать',
  ADD_ACHIEVEMENT: 'Добавить достижение',
  ADD_ITEM: 'Добавить пункт',
  ADD_STUDENT: 'Добавить студента',
  ADD_TEAM: 'Добавить команду',
  ALREADY_HAVE_AN_ACCOUNT: 'Уже есть учетная запись?',
  ASSIGN_STUDENT_TO_TEAM: 'Назначить студента к команде...',
  AVATAR: 'Аватар',
  BUTTON_LANG_DE: 'Немецкий',
  BUTTON_LANG_EN: 'Английский',
  BUTTON_LANG_ES: 'Испанский',
  BUTTON_LANG_HU: 'венгерский',
  BUTTON_LANG_IT: 'Итальянский',
  BUTTON_LANG_RU: 'Русский',
  BUTTON_LANG_TU: 'Tурецкий',
  CANCEL: 'Отмена',
  CHANGE_AVATAR: 'Измененит аватар',
  CLASS_NAME: 'Имя класса',
  CONFIRM_PASSWORD: 'Подтвердите Пароль',
  COPY_STUDENT_TO_ANOTHER_CLASS: 'Копия студента к другому классу',
  CREATE: 'Создавать',
  DELETE: 'Удалить',
  DESCRIPTION: 'Описание',
  DONT_HAVE_ACCOUNT: 'Не имеет счёт?',
  EDIT_TEAM: 'Редактировать команда',
  EMAIL: 'Электронная почта',
  EMAIL_ALREADY_USED: 'Электронная почта уже используется',
  EMAIL_EXAMPLE: 'Пример@пример.com',
  EXPORT: 'Экспорт',
  FORGOT_PASSWORD: 'Забыли пароль?',
  IMPORT: 'Импорт',
  ITEM: 'Пункт',
  ITEMS: 'Пункты',
  LOG_OUT: 'Выйти',  
  LOG_STUDENT: 'Войти как студент',
  LOG_TEACHER: 'Войти как учитель',
  MAX_SCORE: 'Макс оценка',
  MISSIONS: 'Задании',
  NAME: 'Имя ',
  NEW_ACHIEVEMENT: 'новое достижение',
  NEW_CLASS: 'Новый класс',
  NEW_ITEM: 'Новый пункт',
  NEW_STUDENT: 'Новый студент',
  NONE: 'Никакой',
  PASSWORD: 'Пароль',
  PROFILE: 'Профиль',
  REQUIREMENTS: 'Требовании',
  RULES: 'Правила',
  SAVE_CHANGES: 'Сохранить изменения',
  SCORE: 'Oценка',
  SELECT: 'Выбрать',
  SELECT_YOUR_CLASS: 'Выберите класс',
  SET_ATTENDANCE_FOR_TODAY: 'Набор посещаемости на сегодняшний день',
  SETTINGS: 'Настройки',
  SIGN_UP: 'Зарегистрироваться',
  SURNAME: 'Фамилия',
  TAKE_PICTURE: 'Сделать фотографию',
  TEAMS: 'Команды',
  UPLOAD_AVATAR: 'Загрузить аватар',
  YOUR_PASSWORD: 'Ваш пароль',

};