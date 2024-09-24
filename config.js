function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function setColorScheme(scheme) {
  if (scheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    setCookie('theme', 'dark', 7); // Lưu cookie trong 7 ngày
  } else {
    document.documentElement.classList.remove('dark-mode');
    setCookie('theme', 'light', 7);
  }
}

function getPreferredColorScheme() {
  const savedScheme = getCookie('theme');
  if (savedScheme) {
    return savedScheme;
  }
  
  // Nếu không có lựa chọn từ cookie, kiểm tra hệ thống
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
}

function updateColorScheme() {
  const scheme = getPreferredColorScheme();
  setColorScheme(scheme);
}

// Áp dụng chế độ màu khi tải trang
updateColorScheme();

// Lắng nghe sự thay đổi của chế độ màu hệ thống
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateColorScheme);
}


//TODO: Add toggle button
function toggleDarkMode() {
      const myDiv = document.querySelector('body > div');
      myDiv.classList.toggle('dark-mode');
    }







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
                    100: '#FFE0B7',
                    200: '#FFD361',
                    300: '#FFA800',
                    400: '#FF862E',
                },
                //primary night
                purple: {
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
                //success
                green: {
                    50: '#EBFFD4',
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
                border: {
                    DEFAULT: '#232323',
                },
            },
            borderRadius: {
                standard: '15px',
            },
            boxShadow: {
                'br-black-sm': ['inset -2px -2px 0 0 black'],
                'br-black-md': ['inset -4px -4px 0 0 black'],
                'br-black-lg': ['inset -8px -8px 0 0 black'],
            }
        }
    }
}