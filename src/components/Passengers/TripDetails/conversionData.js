export const conversionData = (data) => {
    const newData = new Date(data);
    const date=newData.getDate() < 10 ? '0' + newData.getDate() : newData.getDate();
    const month = newData.getMonth() < 10 ? '0' + newData.getMonth() : newData.getMonth();
    return (date+'.'+month+'.'+newData.getFullYear());
}
