import Projects from "../../models/Projects";
import connectDb from "../../middleware/mongoose";

const handler = async (req,res) =>{

    if(req.method == 'POST'){
        // //console.log(req.body);
        //   let temp = new Projects({
        //     id: 'abc2',
        //     title: 'Product 1',
        //     price: 12,
        //     description: 'Product one description',
        //     category: 'product category',
        //     image: 'abc'
        //   }) 
          
        //   const response = await temp.save();
        //   res.status(200).json(response);


        console.log(req.body);
        try{
            let temp = new Projects({
                id: req.body.id,
                title: req.body.title,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category,
                image: req.body.image
            })
    
            const response = await temp.save();
            //const response = await sql.query('INSERT INTO table..');

            res.status(201).json(response);
        }
        catch(err){
            res.status(400).json({message: err.message})
        }       
    }
    else
    {
        res.status(400).json({message:'Method not allowed'})
    }
}
export default connectDb(handler);
