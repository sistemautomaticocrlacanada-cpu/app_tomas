// Configuración de usuarios para el sistema de sectores
// Cada usuario tiene acceso a su sector específico (ej: H1 002 A o H1 002 B)

const USUARIOS_SECTORES_CONFIG = {
    // Formato: 'ID_USUARIO': { sector: NUMERO, valve: 'A'/'B', name: 'NOMBRE', token: 'TOKEN_UNICO' }
    
    // USUARIO ADMINISTRADOR - Ve todos los sectores
    'admin': { sector: 'ALL', valve: 'ALL', name: 'Administrador Sistema', token: 'admin_master_2024_secure', isAdmin: true },
    
    // Sectores H1 (001-012)
    '001': { sector: 2, valve: 'A', name: 'Juan Pérez González', token: 's2a_abc123_2024' },
    '002': { sector: 2, valve: 'B', name: 'María García López', token: 's2b_def456_2024' },
    '003': { sector: 3, valve: 'A', name: 'Carlos López Martín', token: 's3a_ghi789_2024' },
    '004': { sector: 3, valve: 'B', name: 'Ana Martín Ruiz', token: 's3b_jkl012_2024' },
    '005': { sector: 4, valve: 'A', name: 'Luis Rodríguez Sánchez', token: 's4a_mno345_2024' },
    '006': { sector: 4, valve: 'B', name: 'Carmen Sánchez Torres', token: 's4b_pqr678_2024' },
    '007': { sector: 5, valve: 'A', name: 'Miguel Torres Ruiz', token: 's5a_stu901_2024' },
    '008': { sector: 5, valve: 'B', name: 'Isabel Ruiz Moreno', token: 's5b_vwx234_2024' },
    '009': { sector: 6, valve: 'A', name: 'Francisco Moreno Jiménez', token: 's6a_yza567_2024' },
    '010': { sector: 6, valve: 'B', name: 'Pilar Jiménez Álvarez', token: 's6b_bcd890_2024' },

    // Sectores H2 (013-024)
    '011': { sector: 13, valve: 'A', name: 'Antonio Álvarez Romero', token: 's13a_efg123_2024' },
    '012': { sector: 13, valve: 'B', name: 'Rosa Romero Navarro', token: 's13b_hij456_2024' },
    '013': { sector: 14, valve: 'A', name: 'José Navarro Herrera', token: 's14a_klm789_2024' },
    '014': { sector: 14, valve: 'B', name: 'Lucía Herrera Vega', token: 's14b_nop012_2024' },
    '015': { sector: 15, valve: 'A', name: 'Pedro Vega Castro', token: 's15a_qrs345_2024' },
    '016': { sector: 15, valve: 'B', name: 'Elena Castro Ramos', token: 's15b_tuv678_2024' },
    '017': { sector: 17, valve: 'A', name: 'Manuel Ramos Silva', token: 's17a_wxy901_2024' },
    '018': { sector: 17, valve: 'B', name: 'Teresa Silva Ortega', token: 's17b_zab234_2024' },
    '019': { sector: 18, valve: 'A', name: 'Andrés Ortega Mendoza', token: 's18a_cde567_2024' },
    '020': { sector: 18, valve: 'B', name: 'Beatriz Mendoza Vargas', token: 's18b_fgh890_2024' },

    // Sectores H3 (026-037)
    '021': { sector: 26, valve: 'A', name: 'Rafael Vargas Delgado', token: 's26a_ijk123_2024' },
    '022': { sector: 26, valve: 'B', name: 'Cristina Delgado Peña', token: 's26b_lmn456_2024' },
    '023': { sector: 27, valve: 'A', name: 'Joaquín Peña Aguilar', token: 's27a_opq789_2024' },
    '024': { sector: 27, valve: 'B', name: 'Dolores Aguilar Campos', token: 's27b_rst012_2024' },
    '025': { sector: 28, valve: 'A', name: 'Emilio Campos Guerrero', token: 's28a_uvw345_2024' },
    '026': { sector: 28, valve: 'B', name: 'Gloria Guerrero Medina', token: 's28b_xyz678_2024' },
    '027': { sector: 29, valve: 'A', name: 'Ramón Medina Cortés', token: 's29a_abc901_2024' },
    '028': { sector: 29, valve: 'B', name: 'Amparo Cortés Fuentes', token: 's29b_def234_2024' },
    '029': { sector: 30, valve: 'A', name: 'Sergio Fuentes Molina', token: 's30a_ghi567_2024' },
    '030': { sector: 30, valve: 'B', name: 'Montserrat Molina Prieto', token: 's30b_jkl890_2024' },

    // Sectores H4 (039-047)
    '031': { sector: 39, valve: 'A', name: 'Víctor Prieto Gallego', token: 's39a_mno123_2024' },
    '032': { sector: 39, valve: 'B', name: 'Remedios Gallego Cabrera', token: 's39b_pqr456_2024' },
    '033': { sector: 40, valve: 'A', name: 'Ignacio Cabrera Domínguez', token: 's40a_stu789_2024' },
    '034': { sector: 40, valve: 'B', name: 'Encarnación Domínguez Gil', token: 's40b_vwx012_2024' },
    '035': { sector: 41, valve: 'A', name: 'Esteban Gil Cano', token: 's41a_yza345_2024' },
    '036': { sector: 41, valve: 'B', name: 'Consuelo Cano Márquez', token: 's41b_bcd678_2024' },
    '037': { sector: 42, valve: 'A', name: 'Rubén Márquez León', token: 's42a_efg901_2024' },
    '038': { sector: 42, valve: 'B', name: 'Inmaculada León Herrero', token: 's42b_hij234_2024' },
    '039': { sector: 43, valve: 'A', name: 'Jesús Herrero Pascual', token: 's43a_klm567_2024' },
    '040': { sector: 43, valve: 'B', name: 'Esperanza Pascual Santana', token: 's43b_nop890_2024' },

    // Sectores H5 (049-059)
    '041': { sector: 49, valve: 'A', name: 'Alejandro Santana Ibáñez', token: 's49a_qrs123_2024' },
    '042': { sector: 49, valve: 'B', name: 'Rosario Ibáñez Carrasco', token: 's49b_tuv456_2024' },
    '043': { sector: 50, valve: 'A', name: 'Gonzalo Carrasco Blanco', token: 's50a_wxy789_2024' },
    '044': { sector: 50, valve: 'B', name: 'Milagros Blanco Serrano', token: 's50b_zab012_2024' },
    '045': { sector: 51, valve: 'A', name: 'Nicolás Serrano Mora', token: 's51a_cde345_2024' },
    '046': { sector: 51, valve: 'B', name: 'Purificación Mora Vicente', token: 's51b_fgh678_2024' },
    '047': { sector: 52, valve: 'A', name: 'Tomás Vicente Lozano', token: 's52a_ijk901_2024' },
    '048': { sector: 52, valve: 'B', name: 'Virtudes Lozano Moya', token: 's52b_lmn234_2024' },
    '049': { sector: 53, valve: 'A', name: 'Ángel Moya Soto', token: 's53a_opq567_2024' },
    '050': { sector: 53, valve: 'B', name: 'Concepción Soto Peña', token: 's53b_rst890_2024' }
};

