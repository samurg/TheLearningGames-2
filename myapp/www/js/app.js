// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.loginController', 'app.settingsController', 'app.signUpController', 'app.studentController', 'app.teacherController', 'app.translationsController', 'app.routes', 'app.directives', 'app.services', 'ngCookies', 'pascalprecht.translate', 'ui.router', 'firebase', 'firebaseConfig'])

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
  
  BUTTON_LANG_ES: 'Spanish',
  BUTTON_LANG_EN: 'English',
  BUTTON_LANG_IT: 'Italian',
  BUTTON_LANG_TR: 'Turkish',
  BUTTON_LANG_DE: 'German',
  BUTTON_LANG_HU: 'Hungarian',
  BUTTON_LANG_RU: 'Russian',
  EMAIL: 'Email',
  PASSWORD: 'Password',
  LOG_TEACHER: 'Log in as teacher',
  LOG_STUDENT: 'Log in as student',
  FORGOT_PASSWORD: 'Forgot password?',
  DONT_HAVE_ACCOUNT: 'Don\'t have an account?',
  EMAIL_EXAMPLE: 'example@example.com',
  YOUR_PASSWORD: 'Your Password',
  HOME: 'Home',
  PROFILE: 'Profile',
  SETTINGS:'Settings',
  CLASS:'Class',
  ATTENDANCE:'Attendance',
  TEAMS:'Teams',
  RULES:'Rules',
  MISSIONS: 'Missions',
  ACHIEVEMENT_NAME:'Achievement name',
  ACHIEVEMENT_DESCRIPTION: 'Achievement description',
  REQUIREMENTS: 'Requirements: ',
  ADD_ACHIEVEMENT: 'Add achievement',
  NEW_ACHIEVEMENT: 'New Achievement',
  NAME:'Name ',
  DESCRIPTION:'Description: ',
  CANCEL:'Cancel',
  NEW_BADGE:'New Badge',
  ADD_BADGE:'Add badge',
  NEW_ITEM:'New Item',
  ADD_ITEM:'Add Item',
  ITEM_DESCRIPTION:'Item description',
  ITEM_NAME:'Item name',
  ADD_STUDENTS:'Add students',
  SET_ATTENDANCE_FOR_TODAY:'Set attendance for today',
  BADGE_DESCRIPTION:'Badge description',
  BADGE_NAME:'Badge name',
  ADD_STUDENT: 'Add student',
  DELETE:'Delete',
  UPLOAD_AVATAR: 'Upload avatar',
  ACCEPT:'Accept',
  ADD_MISSION:'Add mission',
  NEW_CLASS:'New Class',
  CLASS_NAME:'Class name',
  IMPORT_PREFERENCES_FROM:'Import preferences from',
  NONE:'none',
  CREATE:'Create',
  NEW_MISSION:'New Mission',
  PHASES:'Phases: ',
  NUMBER_OF_PHASES:'Number of phases',
  SCORES:'Scores: ',
  SCORES_DESCRIPTION:'Score1, Score2, Score3',
  GENERATE:'Generate',
  TAKE_PICTURE:'Take picture',
  SURNAME:'Surname',
  STREET:'Street',
  STUDENT_NAME:'Student name',
  CLASSROOM_NAME:'Classroom name',
  ASSIGN_STUDENT_TO_TEAM:'Assign student to team...S',
  SELECT:'Select',
  COPY_STUDENT_TO_ANOTHER_CLASS:'Copy student to another class',
  FULL_NAME:'Full name',
  CONFIRM_PASSWORD:'Confirm password',
  SIGN_UP:'Sign up',
  ALREADY_HAVE_AN_ACCOUNT:'Already have an account?',
  BADGE:'BADGE',
  VIEW_PROFILE:'View profile',
  LOG_OUT:'Log out',  
  ADRESS:'Adress',
  SAVE_CHANGES:'Save changes',
  CHANGE_AVATAR:'Change avatar',
  EDIT_TEAM:'Edit team',
  EXPORT:'Export',
  IMPORT:'Import',
  ARCHIVE:'Archive',
  SELECT_YOUR_CLASS:'Select your class',
  ADD_CLASS:'Add class',
  ACHIEVEMENTS:'Achievements',
  ITEMS:'Items',
  BADGES:'Badges',
  ADD_TEAM:'Add team',
  ITEM:'Item',
  LANGUAGES:'Languages',
  NEW_STUDENT:'New Student',
  AVATAR:'Avatar',
  EMAIL_ALREADY_USED: 'Email already used',
  CODE:'Code',
  YOUR_CODE:'Your code',
  LOGIN:'Log in',
  SCORE:'Score',
  MAX_SCORE:'Max score',
  EVALUATE:'Evaluate',
  SET_ITEM: 'Set score',
  POINTS: 'Points',
  SELECT_ITEM: 'Select an item',
  DEFAULT_POINTS: 'Default points',
};
 
