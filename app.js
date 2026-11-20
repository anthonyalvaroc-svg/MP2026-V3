const F17_FOLDERS = [
  { id: "f17_01", name: "1. Caminos", desc: "FOTOS CAMINOS, CALLES DESDE CUSTODIO HACIA SITE, INCLUYE CAMINATA HACIA CERRO" },
  { id: "f17_02", name: "2. Edificio & Cercos", desc: "FOTOS PANORAMICAS DEL EDIFICIO O SITE POR LOS 4 LADOS" },
  { id: "f17_03", name: "3. Medidor & Tableros & Contadores", desc: "FOTOS PANORAMICAS DE LOS TABLEROS, SUMINISTROS Y CONTADORES" },
  { id: "f17_04", name: "4. Accesos & Puertas", desc: "FOTOS DE ACCESO A EDIFICIO, PUERTAS, ESCALERAS INCLUYE LLAVES O CANDADOS" },
  { id: "f17_05", name: "5. Base de torre & Linea de Vida", desc: "FOTOS DE PEDESTAL DE TORRE Y BASE DE VIENTOS O ARRIOSTRES POR LOS 4 LADOS" },
  { id: "f17_06", name: "6. Equipos en piso & Losas", desc: "FOTOS PANORAMICOS DE GABINETES INCLUYE PLATAFORMA, MODULOS, GPS EN PISO" },
  { id: "f17_07", name: "7. Sistema de puesta a tierra", desc: "FOTOS DE BARRAS EN PISO Y TORRE. CABLE DE BAJADA DE ATERRAMIENTO. PARARAYO Y CABLE DE BAJADA. POZOS TIERRA LIMPIEZA Y MEDICIONES" },
  { id: "f17_08", name: "8. Portacables & Escalerillas rack", desc: "FOTOS DE ESCALERILLA EN PISO Y TORRE" },
  { id: "f17_09", name: "9. Sistema de balizamiento", desc: "FOTOS DE FANALES, FOTOCELDA, CABLE VULCANIZADO, LIMPIEZA DE FANALES Y PRUEBA DE FUNCIONAMIENTO" },
  { id: "f17_10", name: "10. Equipos en torre", desc: "FOTOS PANORAMICO DE EQUIPOS, ETIQUETA, CABLES, INICIO Y FIN DE SOPORTES, MEDICION DE TUBO, ALTURA DE EQUIPO" },
  { id: "f17_11", name: "11. Vista encima de torre", desc: "FOTOS DE TORRES HACIA ABAJO POR LOS 4 LADOS" },
  { id: "f17_12", name: "12. Vista panoramica de torre", desc: "FOTOS PANORAMICO DE TORRE INCLUYE ZOOM DE AREA DE ROLDANA POR LOS 4 LADOS" },
  { id: "f17_13", name: "13. Vista de site general", desc: "FOTOS GENERALES, PISOS, PAREDES. EQUIPOS, LETRERO, LUMINARIAS, TOMACORRIENTES. TECHOS. SOPORTES" },
  { id: "f17_14", name: "14. Transformadores & Postes", desc: "FOTOS DE POSTES DE COMETIDA, FOTOS DE POSTE DE TRANSFORMADOR INCLUYE ZOOM A TRANSFORMADOR" },
  { id: "f17_15", name: "15. Vistas de 30° encima de torre cada foto 5MB", desc: "FOTOS EN HORIZONTAL 12 FOTOS CADA 30 GRADOS, FOTOS BARRIDO 0 A 180 Y 180 A 360 (3 RONDAS)", highRes: true },
  { id: "f17_16", name: "16. Generadores", desc: "FOTOS DE GENERADORES, TANQUE COMBUSTIBLE, FOTOS DE AREA DE GENERADOR" },
  { id: "f17_17", name: "17. Estado de torre", desc: "FOTOS DE ANGULOS, PERNERIA Y PRUEBA DE TORQUE, ESTADO DE PINTURA. VERIFICAR CORROSION Y FALTANTES" },
  { id: "f17_18", name: "18. Vista panoramica de la estación por dentro y fuera", desc: "FOTOS PANORAMICAS DE PAREDES POR DENTRO Y FUERA POR 4 LADOS" },
  { id: "f17_19", name: "19. Vista de ingreso de Fibra Optica, identificar Operador, abrir cajas de pase", desc: "FOTOS ETIQUETAR OPERADOR FIBRA OPTICA, FOTOS DE RECORRIDO, CAMARAS" },
  { id: "f17_20", name: "20. Diagrama Unifilar desde Medidor hasta tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO ATP HACIA TABLERO ATP" },
  { id: "f17_21", name: "21. Diagrama Unifilar de Tableros", desc: "DIBUJAR DIAGRAMA DE RECORRIDO DE SUMINISTRO OPERADOR HACIA TABLERO OPERADOR" },
  { id: "f17_22", name: "22. Diagrama de traslado desde Provincia al site", desc: "ESCRIBIR EL RECORRIDO DE LA RUTA DESDE EL CUSTODIO HACIA EL SITE, ZONAS PUNTUALES Y TIEMPO." },
  { id: "f17_23", name: "23. Vista de concertina", desc: "FOTOS VERIFICAR CORROSION Y CORTADO DE CONCERTINA. INCLUYE REPARAR CONCERTINA. FOTO ANTES Y DESPUES" },
  { id: "f17_24", name: "24. Vista de buzones abiertos y cerrados", desc: "FOTOS DE BUZONES ABIERTO Y CERRADO, FIBRA OPTICA, LLAVE Y CANDADO, LIMPIEZA DE BUZONES" },
  { id: "f17_25", name: "25. Etiquetado de llaves y video de validacion", desc: "FOTOS DE LLAVES SUELTAS DEL MANOJO Y ETIQUETADO EN PISO. VIDEO FUNCIONAMIENTO DE LA LLAVE EN LA PUERTA PRINCIPAL DEL SITE." },
  { id: "f17_26", name: "26. Estado de polimero, pvc, persiana, radomo, etc", desc: "FOTOS PANORAMICA DE POLIMERO O PVC, PERNERIA, EMPALMES, PINTURA." },
  { id: "f17_27", name: "27. Vista de luminarias en poste, site, arqueta", desc: "FOTOS DE LUMINARIAS APAGADAS Y PRENDIDAS EN SALA EQUIPOS Y POSTE SI APLICA" },
  { id: "f17_28", name: "28. Fotos de gestion ambiental", desc: "FOTOS DE CHARLA Y PERSONAL CON EPPS. SEÑALIZACION, Y GESTION DE RESIDUOS, USO DE EPPS DE TECNICO" },
  { id: "f17_29", name: "29. Fotos de cambio de batería", desc: "FOTOS Y VIDEOS DE PROCESO DE CAMBIO DE BATERIA, MEDICION DE BATERIA. VIDEO FUNCIONAMIENTO DE CANDADO NUEVO" }
];

