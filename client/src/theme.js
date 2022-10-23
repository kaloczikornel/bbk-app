import { createTheme } from '@mui/material/styles';
import { huHU } from '@mui/material/locale';

export default function constructTheme() {
    const MAIN_FONT =
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif';
    const LIGHT_GRAY = 'rgb(237, 234, 233)';
    const LIGHT_BORDER = 'rgb(207, 203, 203)';
    const HOVER_COLOR = 'rgb(249, 248, 248)';
    const TEXT_COLOR_LIGHT = HOVER_COLOR;
    const TEXT_COLOR = 'rgb(30, 31, 33)';
    const TEXT_COLOR_GRAY = 'rgb(109, 110, 111)';

    const colors = createTheme({
        palette: {
            primary: {
                main: '#cc0022',
            },
            secondary: {
                main: '#8f3e00',
            },
            info: {
                main: TEXT_COLOR,
            },
        },
    });

    return createTheme({
        palette: {
            action: {
                hoverOpacity: 0.2,
            },
            primary: {
                main: '#cc0022',
            },
            secondary: {
                main: '#8f3e00',
            },
            info: {
                main: '#F8F8FF',
            },
            text: {
                primary: '#1a1a1a',
            },
        },
        huHU,
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        flexGrow: 1,
                        backgroundColor: 'white',
                        color: colors.palette.secondary.main,
                        boxShadow: 'none',
                        borderBottom: `1px solid ${LIGHT_GRAY}`,
                    },
                },
            },
            MuiButton: {
                defaultProps: {
                    variant: 'contained',
                },
                styleOverrides: {
                    text: {
                        borderRadius: 6,
                        border: 0,
                        color: TEXT_COLOR,
                    },
                    root: {
                        color: TEXT_COLOR_LIGHT,
                        border: `1px solid ${LIGHT_BORDER}`,
                        textTransform: 'none',
                        fontWeight: 'bold',
                        '&.active': {
                            borderColor: colors.palette.primary.main,
                            backgroundColor: colors.palette.primary.main,
                            color: 'white',
                        },
                    },
                    outlinedPrimary: {
                        color: TEXT_COLOR,
                    },
                    contained: {
                        boxShadow: 'none',
                        '&:hover, &:focus': {
                            boxShadow: 'none',
                        },
                    },
                },
            },
            MuiButtonBase: {
                disableRipple: true,
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        '&.profileHeader': {
                            height: '100%',
                        },
                    },
                },
            },
            MuiCardHeader: {
                styleOverrides: {
                    root: {
                        '& .MuiTypography-root': {
                            marginBottom: 0,
                        },
                    },
                },
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: {
                        '&.MuiInputLabel-root.Mui-focused': {
                            color: colors.palette.primary.main,
                        },
                    },
                },
            },
            MuiGrid: {
                spacing: 2,
                styleOverrides: {
                    container: {},
                    item: {},
                },
            },
            MuiTextField: {
                defaultProps: {
                    variant: 'outlined',
                },
            },
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        '&.MuiInput-root:after': {
                            borderBottom: `2px solid ${colors.palette.primary.main}`,
                        },
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        flexGrow: 1,
                        boxShadow:
                            'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
                    },
                    rounded: {
                        borderRadius: 0,
                    },
                },
            },
            MuiTable: {
                flexGrow: 1,
                tableLayout: 'auto',
                borderCollapse: 'collapse',
            },
            MuiTableContainer: {
                styleOverrides: {
                    root: {
                        fontSize: '1.4rem',
                    },
                },
            },
            MuiBox: {
                styleOverrides: {
                    root: {},
                },
            },
            MuiTableCell: {
                styleOverrides: {
                    head: {
                        color: TEXT_COLOR_GRAY,
                        fontSize: '12px',
                    },
                    root: {
                        fontSize: '14px',
                        lineHeight: '20px',
                        padding: '2px 4px',
                        textRendering: 'optimizeSpeed',
                    },
                },
            },
            MuiTableRow: {
                styleOverrides: {
                    head: {
                        '&:hover': {
                            backgroundColor: 'inherit',
                        },
                    },
                    root: {
                        '&:hover': {
                            backgroundColor: HOVER_COLOR,
                        },
                    },
                },
            },
            MuiTableFooter: {
                styleOverrides: {
                    root: {
                        fontWeight: 'bold',
                        border: 'none',
                        color: colors.palette.secondary.main,
                        '& .MuiTableCell-root': {
                            fontSize: '1.4rem',
                        },
                        '& .sum-row': {
                            backgroundColor: colors.palette.primary.light,
                        },
                    },
                },
            },
            MuiTableHead: {
                styleOverrides: {
                    root: {
                        fontWeight: 'bold',
                    },
                },
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        textTransform: 'none',
                        '& .MuiButtonBase-root.MuiTab-root': {
                            flexGrow: 1,
                            '&.Mui-selected': {
                                backgroundColor: 'primary.light',
                            },
                        },
                    },
                    scrollButtons: {
                        '&.Mui-selected': {
                            backgroundColor: 'primary.light',
                        },
                    },
                },
            },
            MuiToolbar: {
                styleOverrides: {
                    root: {
                        '&.tab-grid': {
                            paddingLeft: 0,
                            paddingRight: 0,
                        },
                    },
                },
            },
            MuiTypography: {
                styleOverrides: {
                    root: {
                        '&.menuTitle': {
                            flexGrow: 1,
                            marginBottom: 0,
                        },
                    },
                },
            },
        },
        typography: {
            fontFamily: MAIN_FONT,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            htmlFontSize: 10,
            fontSize: 12,
            body1: {
                fontSize: '1.3rem',
                fontFamily: MAIN_FONT,
                fontWeight: 400,
                lineHeight: 1.5,
            },
            body2: {
                fontSize: '1.3rem',
                fontFamily: MAIN_FONT,
                fontWeight: 400,
                lineHeight: 1.43,
            },
            fontWeightBold: 700,
            h1: {
                fontFamily: MAIN_FONT,
                fontWeight: 300,
                fontSize: '8.914285714285715rem',
                lineHeight: 1.167,
                marginBottom: 16,
            },
            h2: {
                fontFamily: MAIN_FONT,
                fontWeight: 300,
                fontSize: '5.571428571428571rem',
                lineHeight: 1.2,
                marginBottom: 16,
            },
            h3: {
                fontFamily: MAIN_FONT,
                fontWeight: 400,
                fontSize: '4.457142857142857rem',
                lineHeight: 1.167,
                marginBottom: 16,
            },
            h4: {
                fontFamily: MAIN_FONT,
                fontWeight: 400,
                fontSize: '3.157142857142857rem',
                lineHeight: 1.235,
                marginBottom: 16,
            },
            h5: {
                fontFamily: MAIN_FONT,
                fontWeight: 400,
                fontSize: '2.2285714285714286rem',
                lineHeight: 1.334,
                marginBottom: 16,
            },
            h6: {
                fontFamily: MAIN_FONT,
                fontWeight: 500,
                fontSize: '1.8571428571428572rem',
                lineHeight: 1.6,
                marginBottom: 16,
            },
            subtitle1: {
                fontFamily: MAIN_FONT,
                fontWeight: 400,
                fontSize: '1.4857142857142858rem',
                lineHeight: 1.75,
            },
            subtitle2: {
                fontFamily: MAIN_FONT,
                fontWeight: 500,
                fontSize: '1.3rem',
                lineHeight: 1.57,
            },
            button: {
                fontFamily: MAIN_FONT,
                fontWeight: 500,
                fontSize: '1.3rem',
                lineHeight: 1.75,
                textTransform: 'uppercase',
            },
            caption: {
                fontFamily: MAIN_FONT,
                fontWeight: 400,
                fontSize: '1.1142857142857143rem',
                lineHeight: 1.66,
            },
            overline: {
                fontFamily: MAIN_FONT,
                fontWeight: 400,
                fontSize: '1.1142857142857143rem',
                lineHeight: 2.66,
                textTransform: 'uppercase',
            },
        },
    });
}
