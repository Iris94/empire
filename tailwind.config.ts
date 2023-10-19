import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
			colors: {
				'main-shade' : '#011C26',
				'light-shade' : '#F2AA6B',
				'medium-shade' : '#D97941',
				'dark-shade' : '#592A19',
			  },
    },
  },
  plugins: [],
}
export default config
