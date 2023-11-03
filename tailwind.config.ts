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
        primary: '#CB5A6F',
        primaryHover: '#C75167',
        primaryDisabled: '#F4AAB7',
        primaryBgColor: '#EBEBEB',
        secondaryBgColor: '#FFFFFF',
        sectionBgColor: '#F5F5F5',
        primaryButtonTextColor: '#F9F9F9',
        navItemTextColor: '#020202',
        bannerTextColor: '#5A5A5A',
        footerDescColor: '#8D8D8D',
        dashboardBgColor: '#F2F1F1',
        dashboardDecColor: '#D2D2D2',
        textdarkColor: '#282828',
        distlineColor: '#828282',
        forgotColor: '#4285F4',
        loginBtnColor: '#F7F7F7',
        signinTextColor: '#121212',
        borderGreyColor: '#c4c4c4',
        borderSelectColor: '#DA123B',
        passwordMediumColor: '#FFDB72',
        passwordStrongColor: '#2BFA62'

      },
      fontSize: {
        bigPrimaryButtonTextSize: '30px',
        smallPrimaryButtonTextSize: '20px',
        bannerTextSize: '60px',
        footerTextSize: '17px',
        footerDescSize: '16px',
        adTitleBigSize: '45px',
        adTitleSmallSize: '25px',
        adDescBigSize: '30px',
        adDescSmallSize: '20px',
        loginBtnTextSize: '16px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