var translationsES= {
  
  BUTTON_LANG_ES: 'Español',
  BUTTON_LANG_EN: 'Inglés',
  BUTTON_LANG_IT: 'Italiano',
  BUTTON_LANG_DE: 'Alemán',
  BUTTON_LANG_TR: 'Turco',
  BUTTON_LANG_HU: 'Hungaro',
  BUTTON_LANG_FR: 'Francés',
  BUTTON_LANG_RU: 'Ruso',
  EMAIL: 'Correo',
  PASSWORD: 'Contraseña',
  LOG_TEACHER: 'Ingresar como profesor',
  LOG_STUDENT: 'Iniciar sesión como estudiante',
  FORGOT_PASSWORD: '¿Se te olvidó tu contraseña?',
  DONT_HAVE_ACCOUNT: '¿No tienes una cuenta?',
  EMAIL_EXAMPLE: 'ejemplo@ejemplo.com',
  YOUR_PASSWORD: 'Tu contraseña',
  HOME: 'Inicio',
  PROFILE: 'Perfil',
  SETTINGS:'Ajustes',
  CLASS:'Clase',
  ATTENDANCE:'Asistencia',
  TEAMS:'Equipos',
  RULES:'Reglas',
  MISSIONS: 'Misiones',
  ACHIEVEMENT_NAME:'Nombre del logro',
  ACHIEVEMENT_DESCRIPTION: 'Descripción del logro',
  REQUIREMENTS: 'Requisitos: ',
  ADD_ACHIEVEMENT: 'Añadir logro',
  NEW_ACHIEVEMENT: 'Nuevo logro',
  NAME:'Nombre ',
  DESCRIPTION:'Descripción: ',
  CANCEL:'Cancelar',
  NEW_BADGE:'Nueva medalla',
  ADD_BADGE:'Añadir medalla',
  NEW_ITEM:'Nuevo item',
  ADD_ITEM:'Añadir item',
  ITEM_DESCRIPTION:'Descripción del item',
  ITEM_NAME:'Nombre del item',
  ADD_STUDENTS:'Añadir estudiantes',
  SET_ATTENDANCE_FOR_TODAY:'Fijar la asistencia para hoy',
  BADGE_DESCRIPTION:'Descripción de medalla',
  BADGE_NAME:'Nombre de la medalla',
  ADD_STUDENT: 'Añadir estudiante',
  DELETE:'Eliminar',
  UPLOAD_AVATAR: 'Subir avatar',
  ACCEPT:'Aceptar',
  ADD_MISSION:'Añadir misión',
  NEW_CLASS:'Nueva clase',
  CLASS_NAME:'Nombre de la clase',
  IMPORT_PREFERENCES_FROM:'Importar preferencias de',
  NONE:'ninguna',
  CREATE:'Crear',
  NEW_MISSION:'Nueva Misión',
  PHASES:'Fases: ',
  NUMBER_OF_PHASES:'Numero de fases',
  SCORES:'Puntuaciones: ',
  SCORES_DESCRIPTION:'Puntuación1, Puntuación2, Puntuación3',
  GENERATE:'Generar',
  TAKE_PICTURE:'Seleccionar foto',
  SURNAME:'Apellido',
  STREET:'Calle',
  STUDENT_NAME:'Nombre estudiante',
  CLASSROOM_NAME:'Nombre de clase',
  ASSIGN_STUDENT_TO_TEAM:'Asignar a un estudiante al equipo...',
  SELECT:'Seleccionar',
  COPY_STUDENT_TO_ANOTHER_CLASS:'Copiar estudiante a otra clase',
  FULL_NAME:'Nombre entero',
  CONFIRM_PASSWORD:'Confirmar contraseña',
  SIGN_UP:'Registrarse',
  ALREADY_HAVE_AN_ACCOUNT:'¿Ya tienes cuenta?',
  BADGE:'Medalla',
  VIEW_PROFILE:'Ver perfil',
  LOG_OUT:'Cerrar sesión',  
  ADRESS:'Dirección',
  SAVE_CHANGES:'Salvar cambios',
  CHANGE_AVATAR:'Cambiar avatar',
  EDIT_TEAM:'Editar equipo',
  EXPORT:'Exportar',
  IMPORT:'Importar',
  ARCHIVE:'Archivar',
  SELECT_YOUR_CLASS:'Selecciona tu clase',
  ADD_CLASS:'Crear clase',
  ACHIEVEMENTS:'Logros',
  BADGES:'Medallas',
  ITEMS:'Items',
  ADD_TEAM:'Añadir equipo',
  ITEM:'Item',
  LANGUAGES:'Idiomas',
  NEW_STUDENT:'Nuevo Estudiante',
  AVATAR:'Avatar',
  EMAIL_ALREADY_USED: 'Email already used',
  CODE:'Código',
  YOUR_CODE:'Tu código',
  LOGIN:'Entrar',
  SCORE:'Puntuación',
  MAX_SCORE:'Puntuación máxima',
  EVALUATE:'Evaluar',
  SET_ITEM: 'Puntuar',
  POINTS: 'Puntos',
  SELECT_ITEM: 'Selecciona un item',
  DEFAULT_POINTS: 'Puntos por defecto',
};

