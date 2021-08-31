import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
    interface PaletteOptions {
        topbarbg: PaletteOptions['primary'];
        topbaricon: PaletteOptions['primary'];
        topbarname: PaletteOptions['primary'];
        topbarsearch: PaletteOptions['primary'];
        sidebartext: PaletteOptions['primary'];
        themeswitch: PaletteOptions['primary'];
        buttonbg: PaletteOptions['primary'];
        landcardbg: PaletteOptions['primary'];
        landcardtxt: PaletteOptions['primary'];
        landfilthelp: PaletteOptions['primary'];
        cardbg: PaletteOptions['primary'];
        cardstate: PaletteOptions['primary'];
        cardtxt: PaletteOptions['primary'];
        cardprocess: PaletteOptions['primary'];
        dropdownbg: PaletteOptions['primary'];
        inputgroup: PaletteOptions['primary'];
        dateindicator: PaletteOptions['primary'];
        fileinput: PaletteOptions['primary'];
        switchOff: PaletteOptions['primary'];
        switchOn: PaletteOptions['primary'];
        tabitem: PaletteOptions['primary'];
        tablebody: PaletteOptions['primary'];
    }
}

export const themeLight = createTheme({
    palette: {
        topbarbg: { main: '#ffffff' },
        topbaricon: { main: '#FF9900' },
        topbarname: { main: '#244B57' },
        topbarsearch: { main: '#CFD0E3', light: '#A4A5C2', dark: '#8E8FAE' },

        sidebartext: { main: '#9494AC' },
        themeswitch: { main: '#E4EEF1' },
        buttonbg: { main: '#FFB800', contrastText: '#464771', dark: '#8889A5' },
        landcardbg: { main: '#FFFBE4', contrastText: '#FFFFFF' },
        landcardtxt: { main: '#969696', contrastText: '#244B57' },
        landfilthelp: { main: '#92939A', contrastText: '#F6F6F6', dark: '#0F1030', light: '#9494AC' },

        dropdownbg: { main: '#F6F6F6' },

        cardbg: { main: '#FFFFFF', contrastText: 'grey' },
        cardstate: { main: '#FFFFFF', contrastText: '#0BB63B' },
        cardtxt: { main: '#FF9900', contrastText: '#244B57', dark: '#9494AC' },
        cardprocess: { main: '#ECECEC' },

        inputgroup: { main: '#F4F5F8', contrastText: '#6E6F9C' },
        dateindicator: { main: 'invert(0)' },
        fileinput: { main: '#BEC2CD', contrastText: '#979DAF', dark: 'transparent' },
        switchOff: { main: '#FFFFFF', contrastText: '#DDDDDD' },
        switchOn: { main: '#FFFFFF', contrastText: '#FFBB0B' },
        //unsetted
        tabitem: { main: '#969696' },
        tablebody: { main: 'rgb(245,245,245)'},
    }
});

export const themeDark = createTheme({
    palette: {
        topbarbg: { main: '#0F1030' },
        topbaricon: { main: '#FFDB20' },
        topbarname: { main: '#FCFCFC' },
        topbarsearch: { main: 'rgba(46, 47, 100, .8)', light: '#4A4C84', dark: '#6E6F9C' },

        sidebartext: { main: '#92939A' },
        themeswitch: { main: '#333333' },
        buttonbg: { main: 'rgba(255, 255, 255, 0.14)', contrastText: '#464771', dark: '#8889A5' },
        landcardbg: { main: '#141652', contrastText: 'rgba(20, 22, 82, 0)' },
        landcardtxt: { main: '#9494AC', contrastText: '#FFFFFF' },
        landfilthelp: { main: 'rgba(255, 255, 255, 0.14)', contrastText: 'rgba(50, 52, 92, .5)', dark: '#FFFFFF', light: '#FFFFFF' },

        dropdownbg: { main: 'rgb(50, 52, 92)' },

        cardbg: { main: '#14163C', contrastText: 'none' },
        cardstate: { main: '#232559', contrastText: '#82FFA5' },
        cardtxt: { main: '#FFBB0B', contrastText: '#FFFFFF', dark: '#9697A9' },
        cardprocess: { main: '#3A3B63' },

        inputgroup: { main: '#06071B', contrastText: '#6E6F9C' },
        dateindicator: { main: 'invert(1)' },
        fileinput: { main: '#FFFFFF', contrastText: '#FFFFFF', dark: '#969696' },

        switchOff: { main: 'rgba(255, 187, 11,.87)', contrastText: '#02031C' },
        switchOn: { main: '#0F1030', contrastText: '#FFBB0B' },
        //unsetted
        tabitem: { main: 'rgba(255,255,255, 0.7)' },
        tablebody: { main: '#14163B'},
    }
});