class PostgresUtility {
    constructor(obj){
        this.body = obj;
    }

    get_column(){
        if(this.body){
            
            return Object.keys(this.body);
        }
        else{
            //console.log("empty colurm",this.body);
            return {"Error":"Empty Table colums,"}
        }
        
    }


    get_value(){
        if(this.body){
            
            return Object.values(this.body);
        }
        else{
            //console.log("empty valur ",this.body);
            return {"Error":"Empty Table Values"}
        }
        
    }


    is_defination(){
       
    }

}

module.exports = PostgresUtility ;
