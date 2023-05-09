class APIFilters{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    search(){
        const keyword = this.queryStr.keyword ? {
            name:{
                $regex:this.queryStr.keyword,
                $options: 'i'
            }
        }:{}
        console.log(keyword)

        this.query = this.query.find({...keyword})
        return this
    }
    filter(){
        const queryCopy = { ...this.queryStr }
        const removeFields = ['keyword','page']
        removeFields.forEach((el) => delete queryCopy[el])

        let output = {}
        let prop = ""

        for(let key in queryCopy){
            // console.log("key",key);
            if(!key.match(/\b(gt|gte|lt|lte)/)){
                output[key] = queryCopy[key]
                // console.log("output",output);
            }else{
                prop = key.split('[')[0]
                // console.log('prop',prop);

                let operator = key.match(/\[(.*)\]/)[1]
                // console.log('operator',operator);

                if(!output[prop]){
                    output[prop] = {}
                }
                output[prop][`$${operator}`] = queryCopy[key]
            }
        }

        this.query = this.query.find(queryCopy)
        return this
    }
    pagination(resPerPage){
        const currentPage = Number(this.queryStr.page) || 1
        const skip = resPerPage * (currentPage -1)

        this.query = this.query.limit(resPerPage).skip(skip)
        return this
    }
}
export default APIFilters