var translationsIT= {
  
  BUTTON_LANG_ES: 'Spagnolo',
  BUTTON_LANG_EN: 'Inglese',
  BUTTON_LANG_IT: 'Italiano',
  BUTTON_LANG_DE: 'Tedesco',
  BUTTON_LANG_TR: 'Turco',
  BUTTON_LANG_HU: 'Ungherese',
  BUTTON_LANG_FR: 'Francese',
  BUTTON_LANG_RU: 'Russo',
  EMAIL: 'Email',
  PASSWORD: 'Password',
  LOG_TEACHER: 'Entra come professore',
  LOG_STUDENT: 'Entra come studente',
  FORGOT_PASSWORD: 'Hai dimenticato la password?',
  DONT_HAVE_ACCOUNT: 'Non hai un account?',
  EMAIL_EXAMPLE: 'esempio@esempio.com',
  YOUR_PASSWORD: 'La tua password',
  HOME: 'Home',
  PROFILE: 'Profilo',
  SETTINGS:'Impostazioni',
  CLASS:'Classe',
  ATTENDANCE:'Frequenza',
  TEAMS:'Squadre',
  RULES:'Regole',
  MISSIONS: 'Missioni',
  ACHIEVEMENT_NAME:'Nomde del traguardo',
  ACHIEVEMENT_DESCRIPTION: 'Descrizione del traguardo',
  REQUIREMENTS: 'Requisiti: ',
  ADD_ACHIEVEMENT: 'Aggiungi traguardo',
  NEW_ACHIEVEMENT: 'Nuovo traguardo',
  NAME:'Nome ',
  DESCRIPTION:'Descrizione: ',
  CANCEL:'Annulla',
  NEW_BADGE:'Nuova medaglia',
  ADD_BADGE:'Aggiungi medaglia',
  NEW_ITEM:'Nuovo oggetto',
  ADD_ITEM:'Aggiungi oggetto',
  ITEM_DESCRIPTION:'Descrizione dell\'oggetto',
  ITEM_NAME:'Nome dell\'oggetto',
  ADD_STUDENTS:'Aggiungi studente',
  SET_ATTENDANCE_FOR_TODAY:'Imposta la frequenza di oggi',
  BADGE_DESCRIPTION:'Descrizione della medaglia',
  BADGE_NAME:'Nome della medaglia',
  ADD_STUDENT: 'Aggiungi studente',
  DELETE:'Elimina',
  UPLOAD_AVATAR: 'Carica avatar',
  ACCEPT:'Accetta',
  ADD_MISSION:'Aggiungi missione',
  NEW_CLASS:'Nuova classe',
  CLASS_NAME:'Nome della classe',
  IMPORT_PREFERENCES_FROM:'Importa preferenze da...',
  NONE:'Nessuna',
  CREATE:'Crea',
  NEW_MISSION:'Nuova missione',
  PHASES:'Fasi: ',
  NUMBER_OF_PHASES:'Numero di fasi',
  SCORES:'Punteggi: ',
  SCORES_DESCRIPTION:'Punteggio1, Punteggio2, Punteggio3',
  GENERATE:'Genera',
  TAKE_PICTURE:'Seleziona foto',
  SURNAME:'Cognome',
  STREET:'Via',
  STUDENT_NAME:'Nome studente',
  CLASSROOM_NAME:'Nome della classe',
  ASSIGN_STUDENT_TO_TEAM:'Assegna studente a squadra...',
  SELECT:'Seleziona',
  COPY_STUDENT_TO_ANOTHER_CLASS:'Copia studente su un\'altra classe',
  FULL_NAME:'Nome completo',
  CONFIRM_PASSWORD:'Conferma password',
  SIGN_UP:'Registrati',
  ALREADY_HAVE_AN_ACCOUNT:'Hai già un account?',
  BADGE:'Medaglia',
  VIEW_PROFILE:'Visualizza profilo',
  LOG_OUT:'Esci',  
  ADRESS:'Indirizzo',
  SAVE_CHANGES:'Salva cambiamenti',
  CHANGE_AVATAR:'Cambia avatar',
  EDIT_TEAM:'Modifica squadra',
  EXPORT:'Esporta',
  IMPORT:'Importa',
  ARCHIVE:'Archivia',
  SELECT_YOUR_CLASS:'Seleziona la tua classe',
  ADD_CLASS:'Crea classe',
  ACHIEVEMENTS:'Traguardi',
  BADGES:'Medaglie',
  ITEMS:'Oggetti',
  ADD_TEAM:'Aggiungi squadra',
  ITEM:'Oggetto',
  LANGUAGES:'Lingue',
  NEW_STUDENT:'Nuovo Studente',
  AVATAR:'Immagine profilo',
  EMAIL_ALREADY_USED: 'Email già in uso',
  CODE:'Codice',
  YOUR_CODE:'Il tuo codice',
  LOGIN:'Entra',
  SCORE:'Punteggio',
  MAX_SCORE:'Punteggio massimo',
  EVALUATE:'Valuta',
  SET_ITEM: 'Imposta oggetto',
  POINTS: 'Punti',
  SELECT_ITEM: 'Seleziona oggetto',
  DEFAULT_POINTS: 'Punti base',
};