// Función para obtener el label del sector (usando la misma lógica del HTML)
function getSectorLabel(sectorNum) {
    // Mapeo de sectores a hidrantes según especificaciones del usuario
    const SECTOR_TO_HIDRANTE = {
        1: 1, 16: 2, 25: 3, 38: 4, 48: 5, 60: 6, 75: 7, 86: 8, 97: 9, 118: 10, 141: 11, 147: 12, 154: 13, 168: 14
    };

    if (SECTOR_TO_HIDRANTE[sectorNum]) {
        return `Hidrante ${SECTOR_TO_HIDRANTE[sectorNum]}`;
    }
    
    // Sectores H2
    const H2_SECTORS = [13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24];
    if (H2_SECTORS.includes(sectorNum)) {
        return `H2 ${String(sectorNum).padStart(3,'0')}`;
    }
    
    // Sectores H3
    const H3_SECTORS = [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];
    if (H3_SECTORS.includes(sectorNum)) {
        return `H3 ${String(sectorNum).padStart(3,'0')}`;
    }
    
    // Sectores H4
    const H4_SECTORS = [39, 40, 41, 42, 43, 44, 45, 46, 47];
    if (H4_SECTORS.includes(sectorNum)) {
        return `H4 ${String(sectorNum).padStart(3,'0')}`;
    }
    
    // Sectores H5
    const H5_SECTORS = [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
    if (H5_SECTORS.includes(sectorNum)) {
        return `H5 ${String(sectorNum).padStart(3,'0')}`;
    }
    
    // Sectores H6
    const H6_SECTORS = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
    if (H6_SECTORS.includes(sectorNum)) {
        return `H6 ${String(sectorNum).padStart(3,'0')}`;
    }
    
    // Sectores H7
    const H7_SECTORS = [76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 179];
    if (H7_SECTORS.includes(sectorNum)) {
        return `H7 ${String(sectorNum).padStart(3,'0')}`;
    }
    
    // Sectores H8
    const H8_SECTORS = [87, 88, 89, 90, 91, 92, 93, 94, 95, 96];
    if (H8_SECTORS.includes(sectorNum)) {
        return `H8 ${String(sectorNum).padStart(3,'0')}`;
    }
    
    // Sectores H9
    const H9_SECTORS = [98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117];
    if (H9_SECTORS.includes(sectorNum)) {
        return `H9 ${String(sectorNum).padStart(3,'0')}`;
    }
    
    // Sectores H10
    const H10_SECTORS = [119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 175, 174];
    if (H10_SECTORS.includes(sectorNum)) {
        return `H10 ${String(sectorNum).padStart(3,'0')}`;
    }
    
    // Sectores H11
    const H11_SECTORS = [142, 143, 144, 145, 146];
    if (H11_SECTORS.includes(sectorNum)) {
        return `H11 ${String(sectorNum).padStart(3,'0')}`;
    }
    
    // Sectores H12
    const H12_SECTORS = [148, 149, 150, 151, 152, 153, 176];
    if (H12_SECTORS.includes(sectorNum)) {
        return `H12 ${String(sectorNum).padStart(3,'0')}`;
    }
    
    // Sectores H13
    const H13_SECTORS = [155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167];
    if (H13_SECTORS.includes(sectorNum)) {
        return `H13 ${String(sectorNum).padStart(3,'0')}`;
    }
    
    // Sectores H14
    const H14_SECTORS = [169, 170, 171, 172, 173, 177];
    if (H14_SECTORS.includes(sectorNum)) {
        return `H14 ${String(sectorNum).padStart(3,'0')}`;
    }
    
    return `H1 ${String(sectorNum).padStart(3,'0')}`;
}

// Función para generar URLs de acceso para sectores
function generarURLsAccesoSectores(baseURL = 'http://localhost:1880/sector') {
    const urls = {};
    
    for (const [userId, config] of Object.entries(USUARIOS_SECTORES_CONFIG)) {
        const sectorLabel = getSectorLabel(config.sector);
        urls[userId] = {
            url: `${baseURL}?user=${userId}&token=${config.token}`,
            usuario: config.name,
            sector: config.sector,
            valve: config.valve,
            sectorLabel: `${sectorLabel} ${config.valve}`,
            descripcion: `${config.name} - ${sectorLabel} Válvula ${config.valve}`
        };
    }
    
    return urls;
}

// Función para validar token de usuario para sectores
function validarAccesoSector(userId, token) {
    const config = USUARIOS_SECTORES_CONFIG[userId];
    if (!config) {
        return { valido: false, error: 'Usuario no encontrado' };
    }
    
    if (config.token !== token) {
        return { valido: false, error: 'Token inválido' };
    }
    
    return { 
        valido: true, 
        usuario: config.name, 
        sector: config.sector,
        valve: config.valve,
        sectorLabel: getSectorLabel(config.sector)
    };
}

// Función para obtener usuarios por sector
function obtenerUsuariosPorSector(sectorId) {
    const usuarios = [];
    
    for (const [userId, config] of Object.entries(USUARIOS_SECTORES_CONFIG)) {
        if (config.sector === sectorId) {
            usuarios.push({
                id: userId,
                nombre: config.name,
                valve: config.valve,
                token: config.token,
                descripcion: `${config.name} - Válvula ${config.valve}`
            });
        }
    }
    
    return usuarios;
}

// Función para obtener usuarios por válvula específica
function obtenerUsuariosPorSectorValve(sectorId, valve) {
    const usuarios = [];
    
    for (const [userId, config] of Object.entries(USUARIOS_SECTORES_CONFIG)) {
        if (config.sector === sectorId && config.valve === valve) {
            usuarios.push({
                id: userId,
                nombre: config.name,
                token: config.token
            });
        }
    }
    
    return usuarios;
}

// Función para obtener estadísticas del sistema
function obtenerEstadisticasSistema() {
    const sectores = new Set();
    const valvulasA = [];
    const valvulasB = [];
    
    for (const config of Object.values(USUARIOS_SECTORES_CONFIG)) {
        sectores.add(config.sector);
        if (config.valve === 'A') valvulasA.push(config.sector);
        if (config.valve === 'B') valvulasB.push(config.sector);
    }
    
    return {
        totalUsuarios: Object.keys(USUARIOS_SECTORES_CONFIG).length,
        sectoresUnicos: sectores.size,
        usuariosValvulaA: valvulasA.length,
        usuariosValvulaB: valvulasB.length,
        sectoresConAmbas: new Set([...valvulasA].filter(s => valvulasB.includes(s))).size
    };
}

// Exportar para uso en Node.js o navegador
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        USUARIOS_SECTORES_CONFIG,
        getSectorLabel,
        generarURLsAccesoSectores,
        validarAccesoSector,
        obtenerUsuariosPorSector,
        obtenerUsuariosPorSectorValve,
        obtenerEstadisticasSistema
    };
} else {
    // Para uso en navegador
    window.USUARIOS_SECTORES_CONFIG = USUARIOS_SECTORES_CONFIG;
    window.getSectorLabel = getSectorLabel;
    window.generarURLsAccesoSectores = generarURLsAccesoSectores;
    window.validarAccesoSector = validarAccesoSector;
    window.obtenerUsuariosPorSector = obtenerUsuariosPorSector;
    window.obtenerUsuariosPorSectorValve = obtenerUsuariosPorSectorValve;
    window.obtenerEstadisticasSistema = obtenerEstadisticasSistema;
}

// Ejemplo de uso:
/*
// Generar todas las URLs para sectores
const urls = generarURLsAccesoSectores('https://mi-servidor.github.io/sectores');
console.log(urls);

// Validar acceso de usuario a sector específico
const acceso = validarAccesoSector('001', 's2a_abc123_2024');
if (acceso.valido) {
    console.log(`Acceso permitido para ${acceso.usuario} - ${acceso.sectorLabel} Válvula ${acceso.valve}`);
}

// Obtener todos los usuarios de un sector específico
const usuariosS2 = obtenerUsuariosPorSector(2);
console.log('Usuarios del Sector 2:', usuariosS2);

// Obtener usuarios de una válvula específica
const usuariosS2A = obtenerUsuariosPorSectorValve(2, 'A');
console.log('Usuarios del Sector 2 Válvula A:', usuariosS2A);

// Obtener estadísticas del sistema
const stats = obtenerEstadisticasSistema();
console.log('Estadísticas:', stats);
*/
