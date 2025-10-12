# 🚿 App Tomas - Sistema de Monitoreo de Sectores

## 📋 Descripción

Sistema web móvil que permite a **50 usuarios** acceder individualmente a su sector específico (ej: H1 002 A, H2 013 B) desde sus dispositivos móviles.

## 📁 Archivos del Sistema

### **Frontend (GitHub Pages)**
- `index.html` - App web móvil principal
- `usuarios-sectores-config.js` - Configuración de 50 usuarios
- `admin.html` - Vista rápida de sectores (admin)
- `admin-panel.html` - Panel completo de administración
- `generador-urls.html` - Herramienta administrativa
- `manifest.json` - Configuración PWA
- `README.md` - Esta documentación

### **Backend (Node-RED)**
- `node-red-api-config.json` - Configuración API Node-RED

## 🔑 **Sistema de Acceso**

### **Formato de URLs:**
```
# Usuarios normales (sector específico):
https://tu-usuario.github.io/app_tomas/?user=001&token=s2a_abc123_2024

# Usuario administrador (todos los sectores):
https://tu-usuario.github.io/app_tomas/?user=admin&token=admin_master_2024_secure
```

### **Configuración de Usuarios:**
```javascript
// ADMINISTRADOR - Ve todos los sectores
'admin': { sector: 'ALL', valve: 'ALL', name: 'Administrador Sistema', token: 'admin_master_2024_secure', isAdmin: true }

// Usuarios normales - Solo su sector
'001': { sector: 2, valve: 'A', name: 'Juan Pérez González', token: 's2a_abc123_2024' }
// Usuario 001 ve solo: H1 002 Válvula A
```

## 🚀 **Despliegue Rápido**

### **1. GitHub Pages:**
```bash
1. Crear repositorio público: "app-tomas"
2. Subir archivos de la carpeta app_tomas/
3. Activar GitHub Pages en Settings
4. URL: https://tu-usuario.github.io/app-tomas/
```

### **2. Node-RED:**
```bash
1. Importar node-red-api-config.json
2. Configurar CORS en settings.js
3. Exponer a internet (ngrok/dominio)
```

### **3. Generar URLs:**
```bash
1. Abrir generador-urls.html
2. Configurar URL base de GitHub Pages
3. Generar 50 URLs personalizadas
4. Distribuir a usuarios
```

## 📱 **Características Móviles**

- ✅ **PWA** - Se instala como app nativa
- ✅ **Responsive** - Optimizado para móviles
- ✅ **Offline** - Funciona sin internet
- ✅ **Touch** - Controles táctiles optimizados

## 🔐 **Seguridad**

- ✅ **Token único** por usuario/sector/válvula
- ✅ **Acceso específico** - Solo su sector asignado
- ✅ **Validación cruzada** en Node-RED
- ✅ **HTTPS** automático con GitHub Pages

## 👑 **Panel de Administración**

### **Funcionalidades del Admin:**
- ✅ **Gestión de Usuarios** - Añadir, editar, eliminar usuarios
- ✅ **Asignación de Permisos** - Asignar sectores y válvulas
- ✅ **Vista de Todas las Tomas** - Monitoreo completo del sistema
- ✅ **Generación de URLs** - Crear enlaces personalizados
- ✅ **Estadísticas** - Resumen del sistema
- ✅ **Exportación** - Backup de configuraciones

### **Acceso Admin:**
```
URL: https://tu-usuario.github.io/app_tomas/?user=admin&token=admin_master_2024_secure
→ Redirige automáticamente al panel de administración
```

## 📊 **Distribución de Usuarios**

```
50 usuarios distribuidos en sectores:
- Sectores H1: 10 usuarios (sectores 2-6)
- Sectores H2: 10 usuarios (sectores 13-18)
- Sectores H3: 10 usuarios (sectores 26-30)
- Sectores H4: 10 usuarios (sectores 39-43)
- Sectores H5: 10 usuarios (sectores 49-53)

Cada sector puede tener:
- Usuario A: Ve solo válvula A
- Usuario B: Ve solo válvula B
```

## 🛠️ **Personalización**

### **Cambiar Usuarios:**
Editar `usuarios-sectores-config.js`:
```javascript
'051': { sector: 54, valve: 'A', name: 'Nuevo Usuario', token: 's54a_nuevo_2024' }
```

### **Cambiar Colores:**
Editar CSS en `index.html`:
```css
:root {
    --primary-color: #1e3c72;
    --secondary-color: #2a5298;
}
```

## 📧 **Distribución a Usuarios**

### **Plantilla WhatsApp:**
```
🚿 TU ACCESO PERSONAL AL SECTOR

Hola [NOMBRE],
Tu enlace: [URL]

📱 Instala la app:
1. Abre el enlace en tu móvil
2. Toca "Instalar App"
3. Se añade a tu pantalla de inicio

✅ Puedes ver:
- Flujo en tiempo real
- Consumos diarios/totales
- Resetear contadores

❗ No compartas tu enlace
```

## 🔧 **Integración con Sistema Actual**

El sistema usa los mismos arrays de tu HTML:
```javascript
// Compatible con tu sistema actual:
FLOWS.A[index], FLOWS.B[index]
TOTALS.A[index], TOTALS.B[index] 
DAILYS.A[index], DAILYS.B[index]
STATUS.A[index], STATUS.B[index]
MODES.A[index], MODES.B[index]
```

## 📈 **Estadísticas del Sistema**

- **50 usuarios** configurados
- **25 sectores únicos** cubiertos
- **25 válvulas A** + **25 válvulas B**
- **100% móvil** optimizado

## 🆘 **Soporte**

### **Problemas Comunes:**
- **URL no funciona** → Verificar token
- **No se conecta** → Revisar Node-RED
- **No se instala** → Verificar HTTPS

### **Logs Node-RED:**
```javascript
node.log(`Acceso usuario ${userId} a sector ${sectorId} válvula ${valve}`);
```

## 🎯 **Próximos Pasos**

1. ✅ Subir archivos a GitHub Pages
2. ✅ Configurar Node-RED API
3. ✅ Generar URLs personalizadas
4. ✅ Distribuir a usuarios
5. ✅ Monitorear funcionamiento

---

**Sistema listo para producción** 🚀

**Versión:** 1.0 | **Fecha:** Octubre 2024
