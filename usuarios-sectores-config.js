// ======================================================
// MEMAC - CONFIGURACIÓN MULTI-VÁLVULA POR CLIENTE
// ======================================================

const USUARIOS_SECTORES_CONFIG = {
    admin: {
        name: 'Administrador Sistema',
        token: 'admin_master_2024_secure',
        isAdmin: true,
        accesos: [
            {
                sector: 'ALL',
                valve: 'ALL',
                parcela: 'ALL',
                contador: 'ALL',
                hidrante: 'ALL'
            }
        ]
    },

    '001': {
        name: 'JOSE ANTONIO ALMORAGIN HEREDIA',
        token: 'memac_001_2026_secure',
        accesos: [
            { sector: 46, valve: 'A', contador: '504', parcela: '7', hidrante: getSectorLabel(46) },
            { sector: 70, valve: 'A', contador: '504', parcela: '68', hidrante: getSectorLabel(70) },
            { sector: 80, valve: 'B', contador: '503', parcela: '33', hidrante: getSectorLabel(80) }
        ]
    },

    '002': {
        name: 'JESUS ARANDA BOROBIA',
        token: 'memac_002_2026_secure',
        accesos: [
            { sector: 81, valve: 'A', contador: '503', parcela: '35', hidrante: getSectorLabel(81) }
        ]
    },

    '003': {
        name: 'MARTIN ARANDA BOROBIA',
        token: 'memac_003_2026_secure',
        accesos: [
            { sector: 82, valve: 'A', contador: '503', parcela: '37', hidrante: getSectorLabel(82) },
            { sector: 165, valve: 'A', contador: '503', parcela: '213', hidrante: getSectorLabel(165) }
        ]
    },

    '004': {
        name: 'JOSE MARI ARANDA RUIZ',
        token: 'memac_004_2026_secure',
        accesos: [
            { sector: 11, valve: 'A', contador: '503', parcela: '40', hidrante: getSectorLabel(11) }
        ]
    },

    '005': {
        name: 'MERCEDES ASO',
        token: 'memac_005_2026_secure',
        accesos: [
            { sector: 47, valve: 'B', contador: '504', parcela: '4', hidrante: getSectorLabel(47) },
            { sector: 123, valve: 'A', contador: '503', parcela: '114', hidrante: getSectorLabel(123) }
        ]
    },

    '006': {
        name: 'AYUNTAMIENTO(VACAS)',
        token: 'memac_006_2026_secure',
        accesos: []
    },

    '007': {
        name: 'ALEJANDRO AZNAR JARRETA',
        token: 'memac_007_2026_secure',
        accesos: [
            { sector: 65, valve: 'A', contador: '504', parcela: '18', hidrante: getSectorLabel(65) }
        ]
    },

    '008': {
        name: 'JAVIER AZNAR JARRETA',
        token: 'memac_008_2026_secure',
        accesos: []
    },

    '009': {
        name: 'JAVIER BONA SORIANO',
        token: 'memac_009_2026_secure',
        accesos: [
            { sector: 20, valve: 'B', contador: '507', parcela: '48', hidrante: getSectorLabel(20) },
            { sector: 51, valve: 'A', contador: '504', parcela: '31', hidrante: getSectorLabel(51) }
        ]
    },

    '010': {
        name: 'JUAN BONA SORIANO',
        token: 'memac_010_2026_secure',
        accesos: [
            { sector: 55, valve: 'B', contador: '504', parcela: '42', hidrante: getSectorLabel(55) },
            { sector: 61, valve: 'A', contador: '504', parcela: '89', hidrante: getSectorLabel(61) },
            { sector: 62, valve: 'A', contador: '504', parcela: '85', hidrante: getSectorLabel(62) }
        ]
    },

    '011': {
        name: 'VICTORIANO BOROBIA JARRETA',
        token: 'memac_011_2026_secure',
        accesos: [
            { sector: 35, valve: 'B', contador: '507', parcela: '83', hidrante: getSectorLabel(35) }
        ]
    },

    '012': {
        name: 'FERNANDO CUARTERO LABORDA',
        token: 'memac_012_2026_secure',
        accesos: [
            { sector: 49, valve: 'A', contador: '504', parcela: '91', hidrante: getSectorLabel(49) },
            { sector: 93, valve: 'A', contador: '503', parcela: '127/128/133', hidrante: getSectorLabel(93) },
            { sector: 152, valve: 'A', contador: '503', parcela: '225', hidrante: getSectorLabel(152) }
        ]
    },

    '013': {
        name: 'JOAQUINA CUARTERO LABORDA',
        token: 'memac_013_2026_secure',
        accesos: [
            { sector: 27, valve: 'A', contador: '507', parcela: '64', hidrante: getSectorLabel(27) },
            { sector: 145, valve: 'B', contador: '503', parcela: '204/203', hidrante: getSectorLabel(145) },
            { sector: 146, valve: 'A', contador: '503', parcela: '223/224', hidrante: getSectorLabel(146) },
            { sector: 160, valve: 'A', contador: '503', parcela: '221/222', hidrante: getSectorLabel(160) },
            { sector: 161, valve: 'A', contador: '503', parcela: '205/206', hidrante: getSectorLabel(161) }
        ]
    },

    '014': {
        name: 'JAVIER ESPLIGARES ANSONERA',
        token: 'memac_014_2026_secure',
        accesos: [
            { sector: 21, valve: 'B', contador: '507', parcela: '45', hidrante: getSectorLabel(21) },
            { sector: 89, valve: 'A', contador: '503', parcela: '142', hidrante: getSectorLabel(89) }
        ]
    },

    '015': {
        name: 'MARIANO ESPLIGARES BARRERAS',
        token: 'memac_015_2026_secure',
        accesos: [
            { sector: 40, valve: 'A', contador: '503', parcela: '23/22', hidrante: getSectorLabel(40) },
            { sector: 68, valve: 'B', contador: '504', parcela: '75', hidrante: getSectorLabel(68) },
            { sector: 83, valve: 'B', contador: '503', parcela: '83', hidrante: getSectorLabel(83) },
            { sector: 87, valve: 'A', contador: '503', parcela: '87', hidrante: getSectorLabel(87) }
        ]
    },

    '016': {
        name: 'SANTIAGO FERRANDEZ DE TORRES',
        token: 'memac_016_2026_secure',
        accesos: [
            { sector: 9, valve: 'B', contador: '503', parcela: '190', hidrante: getSectorLabel(9) },
            { sector: 12, valve: 'A', contador: '503', parcela: '49', hidrante: getSectorLabel(12) },
            { sector: 26, valve: 'B', contador: '507', parcela: '63', hidrante: getSectorLabel(26) },
            { sector: 49, valve: 'B', contador: '503', parcela: '190', hidrante: getSectorLabel(49) },
            { sector: 64, valve: 'B', contador: '504', parcela: '83', hidrante: getSectorLabel(64) },
            { sector: 85, valve: 'B', contador: '503', parcela: '69', hidrante: getSectorLabel(85) },
            { sector: 91, valve: 'B', contador: '507', parcela: '14', hidrante: getSectorLabel(91) },
            { sector: 107, valve: 'A', contador: '503', parcela: '92', hidrante: getSectorLabel(107) },
            { sector: 129, valve: 'B', contador: '503', parcela: '82', hidrante: getSectorLabel(129) },
            { sector: 143, valve: 'A', contador: '503', parcela: '138', hidrante: getSectorLabel(143) }
        ]
    },

    '017': {
        name: 'JUAN CRUZ FERRANDEZ HEREDIA',
        token: 'memac_017_2026_secure',
        accesos: [
            { sector: 10, valve: 'A', contador: '503', parcela: '229', hidrante: getSectorLabel(10) },
            { sector: 78, valve: 'A', contador: '503', parcela: '229', hidrante: getSectorLabel(78) }
        ]
    },

    '018': {
        name: 'MARISA GIL ESPLIGARES',
        token: 'memac_018_2026_secure',
        accesos: [
            { sector: 10, valve: 'B', contador: '504', parcela: '72', hidrante: getSectorLabel(10) },
            { sector: 55, valve: 'A', contador: '504', parcela: '43', hidrante: getSectorLabel(55) },
            { sector: 62, valve: 'B', contador: '504', parcela: '86', hidrante: getSectorLabel(62) },
            { sector: 70, valve: 'B', contador: '504', parcela: '72', hidrante: getSectorLabel(70) },
            { sector: 103, valve: 'B', contador: '503', parcela: '65', hidrante: getSectorLabel(103) }
        ]
    },

    '019': {
        name: 'JEROMIN GRACIA AZCONA',
        token: 'memac_019_2026_secure',
        accesos: [
            { sector: 12, valve: 'B', contador: '507', parcela: '67', hidrante: getSectorLabel(12) },
            { sector: 29, valve: 'A', contador: '507', parcela: '67', hidrante: getSectorLabel(29) }
        ]
    },

    '020': {
        name: 'BIENVENIDO GRACIA ESPLIGARES',
        token: 'memac_020_2026_secure',
        accesos: [
            { sector: 50, valve: 'B', contador: '504', parcela: '27/28', hidrante: getSectorLabel(50) }
        ]
    },

    '021': {
        name: 'RAFAEL GRACIA ESPLIGARES',
        token: 'memac_021_2026_secure',
        accesos: []
    },

    '022': {
        name: 'JEROMIN GRACIA MARTINEZ',
        token: 'memac_022_2026_secure',
        accesos: [
            { sector: 37, valve: 'A', contador: '507', parcela: '92', hidrante: getSectorLabel(37) }
        ]
    },

    '023': {
        name: 'JORGE GRACIA VELA',
        token: 'memac_023_2026_secure',
        accesos: [
            { sector: 59, valve: 'B', contador: '504', parcela: '52', hidrante: getSectorLabel(59) }
        ]
    },

    '024': {
        name: 'ERNESTO GRACIA',
        token: 'memac_024_2026_secure',
        accesos: [
            { sector: 18, valve: 'A', contador: '507', parcela: '58', hidrante: getSectorLabel(18) }
        ]
    },

    '025': {
        name: 'ANGEL HEREDIA CARABANTES',
        token: 'memac_025_2026_secure',
        accesos: [
            { sector: 151, valve: 'B', contador: '503', parcela: '170', hidrante: getSectorLabel(151) },
            { sector: 30, valve: 'A', contador: '507', parcela: '70', hidrante: getSectorLabel(30) }
        ]
    },

    '026': {
        name: 'MARTIN HEREDIA GARCIA',
        token: 'memac_026_2026_secure',
        accesos: [
            { sector: 24, valve: 'A', contador: '507', parcela: '36', hidrante: getSectorLabel(24) },
            { sector: 24, valve: 'B', contador: '507', parcela: '37', hidrante: getSectorLabel(24) },
            { sector: 31, valve: 'B', contador: '507', parcela: '71', hidrante: getSectorLabel(31) },
            { sector: 57, valve: 'A', contador: '503', parcela: '57', hidrante: getSectorLabel(57) },
            { sector: 71, valve: 'A', contador: '504', parcela: '65', hidrante: getSectorLabel(71) },
            { sector: 71, valve: 'B', contador: '504', parcela: '66', hidrante: getSectorLabel(71) },
            { sector: 127, valve: 'A', contador: '503', parcela: '97/112', hidrante: getSectorLabel(127) }
        ]
    },

    '027': {
        name: 'SILVIA HEREDIA GARCIA',
        token: 'memac_027_2026_secure',
        accesos: [
            { sector: 39, valve: 'A', contador: '504', parcela: '24', hidrante: getSectorLabel(39) },
            { sector: 146, valve: 'B', contador: '503', parcela: '209', hidrante: getSectorLabel(146) },
            { sector: 173, valve: 'A', contador: '503', parcela: '154', hidrante: getSectorLabel(173) },
            { sector: 177, valve: 'A', contador: '503', parcela: '156', hidrante: getSectorLabel(177) }
        ]
    },

    '028': {
        name: 'ANA ISABEL JARRETA ESPLIGARES',
        token: 'memac_028_2026_secure',
        accesos: [
            { sector: 17, valve: 'B', contador: '507', parcela: '57', hidrante: getSectorLabel(17) },
            { sector: 56, valve: 'A', contador: '504', parcela: '45', hidrante: getSectorLabel(56) },
            { sector: 142, valve: 'A', contador: '503', parcela: '183', hidrante: getSectorLabel(142) }
        ]
    },

    '029': {
        name: 'JOSE ANTONIO JARRETA ESPLIGARES',
        token: 'memac_029_2026_secure',
        accesos: [
            { sector: 13, valve: 'A', contador: '507', parcela: '30', hidrante: getSectorLabel(13) },
            { sector: 90, valve: 'A', contador: '503', parcela: '140', hidrante: getSectorLabel(90) }
        ]
    },

    '030': {
        name: 'ALFONSO JARRETA SOLA',
        token: 'memac_030_2026_secure',
        accesos: [
            { sector: 108, valve: 'A', contador: '503', parcela: '218', hidrante: getSectorLabel(108) },
            { sector: 169, valve: 'A', contador: '503', parcela: '199', hidrante: getSectorLabel(169) },
            { sector: 169, valve: 'B', contador: '503', parcela: '182', hidrante: getSectorLabel(169) }
        ]
    },

    '031': {
        name: 'ANA BLANCA JARRETA SOLA',
        token: 'memac_031_2026_secure',
        accesos: [
            { sector: 34, valve: 'A', contador: '507', parcela: '79', hidrante: getSectorLabel(34) },
            { sector: 150, valve: 'A', contador: '503', parcela: '173', hidrante: getSectorLabel(150) },
            { sector: 163, valve: 'B', contador: '503', parcela: '211', hidrante: getSectorLabel(163) }
        ]
    },

    '032': {
        name: 'CARMELO MARTINEZ ESPLIGARES',
        token: 'memac_032_2026_secure',
        accesos: [
            { sector: 26, valve: 'A', contador: '507', parcela: '62', hidrante: getSectorLabel(26) },
            { sector: 29, valve: 'B', contador: '507', parcela: '68', hidrante: getSectorLabel(29) },
            { sector: 30, valve: 'B', contador: '507', parcela: '69', hidrante: getSectorLabel(30) },
            { sector: 41, valve: 'B', contador: '504', parcela: '19', hidrante: getSectorLabel(41) },
            { sector: 80, valve: 'A', contador: '503', parcela: '35', hidrante: getSectorLabel(80) },
            { sector: 83, valve: 'A', contador: '503', parcela: '50', hidrante: getSectorLabel(83) },
            { sector: 98, valve: 'A', contador: '503', parcela: '52', hidrante: getSectorLabel(98) },
            { sector: 122, valve: 'A', contador: '503', parcela: '116', hidrante: getSectorLabel(122) },
            { sector: 129, valve: 'A', contador: '503', parcela: '81', hidrante: getSectorLabel(129) },
            { sector: 152, valve: 'B', contador: '503', parcela: '163', hidrante: getSectorLabel(152) },
            { sector: 170, valve: 'A', contador: '503', parcela: '175', hidrante: getSectorLabel(170) },
            { sector: 172, valve: 'B', contador: '503', parcela: '164', hidrante: getSectorLabel(172) },
            { sector: 179, valve: 'A', contador: '503', parcela: '45', hidrante: getSectorLabel(179) },
            { sector: 43, valve: 'B', contador: '504', parcela: '14', hidrante: getSectorLabel(43) }
        ]
    },

    '033': {
        name: 'RAFAEL MORALES PEDRAZA',
        token: 'memac_033_2026_secure',
        accesos: [
            { sector: 22, valve: 'B', contador: '507', parcela: '42', hidrante: getSectorLabel(22) },
            { sector: 170, valve: 'B', contador: '503', parcela: '176', hidrante: getSectorLabel(170) }
        ]
    },

    '034': {
        name: 'ELENA PEDRAZA',
        token: 'memac_034_2026_secure',
        accesos: [
            { sector: 43, valve: 'B', contador: '504', parcela: '14', hidrante: getSectorLabel(43) }
        ]
    },

    '035': {
        name: 'MARTIN REMON GUITARTE',
        token: 'memac_035_2026_secure',
        accesos: [
            { sector: 50, valve: 'A', contador: '504', parcela: '29', hidrante: getSectorLabel(50) },
            { sector: 92, valve: 'A', contador: '503', parcela: '134', hidrante: getSectorLabel(92) },
            { sector: 119, valve: 'A', contador: '503', parcela: '123', hidrante: getSectorLabel(119) },
            { sector: 166, valve: 'A', contador: '503', parcela: '216', hidrante: getSectorLabel(166) },
            { sector: 172, valve: 'A', contador: '503', parcela: '158', hidrante: getSectorLabel(172) }
        ]
    },

    '036': {
        name: 'ANGEL POMPILIO REMON HEREDIA',
        token: 'memac_036_2026_secure',
        accesos: [
            { sector: 162, valve: 'A', contador: '503', parcela: '206', hidrante: getSectorLabel(162) },
            { sector: 171, valve: 'B', contador: '503', parcela: '166', hidrante: getSectorLabel(171) }
        ]
    },

    '037': {
        name: 'JAVIER REMON HEREDIA',
        token: 'memac_037_2026_secure',
        accesos: [
            { sector: 21, valve: 'A', contador: '507', parcela: '46/47', hidrante: getSectorLabel(21) },
            { sector: 52, valve: 'B', contador: '504', parcela: '32', hidrante: getSectorLabel(52) }
        ]
    },

    '038': {
        name: 'OSCAR REMON',
        token: 'memac_038_2026_secure',
        accesos: [
            { sector: 36, valve: 'B', contador: '507', parcela: '85', hidrante: getSectorLabel(36) }
        ]
    },

    '039': {
        name: 'JOSE FINA RUIZ ARANDA',
        token: 'memac_039_2026_secure',
        accesos: [
            { sector: 140, valve: 'A', contador: '503', parcela: '11', hidrante: getSectorLabel(140) }
        ]
    }
};

