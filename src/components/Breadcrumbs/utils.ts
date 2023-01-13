export const getLinksObject = (arrKeys: string[], arrHeaders: string[]) => {
    let tempLink = '';

    const obj = arrKeys.map((item: any, index: number) => {
        return {
            key: item,
            title: item === 'index'? 'Каталог продукции' : arrHeaders[index],
            _link: tempLink += '/' + item
        }
    })
    return obj
}