import ThemeName from '@/theme/themeName'

const marks = [
    {
        value: 0,
        label: '江戸',
        key: ThemeName.Edo
    },
    {
        value: 20,
        label: '明治',
        key: ThemeName.Meiji
    },
    {
        value: 40,
        label: '大正',
        key: ThemeName.Taisho
    },
    {
        value: 60,
        label: '昭和',
        key: ThemeName.Showa
    },
    {
        value: 80,
        label: '平成',
        key: ThemeName.Heisei
    },
    {
        value: 100,
        label: '令和',
        key: ThemeName.Reiwa
    }
]

function getKey(value: number) {
    const index = value / 20
    return marks[index]?.key || ThemeName.Edo
}

export { marks, getKey }