const FORMATOS_FOLDERS = [
  { id: "fmt_01", name: "Formatos y Documentos MP", desc: "Subir fotos y archivos PDF de formatos de mantenimiento preventivo." }
];

const MP_FOLDERS = [
  { id: "mp_01", name: "1. Personal con EPPs & Equipos utilizados", desc: "FOTO DE PERSONAL CON EPPS Y CHARLA DE 5 MINUTOS, EQUIPOS UTILIZADOS, TELUROMETRO PINZA, DESARMADORES, BRUJULA, ETC" },
  { id: "mp_02", name: "2. Altura de torre", desc: "FOTO DE ARRIBA HACIA ABAJO, DE ABAJO HACIA ARRIBA. INCLUYE ALTURA TORRE BASE, ROLDANA SUPERIOR E INFERIOR" },
  { id: "mp_03", name: "3. Medida de pedestal", desc: "FOTO PANORAMICA DE ALTURA, LARGO Y ANCHO" },
  { id: "mp_04", name: "4. Limpieza de fanales", desc: "FOTOS LIMPIEZA DE FANALES Y FOTOCELDA" },
  { id: "mp_05", name: "5. Limpieza de pozos", desc: "FOTOS LIMPIEZA DE POZOS TIERRA, INCLUYE PINTADO" },
  { id: "mp_06", name: "6. Limpieza del site y Polimero", desc: "FOTOS DE LIMPIEZA DE PISOS, PAREDES, ESCALERILLA, BASTIDORES, POLIMERO O PVC EN TORRE" },
  { id: "mp_07", name: "7. Trabajo en contador", desc: "FOTOS PANORAMICA, LIMPIEZA Y MEDICION DE CONTADORES" },
  { id: "mp_08", name: "8. Aceitado en chapas y bisagras", desc: "FOTOS DE LIMPIEZA Y ACEITADO DE CHAPAS, BISAGRAS DE TODAS LAS PUERTAS EN SITE" },
  { id: "mp_09", name: "9. Validación de diagrama unifilar de tableros", desc: "FOTOS DIBUJAR EN HOJA EL DIAGRAMA ACTUAL DESDE SUMINISTRO HACIA TABLEROS INCLUYE TODAS LAS LLAVES" },
  { id: "mp_10", name: "10. Prueba de espesor", desc: "FOTOS DE ESPESOR DE PINTURA Y GALVANIZADO EN VALOR mils EN VARIAS PARTES DE LA TORRE" },
  { id: "mp_11", name: "11. Prueba de adherencia", desc: "FOTOS DE CORTE, CINTA CERRADA, CINTA ABIERTA EN VARIAS PARTES DE LA TORRE" },
  { id: "mp_12", name: "12. Limpieza y engrase de BT", desc: "FOTOS ANTES, CON ESPATULA Y DESPUES ENGRASADO DE TODAS LAS BARRAS EN PISO Y TORRE" },
  { id: "mp_13", name: "13. Mantenimiento de tableros", desc: "FOTOS DE LIMPIEZA CON BROCHA Y TORQUE DE TODOS LOS TABLEROS EN LA ESTACION" },
  { id: "mp_14", name: "14. Medición de tableros", desc: "FOTOS DE MEDICIONES DE AMPERIOS (R,S,T) Y VOLTAJE (RS, RT, ST) EN I.G Y SALIDA DE EQUIPOS O TABLERO OPERADOR" },
  { id: "mp_15", name: "15. Limpieza de pedestal", desc: "FOTOS DE LIMPIEZA CON ESCOBA EN PEDESTAL Y BASE DE VIENTOS U ARRIOSTRES" },
  { id: "mp_16", name: "16. Mantenimiento y medidas de equipos en piso", desc: "FOTOS DE MANTENIMIENTO DE LIMPIEZA CON ESCOBA Y MEDICION CON WINCHA DE TODOS LOS EQUIPOS EN PISO (ANCHO LARGO Y ALTURA)" },
  { id: "mp_17", name: "17. Brujula", desc: "FOTOS DE BRUJULA Y ESCRITO CON PLUMON EL AZIMUT EN LA PATA DE TORRE" },
  { id: "mp_18", name: "18. GPS", desc: "FOTOS PANORAMICA Y DE CERCA A GPS EN BASE DE TORRE, QUE SE NOTE LAS COORDENADAS (GRADOS, MINUTOS Y SEGUNDOS)" },
  { id: "mp_19", name: "19. Altura de edificio", desc: "ALTURA EDIFICIO, ALTURA PARAPETO, ALTURA ESCALERA AZOTEA" },
  { id: "mp_20", name: "20. Uso de nivel", desc: "FOTO PANORAMICA DE NIVEL EN MONTANTE DE TORRE, EN TORRE VENTADA, MASTIL Y AUTOSOPORTADA, MONOPOLO" },
  { id: "mp_21", name: "21. Aplicación de spray", desc: "FOTO APLICACION EN ACCESORIOS DE LINEA DE VIDA, ACCESORIOS DE VIENTOS, GRAMPAS Y GRILLETES SI ESTAN OXIDADOS" },
  { id: "mp_22", name: "22. Soportes vacios en torre, mastil, altura y azimut", desc: "FOTOS PANORAMICA DE TUBO, FOTO DE MEDIDA DE TUBO, AZIMUT, ALTURA EJE DE TUBO DE TODOS LOS SOPORTES VACIOS" },
  { id: "mp_23", name: "23. Vistas de las cordenadas de cada arista del site", desc: "FOTOS PANORAMICA DE GPS EN CADA ESQUINA DE SALA EQUIPOS, ESCRIBIR CON PLUMON A, B, C, D" },
  { id: "mp_24", name: "24. Vistas de las medidas del perimetro del site", desc: "FOTOS PANORAMICA Y CERCA DE MEDIDA DE WINCHA DE ANCHO, LARGO Y ALTURA DE SALA DE EQUIPO" },
  { id: "mp_25", name: "25. Mantenimiento de ramas y hojas del monopolo", desc: "FOTOS DE LIMPIEZA DE OJOS Y CAMBIO DE CINTILLO DE HOJAS EN MIMETIZADO SI APLICA" },
  { id: "mp_26", name: "26. Mantenimiento de aires forzados y video de funcionamiento", desc: "FOTOS DE PANORAMICA, LIMPIEZA, PLACAS, MEDICION DE INYECTOR Y EXTRACTOR, FOTOS EXTERIOR DE EXTRACTOR Y LIMPIEZA REJILLA" },
  { id: "mp_27", name: "27. Altura soporte ocupados", desc: "FOTOS PANORAMICA DE ALTURA DE EJE DE SOPORTES OCUPADOS. ESCRIBIR QUE OPERADOR Y EQUIPO ESTA EN ESE SOPORTE" },
  { id: "mp_28", name: "28. Vista de Azotea", desc: "FOTOS PANORAMICA DE AZOTEA DE PROPIETARIO POR LOS 4 LADOS" },
  { id: "mp_29", name: "29. Vista de Limpieza exterior 4 lados", desc: "FOTOS DE LIMPIEZA EXTERIOR, LIMPIAR BASURA Y MALEZA 1 METRO Y MEDIO APROX. FOTOS DE ANTES Y DESPUES" },
  { id: "mp_30", name: "30. Fotos del mtto de video camara", desc: "FOTOS DE LIMPIEZA DE CAMARA, TORQUE TABLERO. REINICIAR CAMARA SI REQUIERE, VERIFICAR FUNCIONAMIENTO CON CRISTIAN SALAZAR." }
];

