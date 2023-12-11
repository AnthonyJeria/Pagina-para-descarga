function descargarArchivo() {
    const enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = "apk/AsistenciApp.apk";
    enlaceDescarga.download = "AsistenciaApp";
    enlaceDescarga.click();
  }

  window.onload = function() {
    descargarArchivo();
  }