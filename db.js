const { app, ipcMain } = require("electron");
const Datastore = require("nedb-promises");

const dbFactory = (fileName) =>
  Datastore.create({
    filename: fileName,
    timestampData: true,
    autoload: true,
  });

const db = {
  productos: dbFactory("productos.db"),
  ventas: dbFactory('ventas.db')
};

module.exports = () => {
    // PRODUCTOS
  ipcMain.handle("addProducto", (evt, arg) => {
    db.productos.insert(arg, function (err, doc) {
      if (err) {
        console.error(err);
      }
      console.log(doc);
    });
  });

  ipcMain.handle("editProducto", async (evt, arg) => {
    await db.productos
      .update(
        { _id: arg._id },
        {
          nombreProducto: arg.nombreProducto,
          cantidadProducto: arg.cantidadProducto,
          precioProducto: arg.precioProducto,
        }
      )
      .catch((err) => console.error(err));
  });
  ipcMain.handle('delProductos', async (evt,arg)=>{
    await db.productos.remove({_id:arg},{}).catch(err=>console.error(err));
    return arg;
  })
  ipcMain.handle("buscarDatosProductos", async (evt, arg) => {
    let listado = await db.productos
      .find({})
      .catch((err) => console.error(err));
    return listado;
  });

  ipcMain.handle("buscarProductoUnico", async (evt, arg) => {
    let res = await db.productos
      .find({ _id: arg })
      .catch((err) => console.error(err));
    evt.reply("productoEncontrado", res);
  });

  // VENTAS
  ipcMain.handle('ventas',async (evt,arg)=>{
    let res = await db.ventas.find({}).catch(err=>console.error(err));
    return res;
  });
  
  ipcMain.handle('crearVentas',async (evt,arg)=>{
    let res = await db.ventas.insert(arg).catch(err=>console.error(err));
  });

};
