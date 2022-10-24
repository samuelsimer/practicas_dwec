function sortDates( arr ){
    let fechasOrdenadas = arr.sort((a,b) => {
        a = a.split( '-' );
        b = b.split( '-' );
        if(parseInt(a[2]) == parseInt(b[2])){//año
            if(parseInt(a[1]) == parseInt(b[1])){//mes
                if(parseInt(a[0]) == parseInt(b[0])){//dia
                    return 0;
                }else if(parseInt(a[0]) < parseInt(b[0])){
                    return -1;
                }else{
                    return 1;
                }
            }else if(parseInt(a[1]) < parseInt(b[1])){
                return -1;
            }else{
                return 1;
            }    
        }else if(parseInt(a[2]) < parseInt(b[2])){
            return -1;
        }else{
            return 1;
        }
    });
    return fechasOrdenadas;
}

fechas = ["15-3-1999", "15-6-2010", "10-12-1999", "5-2-2005"];
console.log(sortDates(fechas));

