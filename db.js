const { app, ipcMain } = require("electron");
const Datastore = require("nedb-promises");

const dbFactory = (fileName) => Datastore.create({
  filename: fileName, 
  timestampData: true,
  autoload: true
});

const db = {
    productos: dbFactory('productos.db'),
}

ipcMain.on('addProducto',(evt,arg)=>{
    console.log(arg);
    db.productos.insert(arg,function(err,doc){
        if(err){
            console.error(err);
        }
        console.log(doc);
    });

})
