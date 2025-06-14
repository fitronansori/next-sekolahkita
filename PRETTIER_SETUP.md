# Prettier Setup untuk Next.js dengan Tailwind CSS

## Fitur yang Terpasang

✅ **Prettier** - Code formatter otomatis  
✅ **Sort Imports** - Mengurutkan import berdasarkan kategori  
✅ **Tailwind CSS Class Sorting** - Mengurutkan class Tailwind secara otomatis  
✅ **VS Code Integration** - Format on save diaktifkan

## Cara Penggunaan

### Melalui NPM Scripts

```bash
# Format semua file
npm run format

# Cek file yang perlu diformat (tanpa mengubah)
npm run format:check

# Format dan fix ESLint issues
npm run format:fix
```

### Melalui VS Code

- **Format on Save**: File akan diformat otomatis saat disimpan
- **Manual Format**: `Ctrl+Shift+P` → "Format Document" atau `Shift+Alt+F`

## Konfigurasi Import Sorting

Import akan diurutkan dalam kategori berikut:

1. **React & Next.js** - `import React from 'react'`
2. **Lib utilities** - `import { cn } from '@/lib/utils'`
3. **Components** - `import Button from '@/components/ui/button'`
4. **Internal modules** - `import { config } from '@/config'`
5. **Relative imports** - `import './styles.css'`

## Konfigurasi Tailwind Class Sorting

Classes akan diurutkan berdasarkan:

- Layout properties (display, position, etc.)
- Box model (margin, padding, border, etc.)
- Typography
- Visual effects
- Responsive modifiers

## Contoh Sebelum dan Sesudah

### Sebelum

```tsx
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import './button.css';

export function MyButton() {
  return (
    <button className="rounded-lg bg-blue-600 p-4 font-bold text-white hover:bg-blue-500">
      Click me
    </button>
  );
}
```

### Sesudah

```tsx
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

import './button.css';

export function MyButton() {
  return (
    <button className="rounded-lg bg-blue-600 p-4 font-bold text-white hover:bg-blue-500">
      Click me
    </button>
  );
}
```

## File Konfigurasi

- **`.prettierrc`** - Konfigurasi utama Prettier
- **`.prettierignore`** - File yang diabaikan dari formatting
- **`.vscode/settings.json`** - Pengaturan VS Code untuk auto-format
- **`tailwind.config.ts`** - Konfigurasi Tailwind untuk Prettier plugin

## Tips

1. **Gunakan extension Prettier** di VS Code untuk experience terbaik
2. **Install Tailwind CSS IntelliSense** extension untuk autocomplete
3. **Jalankan `npm run format`** setelah clone repository
4. **Commit hook** bisa ditambahkan untuk memastikan code selalu terformat

## Troubleshooting

Jika formatting tidak bekerja:

1. Pastikan Prettier extension terinstall di VS Code
2. Restart VS Code setelah install
3. Cek output panel VS Code untuk error messages
4. Pastikan file tidak ada di `.prettierignore`