// ======================================================
// LABELS DE SECTOR / HIDRANTE
// ======================================================

function getSectorLabel(sectorNum) {
    if (sectorNum === 'ALL') return 'Todos los sectores';

    const SECTOR_TO_HIDRANTE = {
        1: 1, 16: 2, 25: 3, 38: 4, 48: 5, 60: 6, 75: 7,
        86: 8, 97: 9, 118: 10, 141: 11, 147: 12, 154: 13, 168: 14
    };

    if (SECTOR_TO_HIDRANTE[sectorNum]) {
        return `Hidrante ${SECTOR_TO_HIDRANTE[sectorNum]}`;
    }

    const H2_SECTORS = [13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24];
    const H3_SECTORS = [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37];
    const H4_SECTORS = [39, 40, 41, 42, 43, 44, 45, 46, 47];
    const H5_SECTORS = [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
    const H6_SECTORS = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
    const H7_SECTORS = [76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 179];
    const H8_SECTORS = [87, 88, 89, 90, 91, 92, 93, 94, 95, 96];
    const H9_SECTORS = [98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117];
    const H10_SECTORS = [119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 174, 175];
    const H11_SECTORS = [142, 143, 144, 145, 146];
    const H12_SECTORS = [148, 149, 150, 151, 152, 153, 176];
    const H13_SECTORS = [155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167];
    const H14_SECTORS = [169, 170, 171, 172, 173, 177];

    if (H2_SECTORS.includes(sectorNum)) return `H2 ${String(sectorNum).padStart(3, '0')}`;
    if (H3_SECTORS.includes(sectorNum)) return `H3 ${String(sectorNum).padStart(3, '0')}`;
    if (H4_SECTORS.includes(sectorNum)) return `H4 ${String(sectorNum).padStart(3, '0')}`;
    if (H5_SECTORS.includes(sectorNum)) return `H5 ${String(sectorNum).padStart(3, '0')}`;
    if (H6_SECTORS.includes(sectorNum)) return `H6 ${String(sectorNum).padStart(3, '0')}`;
    if (H7_SECTORS.includes(sectorNum)) return `H7 ${String(sectorNum).padStart(3, '0')}`;
    if (H8_SECTORS.includes(sectorNum)) return `H8 ${String(sectorNum).padStart(3, '0')}`;
    if (H9_SECTORS.includes(sectorNum)) return `H9 ${String(sectorNum).padStart(3, '0')}`;
    if (H10_SECTORS.includes(sectorNum)) return `H10 ${String(sectorNum).padStart(3, '0')}`;
    if (H11_SECTORS.includes(sectorNum)) return `H11 ${String(sectorNum).padStart(3, '0')}`;
    if (H12_SECTORS.includes(sectorNum)) return `H12 ${String(sectorNum).padStart(3, '0')}`;
    if (H13_SECTORS.includes(sectorNum)) return `H13 ${String(sectorNum).padStart(3, '0')}`;
    if (H14_SECTORS.includes(sectorNum)) return `H14 ${String(sectorNum).padStart(3, '0')}`;

    return `H1 ${String(sectorNum).padStart(3, '0')}`;
}

// ======================================================
// UTILIDADES
// ======================================================

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
        token: config.token,
        isAdmin: !!config.isAdmin,
        accesos: config.accesos || []
    };
}

