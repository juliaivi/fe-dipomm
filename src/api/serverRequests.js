// поиск города

export function getCities(item) {
    return fetch(`https://students.netoservices.ru/fe-diplom/routes/cities?name=${item}`)
    .then(response => response.json())
    .then(function(data){
        return data
    })
}

//Последние направления

// fetch( 'https://students.netoservices.ru/fe-diplom/routes/last' )
//     .then( response => response.json())
//     .then( data => {
//         data.forEach( el => {
//             console.log('el', el)
//         })
//     });
export function getLast () {
    return fetch( 'https://students.netoservices.ru/fe-diplom/routes/last' )
     .then( response => response.json()) 
     .then( data => {return data})
}

//Заказ билетов

// Информация о посадочных местах определённого направления. Параметры поиска позволят отфильтровать только нужные вагоны в составе
export function sendOrder (order) {
    return fetch( 'https://students.netoservices.ru/fe-diplom/order', {
        method: 'POST',
        body: order
      })
        .then( response => response.json())
        .then( data => { return data} );
}

//Поиск направлений


// fetch( 'https://students.netoservices.ru/fe-diplom/routes?from_city_id=5b9a2fa7f83e028786ea5672&to_city_id=5b9a2fa8f83e028786ea567b' )
//     .then( response => response.json()
//         .then( data => { console.log( 'routes',  data ) })
//     );

export function getRoutes (url) {
    return  fetch( `https://students.netoservices.ru/fe-diplom/routes?${url}` )
        .then( response => response.json()
            .then( data => { return  data })
        );
}

//Посадочные места
// fetch( 'https://students.netoservices.ru/fe-diplom/routes/5b9a35bcf83e028786ea74ef/seats?have_wifi=false' )
//     .then( response => response.json())
//     .then( data => console.log( data ));

export function getSeats (id) {
    // return fetch( `https://students.netoservices.ru/fe-diplom/routes/${id}/seats?${url}` )
    return fetch( `https://students.netoservices.ru/fe-diplom/routes/${id}/seats` )
    .then( response => response.json())
    .then( data => {return data});
}

//Подписка
// fetch( 'https://students.netoservices.ru/fe-diplom/subscribe?email=hello@kitty.com' )
//     .then( response => response.json())
//     .then( data => console.log( data ));

export function getSubcribe (email) {
    return fetch( `https://students.netoservices.ru/fe-diplom/subscribe?email=${email}`, {
        method: 'POST',
        body: ''
    } )
    .then( response => response.json())
    .then( data => { return data });
}
