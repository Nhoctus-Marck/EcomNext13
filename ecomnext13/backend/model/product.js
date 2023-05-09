import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, ' Please enter product name']
    },
    description:{
        type: String,
        required:[true, ' Please enter product description']
    },
    price:{
        type: Number,
        required:[true, ' Please enter product price']
    },
    images:[
        {
            public_id:{
                type:String,
            },
            url:{
                type:String,
            }
        }
    ],
    category:{
        type: String,
        required:[true,'Please enter product category'],
        enum:{
            values:[
                "Electronict",
                "Cameras",
                "Laptosps",
                "Accesories",
                "headphones",
                "Sports",
                "ClotheS",
            ],
            message:"Please select correct category"
        }
    },
    subCategory:{
        type: String,
        required:[true,'Please enter product SubCategory'],
        enum:{
            values:[
                "VideoGames",
                "MotherBoard",
                "VideoGamesCard",
                "KeyBoard",
                "Mause",
                "Ram",
                "Screens",
                "Cameras",
                "Laptosps",
                "Accesories",
                "headphones",
                "Sports",
                "Male coats",
                "Female coats",
                "Gloves",
                "Male T-shirts",
                "Female T-shirts",
                "Male Footwear",
                "Female Footwear",
                "Male Pants",
                "Female Pants",
                "Male Underwear",
                "Female Underwear"

            ],
            message:"Please select correct Subcategory"
        }
    },
    seller:{
        type:String,
        required:[true,"Please enter product seller"],
    },
    stock:{
        type: Number,
        required:[true,"Please enter product stock"]
    },
    ratings:{
        type: Number,
        default: 0
    },
    reviews:[
        {
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            },
            createAt:{
                type:Date,
                default:Date.now,
            },
        }
    ],
    createAt:{
        type:Date,
        default:Date.now,
    },
        
    
})
export default mongoose.models.Product || mongoose.model('Product', productSchema)