function generarURLsAccesoSectores(baseURL = 'http://localhost:1880/sector') {
    const urls = {};

    for (const [userId, config] of Object.entries(USUARIOS_SECTORES_CONFIG)) {
        urls[userId] = {
            url: `${baseURL}?user=${userId}&token=${config.token}`,
            usuario: config.name,
            accesos: config.accesos || [],
            totalAccesos: (config.accesos || []).length
        };
    }

    return urls;
}

function obtenerUsuariosPorSector(sectorId) {
    const usuarios = [];

    for (const [userId, config] of Object.entries(USUARIOS_SECTORES_CONFIG)) {
        const accesos = config.accesos || [];
        const encontrados = accesos.filter(a => a.sector === sectorId);

        if (encontrados.length) {
            usuarios.push({
                id: userId,
                nombre: config.name,
                token: config.token,
                accesos: encontrados
            });
        }
    }

    return usuarios;
}

function obtenerUsuariosPorSectorValve(sectorId, valve) {
    const usuarios = [];

    for (const [userId, config] of Object.entries(USUARIOS_SECTORES_CONFIG)) {
        const accesos = (config.accesos || []).filter(a => a.sector === sectorId && a.valve === valve);

        if (accesos.length) {
            usuarios.push({
                id: userId,
                nombre: config.name,
                token: config.token,
                accesos
            });
        }
    }

    return usuarios;
}