var translationsTR = {
  
  BUTTON_LANG_ES: 'İspanyolca',
  BUTTON_LANG_EN: 'İngilizce',
  BUTTON_LANG_DE: 'Almanca',
  BUTTON_LANG_TR: 'Türkçe',
  BUTTON_LANG_HU: 'Macarca',
  BUTTON_LANG_FR: 'Fransızca',
  BUTTON_LANG_IT: ' İtalyanca',
  BUTTON_LANG_RU: 'Rus',
  EMAIL: 'E-Posta',
  PASSWORD: ' Şifre ',
  LOG_TEACHER: ' Öğretmen Girişi ',
  LOG_STUDENT: ' Öğrenci Girişi',
  FORGOT_PASSWORD: 'Şifremi Unuttum',
  DONT_HAVE_ACCOUNT: ' Hesabınız Yok mu?',
  EMAIL_EXAMPLE: 'example@example.com',
  YOUR_PASSWORD: 'Şifreniz',
  HOME: 'Ana Sayfa ',
  PROFILE: 'Profil',
  SETTINGS:'Ayarlar',
  CLASS:'Sınıf',
  ATTENDANCE:'Devam-Devamsızlık',
  TEAMS:'Ekipler',
  RULES:'Kurallar',
  MISSIONS: 'Görevler',
  ACHIEVEMENT_NAME:'Kazanım Adı',
  ACHIEVEMENT_DESCRIPTION: 'Kazanım Açıklaması',
  REQUIREMENTS: 'Gereksinimler',
  ADD_ACHIEVEMENT: 'Kazanım Ekle',
  NEW_ACHIEVEMENT: 'Yeni Kazanım',
  NAME: 'İsim',
  DESCRIPTION: 'Açıklama',
  CANCEL: 'İptal',
  NEW_BADGE: 'Yeni Rozet',
  ADD_BADGE:'Rozet Ekle',
  NEW_ITEM:'Yeni Öğe',
  ADD_ITEM:'Öğe Ekle',
  ITEM_DESCRIPTION:'Öğe Açıklaması',
  ITEM_NAME:'Öğe Adı',
  ADD_STUDENTS:'Öğrenci Ekle',
  SET_ATTENDANCE_FOR_TODAY:'Günlük Katılım Düzenle',
  BADGE_DESCRIPTION:'Rozet Açıklaması',
  BADGE_NAME:'Rozet Adı',
  ADD_STUDENT: 'Öğrenci Ekle',
  DELETE:'Sil',
  UPLOAD_AVATAR: 'Avatar Yükle',
  ACCEPT:'Onayla',
  ADD_MISSION:'Görev Ekle',
  NEW_CLASS:'Yeni Sınıf',
  CLASS_NAME:'Sınıf Adı',
  IMPORT_PREFERENCES_FROM:'Tercihleri İçeri Aktar',
  NONE:'yok',
  CREATE:'Yarat',
  NEW_MISSION:'Yeni Görev',
  PHASES:'Aşamalar',
  NUMBER_OF_PHASES:'Aşama Sayısı',
  SCORES:'Skorlar',
  SCORES_DESCRIPTION:'Skor1, Skor2, Skor3',
  GENERATE:'Oluştur',
  TAKE_PICTURE:'Fotoğraf Çek',
  SURNAME:'Soyadı',
  STREET:'Sokak',
  STUDENT_NAME:'Öğrenci Adı',
  CLASSROOM_NAME:'Sınıf Adı',
  ASSIGN_STUDENT_TO_TEAM:'Öğrenciyi bir ekipte görevlendir',
  SELECT:'Seç',
  COPY_STUDENT_TO_ANOTHER_CLASS:'Öğrenciyi başka sınıfa kopyala',
  FULL_NAME:'Tam Adı',
  CONFIRM_PASSWORD:'Şifreyi Tekrar et',
  SIGN_UP:'Kayıt Ol',
  ALREADY_HAVE_AN_ACCOUNT:'Hesabınız Var mı?',
  BADGE:'Rozet',
  VIEW_PROFILE:'Profil görüntüle',
  LOG_OUT:'Çıkış',  
  ADRESS:'Adres',
  SAVE_CHANGES:'Değişiklikleri Kaydet',
  CHANGE_AVATAR:'Avatar Değiştir',
  EDIT_TEAM:'Ekibi Düzenle',
  EXPORT:'Dışarı Aktar',
  IMPORT:'İçeri Aktar',
  ARCHIVE:'Arşivle',
  SELECT_YOUR_CLASS:'Sınıf Seç',
  ADD_CLASS:'Sınıf Ekle',
  ACHIEVEMENTS:'Kazanımlar',
  ITEMS:'Maddeler',
  BADGES:'Rozetler',
  ADD_TEAM:'Ekip Ekle',
  ITEM:'Öğe',
  LANGUAGES:'Diller',
  NEW_STUDENT:'Yeni Öğrenci',
  AVATAR:'Avatar',
  EMAIL_ALREADY_USED: 'E-posta zaten kullanılmış',
  CODE:'Kod',
  YOUR_CODE:'Kodunuz',
  LOGIN:'Giriş Yap',
  SCORE:'Skor',
  MAX_SCORE:'Maksimum Skor',
  EVALUATE:'Degerlendir',
  SET_ITEM: 'Puan ekle',
  POINTS: 'Puanlar',
  SELECT_ITEM: 'Öge seç',
  DEFAULT_POINTS: 'Standard Puanlar'
};