let db;
let currentProjectId = null;
let currentTab = 1;
let uploadTargetFolderId = null;
let uploadTargetHighRes = false;

// Camera & GPS state
let cameraStream = null;
let cameraTargetFolderId = null;
let cameraTargetHighRes = false;
let sessionPhotosCount = 0;
let currentCoordsText = "GPS: Buscando señal...";
let currentPlaceText = "Lugar: Obteniendo ubicación...";
let lastGeocodedCoords = "";
let overlayTimer = null;

// Share state
let readyZipBlob = null;
let readyZipFilename = "";

// Init IndexedDB
const request = indexedDB.open("ReportesCampoDB_v9", 1);
request.onupgradeneeded = (e) => {
  db = e.target.result;
  if (!db.objectStoreNames.contains("projects")) {
    db.createObjectStore("projects", { keyPath: "id" });
  }
  if (!db.objectStoreNames.contains("files")) {
    const fileStore = db.createObjectStore("files", { keyPath: "id", autoIncrement: true });
    fileStore.createIndex("projectId", "projectId", { unique: false });
  }
};
request.onsuccess = (e) => {
  db = e.target.result;
  renderProjects();
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

function sanitizeName(str) {
  return str.replace(/[\\/:*?"<>|]/g, "_").trim();
}

function createProject() {
  const input = document.getElementById("newSiteName");
  const name = input.value.trim();
  if (!name) {
    alert("Escribe un nombre para la carpeta principal.");
    return;
  }
  const project = {
    id: "proj_" + Date.now(),
    name: name,
    createdAt: new Date().toLocaleDateString("es-PE")
  };
  const tx = db.transaction("projects", "readwrite");
  tx.objectStore("projects").add(project);
  tx.oncomplete = () => {
    input.value = "";
    openProject(project.id);
  };
}

function renderProjects() {
  const tx = db.transaction("projects", "readonly");
  tx.objectStore("projects").getAll().onsuccess = (e) => {
    const projects = e.target.result.sort((a, b) => b.id.localeCompare(a.id));
    const list = document.getElementById("projectsList");
    if (projects.length === 0) {
      list.innerHTML = '<div style="text-align:center; color:#64748b; padding:20px; font-size:14px;">No hay carpetas creadas. Crea una arriba para empezar.</div>';
      return;
    }
    list.innerHTML = projects.map(p => `
      <div class="card" style="display:flex; justify-content:space-between; align-items:center;">
        <div onclick="openProject('${p.id}')" style="flex:1; cursor:pointer;">
          <div style="font-weight:700; font-size:16px; color:#0f172a;">📁 ${p.name}</div>
          <div style="font-size:12px; color:#64748b; margin-top:3px;">Creado: ${p.createdAt}</div>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="btn-secondary" style="padding:8px 12px; font-size:13px;" onclick="openProject('${p.id}')">Abrir</button>
          <button class="btn-danger" onclick="deleteProject('${p.id}')">Eliminar</button>
        </div>
      </div>
    `).join("");
  };
}

function deleteProject(id) {
  if (!confirm("¿Eliminar esta carpeta y todas sus fotos?")) return;
  const tx = db.transaction(["projects", "files"], "readwrite");
  tx.objectStore("projects").delete(id);
  const index = tx.objectStore("files").index("projectId");
  index.getAllKeys(id).onsuccess = (e) => {
    e.target.result.forEach(k => tx.objectStore("files").delete(k));
  };
  tx.oncomplete = () => renderProjects();
}

function showHome() {
  currentProjectId = null;
  document.getElementById("homeView").style.display = "block";
  document.getElementById("projectView").style.display = "none";
  document.getElementById("btnBack").style.display = "none";
  renderProjects();
}

function openProject(id) {
  currentProjectId = id;
  const tx = db.transaction("projects", "readonly");
  tx.objectStore("projects").get(id).onsuccess = (e) => {
    const p = e.target.result;
    if (!p) return;
    document.getElementById("editSiteName").value = p.name;
    document.getElementById("homeView").style.display = "none";
    document.getElementById("projectView").style.display = "block";
    document.getElementById("btnBack").style.display = "inline-flex";
    switchTab(1);
  };
}

function renameCurrentProject() {
  const newName = document.getElementById("editSiteName").value.trim();
  if (!newName) return;
  const tx = db.transaction("projects", "readwrite");
  const store = tx.objectStore("projects");
  store.get(currentProjectId).onsuccess = (e) => {
    const p = e.target.result;
    p.name = newName;
    store.put(p);
  };
  tx.oncomplete = () => alert("Nombre actualizado.");
}

function switchTab(tabNum) {
  currentTab = tabNum;
  [1, 2, 3].forEach(n => {
    document.getElementById("tab" + n).classList.toggle("active", n === tabNum);
  });
  renderSubfolders();
}

function renderSubfolders() {
  const container = document.getElementById("subfoldersContainer");
  let folders = [];
  if (currentTab === 1) folders = F17_FOLDERS;
  else if (currentTab === 2) folders = FORMATOS_FOLDERS;
  else folders = MP_FOLDERS;

  const tx = db.transaction("files", "readonly");
  const index = tx.objectStore("files").index("projectId");
  index.getAll(currentProjectId).onsuccess = (e) => {
    const allFiles = e.target.result;
    container.innerHTML = folders.map(f => {
      const fFiles = allFiles.filter(item => item.folderId === f.id);
      const isFormatos = (currentTab === 2);
      const acceptAttr = isFormatos ? "image/*,application/pdf" : "image/*,video/*";
      const badgeClass = fFiles.length > 0 ? "status-badge has-files" : "status-badge";
      const badgeText = fFiles.length > 0 ? `${fFiles.length} archivo(s)` : "Sin archivos (Se marcará NO APLICA)";

      const thumbsHtml = fFiles.map(file => {
        let preview = "";
        if (file.type.startsWith("image/")) {
          preview = `<img src="${file.dataUrl}" alt="${file.name}">`;
        } else if (file.type.startsWith("video/")) {
          preview = `<video src="${file.dataUrl}"></video>`;
        } else {
          preview = `<div class="thumb-pdf">📄 PDF</div>`;
        }
        return `
          <div class="thumb">
            ${preview}
            <div class="thumb-name" title="${file.name}">${file.name}</div>
            <button class="thumb-del" onclick="deleteFile(${file.id})">✕</button>
          </div>
        `;
      }).join("");

      return `
        <div class="folder-item">
          <div class="folder-title">${f.name}</div>
          <div class="folder-desc">${f.desc}</div>
          <div class="${badgeClass}">${badgeText}</div>
          <div class="row">
            <button class="btn-cam" onclick="openNativeCamera('${f.id}', ${!!f.highRes})">📷 Cámara</button>
            <button class="btn-up" onclick="triggerUpload('${f.id}', ${!!f.highRes}, '${acceptAttr}')">📁 Subir Galería</button>
          </div>
          ${fFiles.length > 0 ? `<div class="thumbs">${thumbsHtml}</div>` : ""}
        </div>
      `;
    }).join("");
  };
}

function deleteFile(fileId) {
  const tx = db.transaction("files", "readwrite");
  tx.objectStore("files").delete(fileId);
  tx.oncomplete = () => renderSubfolders();
}

// ---------------- UPLOAD & COMPRESSION (< 1MB EXCEPT 30 DEG) ----------------
function triggerUpload(folderId, highRes, acceptAttr) {
  uploadTargetFolderId = folderId;
  uploadTargetHighRes = highRes;
  const input = document.getElementById("hiddenFileInput");
  input.accept = acceptAttr;
  input.value = "";
  input.click();
}

async function handleFileUpload(event) {
  const files = Array.from(event.target.files);
  if (!files.length) return;
  showLoading("Procesando archivos...");

  for (const file of files) {
    let finalDataUrl = "";
    if (file.type.startsWith("image/") && !uploadTargetHighRes && file.size > 1024 * 1024) {
      finalDataUrl = await compressImageFile(file);
    } else {
      finalDataUrl = await readFileAsDataURL(file);
    }
    await saveFileToDB({
      projectId: currentProjectId,
      folderId: uploadTargetFolderId,
      name: file.name,
      type: file.type || "application/octet-stream",
      dataUrl: finalDataUrl
    });
  }

  hideLoading();
  renderSubfolders();
}

function readFileAsDataURL(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(file);
  });
}

function compressImageFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;
        const maxDim = 1600;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        let quality = 0.82;
        let dataUrl = canvas.toDataURL("image/jpeg", quality);
        while (dataUrl.length * 0.75 > 980 * 1024 && quality > 0.35) {
          quality -= 0.1;
          dataUrl = canvas.toDataURL("image/jpeg", quality);
        }
        resolve(dataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function saveFileToDB(record) {
  return new Promise((resolve) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").add(record);
    tx.oncomplete = () => resolve();
  });
}

// ---------------- NATIVE CAMERA WITH WATERMARK ----------------
async function openNativeCamera(folderId, highRes) {
  cameraTargetFolderId = folderId;
  cameraTargetHighRes = highRes;
  sessionPhotosCount = 0;
  document.getElementById("camCounter").innerText = "Fotos: 0";
  document.getElementById("cameraModal").style.display = "flex";

  startLocationTracking();
  updateLiveOverlay();
  overlayTimer = setInterval(updateLiveOverlay, 1000);

  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: highRes ? 3840 : 1920 },
        height: { ideal: highRes ? 2160 : 1080 }
      },
      audio: false
    });
    document.getElementById("cameraVideo").srcObject = cameraStream;
  } catch (err) {
    alert("No se pudo acceder a la cámara. Verifica los permisos del navegador.");
    closeCamera();
  }
}

function closeCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
  if (overlayTimer) {
    clearInterval(overlayTimer);
    overlayTimer = null;
  }
  document.getElementById("cameraModal").style.display = "none";
  renderSubfolders();
}

function startLocationTracking() {
  if (!("geolocation" in navigator)) {
    currentCoordsText = "GPS: No disponible";
    currentPlaceText = "";
    return;
  }
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const lat = pos.coords.latitude.toFixed(6);
      const lon = pos.coords.longitude.toFixed(6);
      currentCoordsText = `Lat: ${lat}, Lon: ${lon}`;
      const coordKey = `${pos.coords.latitude.toFixed(3)},${pos.coords.longitude.toFixed(3)}`;
      if (coordKey !== lastGeocodedCoords) {
        lastGeocodedCoords = coordKey;
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=16`);
          const data = await res.json();
          if (data && data.address) {
            const a = data.address;
            const parts = [a.road, a.suburb || a.neighbourhood || a.village, a.city || a.town || a.county, a.state].filter(Boolean);
            currentPlaceText = parts.slice(0, 3).join(", ");
          }
        } catch (e) {
          currentPlaceText = "Ubicación GPS registrada";
        }
      }
      updateLiveOverlay();
    },
    () => {
      currentCoordsText = "GPS: Sin señal";
      currentPlaceText = "";
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

function getFormattedDateTime() {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return {
    display: `${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`,
    fileStamp: `${yyyy}${mm}${dd}_${hh}${min}${ss}`
  };
}

function updateLiveOverlay() {
  const siteName = document.getElementById("editSiteName").value.trim() || "SITE";
  const dt = getFormattedDateTime().display;
  const lines = [siteName, dt, currentCoordsText];
  if (currentPlaceText) lines.push(currentPlaceText);
  document.getElementById("camLiveOverlay").innerHTML = lines.join("<br>");
}

async function capturePhoto() {
  const video = document.getElementById("cameraVideo");
  if (!video.videoWidth) return;

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");

  // Draw camera frame
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Watermark text lines: Folder Name, Date/Time, Coords, Place
  const siteName = document.getElementById("editSiteName").value.trim() || "SITE";
  const dt = getFormattedDateTime();
  const lines = [siteName, dt.display, currentCoordsText];
  if (currentPlaceText) lines.push(currentPlaceText);

  // Balanced font size (not too small, not too big: ~2.6% of min dimension)
  const baseDim = Math.min(canvas.width, canvas.height);
  const fontSize = Math.max(20, Math.round(baseDim * 0.028));
  ctx.font = `600 ${fontSize}px sans-serif`;
  ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "right";
  ctx.textBaseline = "bottom";

  // Subtle dark shadow for readability on bright backgrounds
  ctx.shadowColor = "rgba(0, 0, 0, 0.85)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;

  const margin = Math.round(fontSize * 0.8);
  const lineHeight = Math.round(fontSize * 1.28);

  lines.slice().reverse().forEach((line, idx) => {
    const y = canvas.height - margin - (idx * lineHeight);
    ctx.fillText(line, canvas.width - margin, y);
  });

  // Compress if not 30-deg highRes folder
  let quality = cameraTargetHighRes ? 0.95 : 0.85;
  let dataUrl = canvas.toDataURL("image/jpeg", quality);
  if (!cameraTargetHighRes) {
    while (dataUrl.length * 0.75 > 980 * 1024 && quality > 0.35) {
      quality -= 0.1;
      dataUrl = canvas.toDataURL("image/jpeg", quality);
    }
  }

  const fileName = `IMG_${dt.fileStamp}.jpg`;
  await saveFileToDB({
    projectId: currentProjectId,
    folderId: cameraTargetFolderId,
    name: fileName,
    type: "image/jpeg",
    dataUrl: dataUrl
  });

  sessionPhotosCount++;
  document.getElementById("camCounter").innerText = `Fotos: ${sessionPhotosCount}`;
}

// ---------------- ZIP & SHARE ----------------
function showLoading(msg) {
  document.getElementById("shareReadyBox").style.display = "none";
  document.getElementById("loadingText").style.display = "block";
  document.getElementById("loadingText").innerText = msg;
  document.getElementById("loadingOverlay").style.display = "flex";
}

function closeOverlay() {
  document.getElementById("loadingOverlay").style.display = "none";
}

async function generateZip(mode) {
  showLoading("Generando archivo ZIP completo...");

  try {
    const projectName = sanitizeName(document.getElementById("editSiteName").value || "Reporte_Site");
    const zip = new JSZip();
    const rootFolder = zip.folder(projectName);

    // Fetch no_aplica.png
    let noAplicaBlob = null;
    try {
      const resp = await fetch("no_aplica.png");
      if (resp.ok) noAplicaBlob = await resp.blob();
    } catch (e) {}

    // Get all files for current project
    const allFiles = await new Promise((resolve) => {
      const tx = db.transaction("files", "readonly");
      tx.objectStore("files").index("projectId").getAll(currentProjectId).onsuccess = (e) => resolve(e.target.result);
    });

    const addSectionToZip = (sectionName, foldersList) => {
      const secFolder = rootFolder.folder(sectionName);
      foldersList.forEach(f => {
        const sub = secFolder.folder(sanitizeName(f.name));
        const matching = allFiles.filter(item => item.folderId === f.id);
        if (matching.length === 0) {
          if (noAplicaBlob) {
            sub.file("NO_APLICA.png", noAplicaBlob);
          }
        } else {
          const usedNames = {};
          matching.forEach(file => {
            let cleanName = sanitizeName(file.name);
            if (usedNames[cleanName]) {
              usedNames[cleanName]++;
              const dotIdx = cleanName.lastIndexOf(".");
              if (dotIdx > 0) {
                cleanName = `${cleanName.slice(0, dotIdx)}_${usedNames[cleanName]}${cleanName.slice(dotIdx)}`;
              } else {
                cleanName = `${cleanName}_${usedNames[cleanName]}`;
              }
            } else {
              usedNames[cleanName] = 1;
            }
            const base64Data = file.dataUrl.split(",")[1];
            sub.file(cleanName, base64Data, { base64: true });
          });
        }
      });
    };

    addSectionToZip("1. F17-CARPETA DE FOTOS", F17_FOLDERS);
    addSectionToZip("2. FORMATOS MP", FORMATOS_FOLDERS);
    addSectionToZip("3. MANTENIMIENTO PREVENTIVO", MP_FOLDERS);

    const blob = await zip.generateAsync({ type: "blob" });
    readyZipBlob = blob;
    readyZipFilename = `${projectName}.zip`;

    if (mode === "download") {
      downloadBlob(blob, readyZipFilename);
      closeOverlay();
    } else {
      document.getElementById("loadingText").style.display = "none";
      document.getElementById("shareFileName").innerText = readyZipFilename;
      document.getElementById("shareReadyBox").style.display = "block";
    }
  } catch (err) {
    alert("Error al generar el ZIP: " + err.message);
    closeOverlay();
  }
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

async function triggerNativeShare() {
  if (!readyZipBlob) return;
  const file = new File([readyZipBlob], readyZipFilename, { type: "application/zip" });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: readyZipFilename
      });
      closeOverlay();
      return;
    } catch (e) {
      if (e.name === "AbortError") {
        closeOverlay();
        return;
      }
    }
  }
  downloadBlob(readyZipBlob, readyZipFilename);
  alert("El archivo ZIP se guardó en tus Descargas para que puedas adjuntarlo.");
  closeOverlay();
}
