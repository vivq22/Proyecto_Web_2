const commonData ={
    navigation: [
        {url: '/index.html', label:'Inicio'},
        {url: '/aboutus.html', label:'Nosotros'},
        {url: '/contactus.html', label:'Contacto'}
    ]
}

export const getPageContext =(pagePath)=>{
    switch(pagePath){
        case '/index.html':
        break;
        case '/contactus.html':
        break;
        default:
        break;
    }

    return{
        ...commonData,
        ...pageData
    }
}