

function findSum( array, target ){

    let pairs =  [ ];
    console.log("Searching...");

        for( let i=0; i<array.length  ; i++ ){
    
                for( let j=0; j < array.length ; j++ ){
                    let sum = array[i]+array[j];
                    if( sum ==target ){
                        console.log("Found", "i:" , array[i] , "j : ", array[j] );
                        
                        //  check if entry is already has been added 
                        // 4+3 == 3+4

                        let alreadyAdded = pairs.find( pair=>{

                             
                            if( pair.a == array [j] && pair.b == array[ i]  ){
                                // console.log("Duplicate found " , pair , "x:", array[i] , "j:" ,array[j]);
                                return true;
                            } 

                        } );

                        if( !alreadyAdded ){
                            pairs.push( { "a": array[i] , "b":array[j] } );
                        }


          

                    }
                }  
        

        }

       


    return pairs.length == 0 ? false : pairs; 

}