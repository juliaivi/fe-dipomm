import _ from 'lodash';

//для пагинации
// общая страница, страница, лимит, братья и сестра
export const returnPaginationRange = (totalPage, page, limit, siblings) => {
    // общий номер страницы в массиве
            let totalPageNoInArray = 7 + siblings;
            // если общее количество страниц в массиве  больше или равно общему количеству страниц ... мы ведем диапозон без точек
            if (totalPageNoInArray >=totalPage) {
                // чтоб получить диапозон мы импортируем 
                return _.range(1, totalPage + 1);
            }
    
            let leftSiblingsIndex = Math.max(page - siblings, 1); // расчитавание максимальное количество братьев и сестер, можно быть увереным что число не отрицательно и больше или равно 1
              let rightSiblingsIndex = Math.min(page + siblings, totalPage); // значение будет равно общему значени странице либо меньше
            
            //когда нужно отобразить точки слева/ если индекс больше 2 то стр. больше  3 тогда напечатаем точку слева
            let showLeftDots = leftSiblingsIndex > 2;
        
            let showRigthDots = rightSiblingsIndex < totalPage - 2;
    
            // условие для показывание точек слева или право siblings = 1 ... сначало показвается 5 страниц, а птом точки, если siblings=2 то сначало 7 страниц, а потом точки
            if (!showLeftDots && showRigthDots) {
                let leftItemsCount = 3+2 * siblings;
                let leftRange = _.range(1, leftItemsCount+1)
                return [...leftRange, "...", totalPage];
            } else if (showLeftDots && !showRigthDots) {
                let rigthItemsCount = 3+2 * siblings;
                let rigthRange = _.range(totalPage - rigthItemsCount + 1, totalPage + 1);
                return [1, "...", ...rigthRange];
            } else {
                let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex+1);
                return [1, "...", ...middleRange, "...", totalPage]; // если хотим отображать слева и справа точки
            }
        
        }
    