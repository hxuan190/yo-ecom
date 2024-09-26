tailwind.config = {
    theme: {
        container: {
            center: true,
            padding: '20px',
        },
        screens: {
            sm: '390px',
            md: '744px',
            lg: '1133px',
            xl: '1920px',
        },
        extend: {
            fontFamily: {
                comfortaa: 'Comfortaa, sans-serif',
                paytone: 'Paytone One, system-ui',
            },
            fontWeight: {
                thin: 100,
                extralight: 200,
                light: 300,
                normal: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
                extrabold: 800,
                black: 900,
            },
            colors: {
                // primary day
                orange: {
                    50: '#FFA800',
                    80: '#FF862E',
                    100: '#FFE0B7',
                    200: '#FFD361',
                    300: '#FFA800',
                    400: '#FF862E',
                },
                //primary night
                purple: {
                    20: '#EFDBFF',
                    30: '#DEC7FF',
                    50: '#D2B2FF',
                    100: '#EFDBFF',
                    200: '#DEC7FF',
                    300: '#A672CF',
                    400: '#631B8F',
                },
                // secondary
                yellow: {
                    100: '#FFF5C2',
                    200: '#FFEE9B',
                    300: '#FFE259',
                    400: '#FFDA28',
                },
                // neutral
                neutral: {
                    white: '#F5F5F5',
                    gray100: '#B0B0B0',
                    gray200: '#606060',
                    black: '#1E1E1E',
                },
                yellow: {
                    30: '#FFF5C2',
                    35 : '#FFD361',
                    50: '#ffda28',
                    100: '#FFEE9B',
                    200: '#FFE259',
                    300: '#FFDA28',
                },
                //success
                green: {
                    35: '#EBFFD4',
                    50: '#EBFFD4',
                    60: '#EBFFD4',
                    100: '#DFFCF0',
                    200: '#A0EACB',
                    300: '#4BCE97',
                    400: '#22A06B',
                    500: '#00583D',
                },
                //error
                red: {
                    100: '#FFEDEB',
                    200: '#FFB6AD',
                    300: '#F87462',
                    400: '#E34935',
                },
                //warning
                warning: {
                    100: '#FFF7D6',
                    200: '#FAEDB9',
                    300: '#F5CD47',
                    400: '#E2B203',
                },
            },
            borderRadius: {
                standard : '15px',
            },
            padding : {
                '8-custom' : '4px',
            }
        },

    }
}