var translationsDE = {
  
  BUTTON_LANG_ES: 'Spanisch',
  BUTTON_LANG_EN: 'Englisch',
  BUTTON_LANG_DE: ' Deutsch',
  BUTTON_LANG_TR: ' Tuerkisch',
  BUTTON_LANG_HU: ' Ungarisch',
  BUTTON_LANG_FR: ' Franzoesisch',
  BUTTON_LANG_IT: ' Italienisch',
  BUTTON_LANG_RU: 'Russisch',
  EMAIL: 'E-Mail',
  PASSWORD: 'Passwort',
  LOG_TEACHER: ' Als Lehrer anmelden',
  LOG_STUDENT: ' Als Schueler anmelden',
  FORGOT_PASSWORD: ' Passwort vergessen?',
  DONT_HAVE_ACCOUNT: ' Noch keinen Account?',
  EMAIL_EXAMPLE: 'example@example.com',
  YOUR_PASSWORD: 'Dein Passwort',
  HOME: ' Startseite',
  PROFILE: 'Profil',
  SETTINGS:'Einstellungen',
  CLASS:'Klasse',
  ATTENDANCE:'Anwesenheit',
  TEAMS:'Teams',
  RULES:'Regeln',
  MISSIONS: 'Auftraege',
  ACHIEVEMENT_NAME:'Bezeichnung der Leistung',
  ACHIEVEMENT_DESCRIPTION: 'Leistungsbeschreibung',
  REQUIREMENTS: 'Voraussetzungen',
  ADD_ACHIEVEMENT: 'Leistung hinzufuegen',
  NEW_ACHIEVEMENT: 'Neue Leistung',
  NAME: 'Name',
  DESCRIPTION: 'Beschreibung',
  CANCEL: 'Loeschen',
  NEW_BADGE: 'Neue Auszeichnung',
  ADD_BADGE:'Auszeichnung hinzufuegen',
  NEW_ITEM:'Neues Element',
  ADD_ITEM:'Element hinzufuegen',
  ITEM_DESCRIPTION:'Elementbeschreibung',
  ITEM_NAME:'Name des Elements',
  ADD_STUDENTS:'Schueler nizufuegen',
  SET_ATTENDANCE_FOR_TODAY:'Anwesenheit fuer heute festlegen',
  BADGE_DESCRIPTION:'Beschreibung der Auszeichnung',
  BADGE_NAME:'Bezeichnung der Auszeichnung',
  ADD_STUDENT: 'Schueler hinzufuegen',
  DELETE:'Loeschen',
  UPLOAD_AVATAR: 'Avatar hochladen',
  ACCEPT:'Annehmen',
  ADD_MISSION:'Auftrag hinzufuegen',
  NEW_CLASS:'Neue Klasse',
  CLASS_NAME:'Name der Klasse',
  IMPORT_PREFERENCES_FROM:'Einstellungen importieren von',
  NONE:'keine',
  CREATE:'Erstellen',
  NEW_MISSION:'Neuer Auftrag',
  PHASES:'Phasen',
  NUMBER_OF_PHASES:'Anzahl der Phasen',
  SCORES:'Punkte',
  SCORES_DESCRIPTION:'Punkte1, Punkte2, Punkte3',
  GENERATE:'Erstellen',
  TAKE_PICTURE:'Foto aufnehmen',
  SURNAME:'Nachname',
  STREET:'Strasse',
  STUDENT_NAME:'Name des Schuelers',
  CLASSROOM_NAME:'Name des Klassenzimmers',
  ASSIGN_STUDENT_TO_TEAM:'Schueler zum Team… hinzufuegen',
  SELECT:'Auswaehlen',
  COPY_STUDENT_TO_ANOTHER_CLASS:'Schueler zu einer anderen Klasse hinzufuegen',
  FULL_NAME:'Vollstaendiger Name',
  CONFIRM_PASSWORD:'Passwort bestaetigen',
  SIGN_UP:'Anmelden',
  ALREADY_HAVE_AN_ACCOUNT:'Account vorhanden?',
  BADGE:'Auszeichnung',
  VIEW_PROFILE:'Profil ansehen',
  LOG_OUT:'Abmelden',  
  ADRESS:'Adresse',
  SAVE_CHANGES:'Aenderungen sichern',
  CHANGE_AVATAR:'Avatar wechslen',
  EDIT_TEAM:'Team bearbeiten',
  EXPORT:'Export',
  IMPORT:'Import',
  ARCHIVE:'Archiv',
  SELECT_YOUR_CLASS:'Klasse auswaehlen',
  ADD_CLASS:'Klasse hinzufuegen',
  ACHIEVEMENTS:'Leistungen',
  ITEMS:'Elemente',
  BADGES:'Auszeichnungen',
  ADD_TEAM:'Team hinzufuegen',
  ITEM:'Element',
  LANGUAGES:'Sprache',
  NEW_STUDENT:'Neuer Schueler',
  AVATAR:'Avatar',
  EMAIL_ALREADY_USED: 'E-Mail Adresse wird bereit benutzt',
  CODE:'Code',
  YOUR_CODE:'Dein Code',
  LOGIN:'Anmelden',
  SCORE:'Punkte',
  MAX_SCORE:'Max Punkte',
  EVALUATE:'Evaluieren',
  SET_ITEM: 'Punkte festlegen',
  POINTS: 'Punkte',
  SELECT_ITEM: 'Element auswählen',
  DEFAULT_POINTS: 'Standardpunktezahl'
};


