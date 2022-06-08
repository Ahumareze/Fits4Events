const currencyConverter = (value:number) => {
    if(typeof window !== 'undefined'){
        const data = JSON.parse(localStorage.getItem('@localCurrency'));
        if(data){
            if(data.code === 'NGN') return (`₦${(data.value * value).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
            if(data.code === 'EUR') return (`€${(data.value * value).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
            if(data.code === 'GBP') return (`£${(data.value * value).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
            if(data.code === 'JPY') return (`¥${(data.value * value).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
            if(data.code === 'CAD') return (`CAD${(data.value * value).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`);
        }
        return (`$ ${value}`)
    }
    
};

export default currencyConverter;