

const fs=require('fs');
const directory='fs_assingment';
const content='this a a sample content for file';


//creating a file using fs module and async await;

async function newfile(filename)
{

  


    const promise2=new Promise((resolve,reject)=>{

        if(fs.existsSync(directory))
        {


            if( !fs.existsSync(directory+'/'+filename))
            {
                
                fs.writeFileSync(directory+'/'+filename,content);
                const a=fs.readFileSync(directory+'/'+filename,'utf-8');
    
    
            
                resolve(`new file ${filename} has been created`);
    
                
                
            }
            else
            {
    
                reject('file already exists');
    
    
            }


        }

        else{



            fs.mkdirSync(directory);//new directory


            fs.writeFileSync(directory+'/'+filename,content);
                const a=fs.readFileSync(directory+'/'+filename,'utf-8');
    
    
            
             resolve(`new file ${filename} has been created`);

        }
    
       
        
        
    
    })
    

    
    
   const result=await promise2;

return result;


}




newfile('ind5.html').then(result=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
})







        
      