var translationsHU = {
  
  BUTTON_LANG_ES: 'Angol',
  BUTTON_LANG_EN: 'Spanyol',
  BUTTON_LANG_DE: 'Német',
  BUTTON_LANG_TR: 'Török',
  BUTTON_LANG_HU: 'Magyar',
  BUTTON_LANG_FR: 'Francia',
  BUTTON_LANG_IT: 'Olasz',
  BUTTON_LANG_RU: 'Orosz',
  EMAIL: 'E-mail',
  PASSWORD: 'Jelszó',
  LOG_TEACHER: 'Belépés tanárként',
  LOG_STUDENT: 'Belépés hallgatóként',
  FORGOT_PASSWORD: 'Elfelejtett jelszó',
  DONT_HAVE_ACCOUNT: 'Új fiók létrehozása',
  EMAIL_EXAMPLE: 'pelda@pelda.com',
  YOUR_PASSWORD: 'Jelszó',
  HOME: 'Kezdőlap',
  PROFILE: 'Profil',
  SETTINGS:'Beállítások',
  CLASS:'Osztály',
  ATTENDANCE:'Részvétel',
  TEAMS:'Csoportok',
  RULES:'Szabályok',
  MISSIONS: 'Feladatok',
  ACHIEVEMENT_NAME:'Cél neve',
  ACHIEVEMENT_DESCRIPTION: 'Cél leírása',
  REQUIREMENTS: 'Feltételek',
  ADD_ACHIEVEMENT: 'Új cél hozzáadása',
  NEW_ACHIEVEMENT: 'Új célok',
  NAME: 'Név',
  DESCRIPTION: 'Leírás',
  CANCEL: 'Mégse',
  NEW_BADGE: 'Új jelvény',
  ADD_BADGE:'Jelvény hozzáadása',
  NEW_ITEM:'Új elem',
  ADD_ITEM:'Elem hozzáadása',
  ITEM_DESCRIPTION:'Elem leírása',
  ITEM_NAME:'Elem neve',
  ADD_STUDENTS:'Hallgatók hozzáadása',
  SET_ATTENDANCE_FOR_TODAY:'Jelenléti ív létrehozása mára',
  BADGE_DESCRIPTION:'Jelvény leírása',
  BADGE_NAME:'Jelvény neve',
  ADD_STUDENT: 'Hallgató hozzáadása',
  DELETE:'Törlés',
  UPLOAD_AVATAR: 'Avatár feltöltése',
  ACCEPT:'Elfogadás',
  ADD_MISSION:'Feladat hozzáadása',
  NEW_CLASS:'Új csoport',
  CLASS_NAME:'Csoport neve',
  IMPORT_PREFERENCES_FROM:'Beállítások importálása',
  NONE:'nincs',
  CREATE:'Létrehozás',
  NEW_MISSION:'Új feladat',
  PHASES:'Időszak',
  NUMBER_OF_PHASES:'Időszakok száma',
  SCORES:'Pontszámok',
  SCORES_DESCRIPTION:'Pontszám1, Pontszám2, Pontszám3',
  GENERATE:'Generálás',
  TAKE_PICTURE:'Fénykép hozzáadása',
  SURNAME:'Vezetéknév',
  STREET:'utca',
  STUDENT_NAME:'Hallgató neve',
  CLASSROOM_NAME:'Csoport neve',
  ASSIGN_STUDENT_TO_TEAM:'Hallgató hozzáadása ehhez a csoporthoz...',
  SELECT:'Kiválaszt',
  COPY_STUDENT_TO_ANOTHER_CLASS:'Hallgató másolása másik csoporthoz',
  FULL_NAME:'Teljes név',
  CONFIRM_PASSWORD:'Jelszó megerősítése',
  SIGN_UP:'Feliratkozás',
  ALREADY_HAVE_AN_ACCOUNT:'Már van fiókja?',
  BADGE:'Jelvény',
  VIEW_PROFILE:'Profil megtekintése',
  LOG_OUT:'Kilépés',  
  ADRESS:'Cím',
  SAVE_CHANGES:'Változtatások mentése',
  CHANGE_AVATAR:'Avatár megváltoztatása',
  EDIT_TEAM:'Csoport szerkesztése',
  EXPORT:'Exportálás',
  IMPORT:'Importálás',
  ARCHIVE:'Archív',
  SELECT_YOUR_CLASS:'Csoport kiválasztása',
  ADD_CLASS:'Csoport hozzáadása',
  ACHIEVEMENTS:'Célok',
  ITEMS:'Elemek',
  BADGES:'Jelvények',
  ADD_TEAM:'Csoport hozzáadása',
  ITEM:'Elem',
  LANGUAGES:'Nyelvek',
  NEW_STUDENT:'Új hallgató',
  AVATAR:'Avavtár',
  EMAIL_ALREADY_USED: 'A megadott email cím már használatban van',
  CODE:'Kód',
  YOUR_CODE:'Saját kód',
  LOGIN:'Belépés',
  SCORE:'Pontszám',
  MAX_SCORE:'Maximum pontszám',
  EVALUATE:'Kiértékelés', 
  SET_ITEM: 'Pontszám megadása',
  POINTS: 'Pontok', 
  SELECT_ITEM: 'Elem kiválasztása', 
  DEFAULT_POINTS: 'Alapértelmezett pontszám',
};

