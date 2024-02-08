function LoadCss(file){
    if (!document.getElementById(file))
    {
      var head  = document.getElementsByTagName('head')[0];
      var link  = document.createElement('link');
      link.id   = file;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = file + '.css';
      link.media = 'all';
      head.appendChild(link);
    }
  } 
  loadCss('../../css/style.css');
  loadCss('../../css/animation-class.css');
  loadCss('../../css/animaciones.css');
  loadCss('../../css/animate.css');
  loadCss('../../css/Banner.css');
  loadCss('../../css/seccion1.css');
  loadCss('../../css/seccion2.css');
  loadCss('../../css/seccion4.css');
  loadCss('../../css/seccion3.css');
  loadCss('../../css/Final.css');
  loadCss('../../css/media-queries.css');


  // script 
// <script language="JavaScript" type="text/javascript" src="js/com/LoadCss.js"></script>