function obtenerEstadisticasSistema() {
    const sectores = new Set();
    let totalAccesos = 0;
    let valvulasA = 0;
    let valvulasB = 0;

    for (const [userId, config] of Object.entries(USUARIOS_SECTORES_CONFIG)) {
        if (userId === 'admin') continue;

        for (const acceso of (config.accesos || [])) {
            totalAccesos++;
            if (acceso.sector !== 'ALL') sectores.add(acceso.sector);
            if (acceso.valve === 'A') valvulasA++;
            if (acceso.valve === 'B') valvulasB++;
        }
    }

    return {
        totalUsuarios: Object.keys(USUARIOS_SECTORES_CONFIG).filter(id => id !== 'admin').length,
        totalAccesos,
        sectoresUnicos: sectores.size,
        usuariosValvulaA: valvulasA,
        usuariosValvulaB: valvulasB
    };
}

// ======================================================
// EXPORTS
// ======================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        USUARIOS_SECTORES_CONFIG,
        getSectorLabel,
        validarAccesoSector,
        generarURLsAccesoSectores,
        obtenerUsuariosPorSector,
        obtenerUsuariosPorSectorValve,
        obtenerEstadisticasSistema
    };
} else {
    window.USUARIOS_SECTORES_CONFIG = USUARIOS_SECTORES_CONFIG;
    window.getSectorLabel = getSectorLabel;
    window.validarAccesoSector = validarAccesoSector;
    window.generarURLsAccesoSectores = generarURLsAccesoSectores;
    window.obtenerUsuariosPorSector = obtenerUsuariosPorSector;
    window.obtenerUsuariosPorSectorValve = obtenerUsuariosPorSectorValve;
    window.obtenerEstadisticasSistema = obtenerEstadisticasSistema;
}