var translationsRU = {
  
  BUTTON_LANG_ES: 'Испанский',
  BUTTON_LANG_EN: 'Английский',
  BUTTON_LANG_IT: 'Итальянский',
  BUTTON_LANG_TU: 'Tурецкий',
  BUTTON_LANG_DE: 'Немецкий',
  BUTTON_LANG_RU: 'Русский',
  BUTTON_LANG_FR: 'Французский',
  BUTTON_LANG_HU: 'венгерский',
  EMAIL: 'Электронная почта',
  PASSWORD: 'Пароль',
  LOG_TEACHER: 'Войти как учитель',
  LOG_STUDENT: 'Войти как студент',
  FORGOT_PASSWORD: 'Забыли пароль?',
  DONT_HAVE_ACCOUNT: 'Не имеет счёт?',
  EMAIL_EXAMPLE: 'Пример@пример.com',
  YOUR_PASSWORD: 'Ваш пароль',
  HOME: 'Дом',
  PROFILE: 'Профиль',
  SETTINGS:'Настройки',
  CLASS:'Класс',
  ATTENDANCE:'Посещаемость',
  TEAMS:'Команды',
  RULES:'Правила',
  MISSIONS: 'Задании',
  ACHIEVEMENT_NAME:'Имя достижения',
  ACHIEVEMENT_DESCRIPTION: 'Описание достижений',
  REQUIREMENTS: 'Требовании: ',
  ADD_ACHIEVEMENT: 'Добавить достижение',
  NEW_ACHIEVEMENT: 'новое достижение',
  NAME:'Имя ',
  DESCRIPTION:'Описание: ',
  CANCEL:'Отмена',
  NEW_BADGE:'Новый знак',
  ADD_BADGE:'Добавить знак',
  NEW_ITEM:'Новый пункт',
  ADD_ITEM:'Добавить пункт',
  ITEM_DESCRIPTION:'Описание пункта',
  ITEM_NAME:'Название знака',
  ADD_STUDENTS:'Добавить студентов',
  SET_ATTENDANCE_FOR_TODAY:'Набор посещаемости на сегодняшний день',
  BADGE_DESCRIPTION:'Описание знакa',
  BADGE_NAME:'Имя знака',
  ADD_STUDENT: 'Добавить студента',
  DELETE:'Удалить',
  UPLOAD_AVATAR: 'Загрузить аватар',
  ACCEPT:'Принимать',
  ADD_MISSION:'Добавить задание',
  NEW_CLASS:'Новый класс',
  CLASS_NAME:'Имя класса',
  IMPORT_PREFERENCES_FROM:'Важные предпочтения из',
  NONE:'Никакой',
  CREATE:'Создавать',
  NEW_MISSION:'Новая задание',
  PHASES:'Фазы: ',
  NUMBER_OF_PHASES:'Число фаз',
  SCORES:'Множество: ',
  SCORES_DESCRIPTION:'1 балла, 2 балла, 3 балла',
  GENERATE:'Производить',
  TAKE_PICTURE:'Сделать фотографию',
  SURNAME:'Фамилия',
  STREET:'Улица',
  STUDENT_NAME:'Имя ученика',
  CLASSROOM_NAME:'Имя классa',
  ASSIGN_STUDENT_TO_TEAM:'Назначить студента к команде...',
  SELECT:'Выбрать',
  COPY_STUDENT_TO_ANOTHER_CLASS:'Копия студента к другому классу',
  FULL_NAME:'Полное имя',
  CONFIRM_PASSWORD:'Подтвердите Пароль',
  SIGN_UP:'Зарегистрироваться',
  ALREADY_HAVE_AN_ACCOUNT:'Уже есть учетная запись?',
  BADGE:'Знак',
  VIEW_PROFILE:'Просмотреть профиль',
  LOG_OUT:'Выйти',  
  ADRESS:'Адрес',
  SAVE_CHANGES:'Сохранить изменения',
  CHANGE_AVATAR:'Измененит аватар',
  EDIT_TEAM:'Редактировать команда',
  EXPORT:'Экспорт',
  IMPORT:'Импорт',
  ARCHIVE:'Архив',
  SELECT_YOUR_CLASS:'Выберите класс',
  ADD_CLASS:'Добавить класс',
  ACHIEVEMENTS:'Достижения',
  ITEMS:'Пункты',
  BADGES:'Знаки',
  ADD_TEAM:'Добавить команду',
  ITEM:'Пункт',
  LANGUAGES:'Языки',
  NEW_STUDENT:'Новый студент',
  AVATAR:'Аватар',
  EMAIL_ALREADY_USED: 'Электронная почта уже используется',
  CODE:'Код',
  YOUR_CODE:'Ваш код',
  LOGIN:'Войти',
  SCORE:'Oценка',
  MAX_SCORE:'Макс оценка',
  EVALUATE:'Оценивать',
  SET_ITEM: 'Набор оценка',
  POINTS: 'Набор пунктов',
  SELECT_ITEM: 'Выбрать пункты',
  DEFAULT_POINTS: 'Баллы по умолчанию',

};