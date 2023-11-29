import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());



const connectDB = async () => {
const conn = await mongoose.connect(process.env.MONGODB_URI);
if(conn){
    console.log('MongoDB is Connected..😍')
}
};
connectDB();

app.get('/health',(req, res)=>{
res.json({
    success:true,
    message:"health api is working"
});
});

app.get('/api/v1/buses', (req, res)=>{
res.json({
    success:true,
    data:[
        {
            id:1,
            name:"Bus 1",
            seats:20,
        },
        {
            id:2,
            name:"Bus 2",
            seats:20,
        },
        {
            id:3,
            name:"Bus 3",
            seats:20,
        }
    ],
    message:"Buses fetched"
})

});

app.get('/api/v2/buses', (req, res)=>{
    res.json({
        success:true,
        data:[
            {
                id:1,
                name:"Bus 1",
                totalSeats:20,
            },
            {
                id:2,
                name:"Bus 2",
                totalSeats:20,
            },
            {
                id:3,
                name:"Bus 3",
                totalSeats:20,
            }
        ],
        message:"Buses fetched"
    })
    
    });

app.post("/api/bookings", async (req, res)=>{
// const {} = req.body;
// create Booking

res.status(201).json({
   success:true,
   data:{},
   message:'Booking created' 
})
});

app.get('/api/bookings', (req, res)=>{
// get all bookings
res.json({
   success:true,
   data:[],
   message:'Booking fetched' 
})
})

app.get('/api/bookings/:id',(req, res)=>{
// get single bookings

const {id} = req.params;

if(id==20){
    return res.status(404).json({
        success:false,
        data:{},
        message:"Booking not found"
    })
}

res.json({
    success:true,
    data: {
        // id:req.params.id
        id:id
    },
    message:'Booking fetched' 
 })
})

app.put('/api/bookings/:id',(req, res)=>{
    // update booking
const {id} = req.params;

res.json({
    success:true,
    data:{
        id:id
    },
    message:"Booking Updated"
})
})


app.patch('/api/bookings/:id',(req, res)=>{
    // update booking
const {id} = req.params;
// update booking logic

res.json({
    success:true,
    data:{
        id:id
    },
    message:"Booking Updated"
})
})

app.delete('/api/bookings/:id', async (req, res)=>{
// delete booking

const {id} = req.params;

res.json({
    success:true,
    data:{
        id:id
    },
    message:"Booking Deleted"
})
})


const PORT = process.env.PORT || 5000;

app.listen( PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})