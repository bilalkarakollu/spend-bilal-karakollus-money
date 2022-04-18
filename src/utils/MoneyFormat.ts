export const MoneyFormat = (number:number) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(number);
}