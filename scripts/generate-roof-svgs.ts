import fs from 'fs';

function generateRoofSVG(isAfter: boolean): string {
  const width = 1200;
  const height = 800;
  const tileCols = 14;
  const tileRows = 8;
  const tileW = width / (tileCols - 2);
  const tileH = height / (tileRows - 1);

  let tiles = '';

  for (let r = 0; r < tileRows; r++) {
    const y = r * (tileH * 0.75) - 20;
    const isOdd = r % 2 === 1;

    for (let c = -1; c < tileCols + 1; c++) {
      const x = c * tileW + (isOdd ? tileW * 0.5 : 0);

      if (isAfter) {
        // Clean, vibrant terracotta tiles with warmth and sheen
        const baseColor = (c + r) % 3 === 0 ? '#E97230' : (c + r) % 3 === 1 ? '#DE6523' : '#F17D3C';
        tiles += `
          <g transform="translate(${x}, ${y})">
            <!-- Under tile / trough -->
            <path d="M 10 0 C 15 35, 15 75, 10 110 L 80 110 C 75 75, 75 35, 80 0 Z" fill="#9C3D10" opacity="0.8" />
            <!-- Cap / cover tile (curved terracotta) -->
            <path d="M 18 10 C 22 45, 22 80, 15 115 L 75 115 C 68 80, 68 45, 72 10 Z" fill="url(#terracottaGradClean)" filter="url(#tileShadow)" />
            <!-- Highlight ridge line -->
            <path d="M 44 12 Q 45 60 43 112" stroke="#FFA066" stroke-width="3" stroke-linecap="round" opacity="0.6" />
          </g>
        `;
      } else {
        // Weathered, dark mossy tiles with dark staining, algae and lichen spots
        tiles += `
          <g transform="translate(${x}, ${y})">
            <!-- Dark weathered base -->
            <path d="M 10 0 C 15 35, 15 75, 10 110 L 80 110 C 75 75, 75 35, 80 0 Z" fill="#2A241E" />
            <!-- Weathered gray-brown cap tile -->
            <path d="M 18 10 C 22 45, 22 80, 15 115 L 75 115 C 68 80, 68 45, 72 10 Z" fill="url(#terracottaGradDirty)" filter="url(#tileShadow)" />
            <!-- Heavy dark grime streaks -->
            <path d="M 28 20 Q 30 70 26 110" stroke="#1C1814" stroke-width="5" opacity="0.75" />
            <path d="M 52 15 Q 50 65 54 105" stroke="#1C1814" stroke-width="6" opacity="0.8" />
            <!-- Moss patches (green/yellow lichen) -->
            ${((c * 7 + r * 13) % 4 === 0) ? `
              <circle cx="36" cy="45" r="14" fill="#3E4A21" opacity="0.85" filter="url(#mossBlur)" />
              <circle cx="42" cy="50" r="10" fill="#58682E" opacity="0.9" />
              <circle cx="34" cy="52" r="7" fill="#6E8435" opacity="0.85" />
              <circle cx="48" cy="42" r="5" fill="#8FA842" opacity="0.7" />
            ` : ''}
            ${((c * 5 + r * 11) % 5 === 0) ? `
              <circle cx="55" cy="85" r="12" fill="#35401C" opacity="0.85" />
              <circle cx="58" cy="88" r="8" fill="#4B5B26" opacity="0.9" />
            ` : ''}
          </g>
        `;
      }
    }
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
      <defs>
        <!-- Shadow filter -->
        <filter id="tileShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="6" stdDeviation="4" flood-color="#000000" flood-opacity="0.45" />
        </filter>
        <filter id="mossBlur">
          <feGaussianBlur stdDeviation="1.5" />
        </filter>

        <!-- Clean Gradient -->
        <linearGradient id="terracottaGradClean" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#C24E18" />
          <stop offset="35%" stop-color="#E97230" />
          <stop offset="60%" stop-color="#F28B4E" />
          <stop offset="100%" stop-color="#A83E0F" />
        </linearGradient>

        <!-- Dirty/Mossy Gradient -->
        <linearGradient id="terracottaGradDirty" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#3D322A" />
          <stop offset="40%" stop-color="#5C4D40" />
          <stop offset="70%" stop-color="#4A3D33" />
          <stop offset="100%" stop-color="#2D241D" />
        </linearGradient>
      </defs>

      <!-- Background roof decking -->
      <rect width="${width}" height="${height}" fill="${isAfter ? '#782C08' : '#1F1A15'}" />

      <!-- Render tiles -->
      ${tiles}

      <!-- Clean sheen gradient on after -->
      ${isAfter ? `
        <rect width="${width}" height="${height}" fill="url(#cleanSheen)" opacity="0.25" pointer-events="none" />
        <linearGradient id="cleanSheen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.5" />
          <stop offset="50%" stop-color="#FFA875" stop-opacity="0.1" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0.2" />
        </linearGradient>
      ` : `
        <!-- Dark soot vignette on before -->
        <rect width="${width}" height="${height}" fill="#141810" opacity="0.2" pointer-events="none" />
      `}
    </svg>
  `;
}

fs.writeFileSync('public/images/after.svg', generateRoofSVG(true).trim());
fs.writeFileSync('public/images/before.svg', generateRoofSVG(false).trim());
console.log('Successfully generated authentic terracotta roof SVGs!');
