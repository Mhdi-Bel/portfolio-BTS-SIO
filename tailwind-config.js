tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#6366f1', // Indigo
                secondary: '#06b6d4', // Cyan
                dark: '#0f172a', // Slate 900
                darker: '#020617', // Slate 950
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'shimmer': 'shimmer 2s linear infinite',
                'blob': 'blob 7s infinite',
                'scan': 'scan 3s linear infinite',
                'gojo-red': 'gojo-red 6s infinite cubic-bezier(0.4, 0, 0.2, 1)',
                'gojo-blue': 'gojo-blue 6s infinite cubic-bezier(0.4, 0, 0.2, 1)',
                'gojo-purple': 'gojo-purple 6s infinite cubic-bezier(0, 0, 0.2, 1)',
                'gojo-shake': 'gojo-shake 6s infinite',
                'text-glitch': 'text-glitch 6s infinite',
                'charge': 'charge 6s infinite',
            },
            keyframes: {
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },
                'gojo-red': {
                    '0%, 35%': { transform: 'translateX(0) scale(1)', opacity: 1, filter: 'blur(0px)' },
                    '45%': { transform: 'translateX(8px) scale(1.2)', opacity: 1, filter: 'blur(1px)' },
                    '50%': { transform: 'translateX(14px) scale(0)', opacity: 0 },
                    '100%': { transform: 'translateX(0) scale(1)', opacity: 0 }
                },
                'gojo-blue': {
                    '0%, 35%': { transform: 'translateX(0) scale(1)', opacity: 1, filter: 'blur(0px)' },
                    '45%': { transform: 'translateX(-8px) scale(1.2)', opacity: 1, filter: 'blur(1px)' },
                    '50%': { transform: 'translateX(-14px) scale(0)', opacity: 0 },
                    '100%': { transform: 'translateX(0) scale(1)', opacity: 0 }
                },
                'gojo-purple': {
                    '0%, 49%': { transform: 'scale(0)', opacity: 0 },
                    '50%': { transform: 'scale(0.1)', opacity: 1, filter: 'brightness(2) contrast(2)' },
                    '52%': { transform: 'scale(1.5)', opacity: 1 },
                    '70%, 100%': { transform: 'scale(4)', opacity: 0 }
                },
                'gojo-shake': {
                    '0%, 49%': { transform: 'translate(0, 0)' },
                    '50%, 52%': { transform: 'translate(1px, -1px)' },
                    '53%, 100%': { transform: 'translate(0, 0)' }
                },
                'text-glitch': {
                    '0%, 49%': { color: 'white', textShadow: 'none' },
                    '50%, 55%': { color: '#a78bfa', textShadow: '2px 0 #ef4444, -2px 0 #3b82f6' },
                    '56%, 100%': { color: 'white', textShadow: 'none' }
                },
                charge: {
                    '0%': { width: '0%', opacity: 0.5 },
                    '48%': { width: '100%', opacity: 1 },
                    '50%, 100%': { width: '0%', opacity: 0 }
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' }
                }
            }
        }
    }
}