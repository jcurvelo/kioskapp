import { useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
const { ipcRenderer } = require("electron");

export default function FormProductos(props) {
  let history = useHistory();
  let location = useLocation();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if(location.state){
      ipcRenderer.invoke('editProducto',{...data,_id:location.state.id});
    }else{
      ipcRenderer.invoke('addProducto',data);
    }
    history.push('/inventario');
  }

  return (
    <div className="formProductos p-3">
      <h3>Agregar Nuevo Producto</h3>
      <hr />
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="nombreProducto">Nombre del Producto</label>
          <input
            type="text"
            name="nombreProducto"
            id="nombreProducto"
            className="form-control"
            {...register("nombreProducto", { required: true })}
            defaultValue={location.state ? location.state.nombreProducto : null }
          />
        </div>
        <div className="form-group">
          <label htmlFor="cantidadProducto">Cantidad</label>
          <input
            type="number"
            name="cantidadProducto"
            id="cantidadProducto"
            className="form-control"
            {...register("cantidadProducto", { required: true, min:0, max:9999 })}
            defaultValue={location.state ? location.state.cantidadProducto : null }

          />
        </div>
        <div className="form-group">
          <label htmlFor="costoTotal">Costo Total</label>
          <input
            type="number"
            step=".01"
            name="costoTotal"
            id="costoTotal"
            className="form-control"
            {...register("costoTotal", { required: true, min:0, max:9999 })}
            defaultValue={location.state ? location.state.costoTotal : null }

          />
        </div>
        <div className="form-group">
          <label htmlFor="precioProducto">Precio</label>
          <input
            type="number"
            step=".01"
            name="precioProducto"
            id="precioProducto"
            className="form-control"
            placeholder={()=>{}}
            {...register("precioProducto", { required: true, min:0, max:9999 })}
            defaultValue={location.state ? location.state.precioProducto : null }

          />
        </div>
        <button
          type="submit"
          className="btn btn-success btn-lg mt-2"
        >
          {location.state ? 'Aceptar Cambios' : 'Aceptar'}
        </button>
        <br />
        <button type="button" className="btn btn-primary mt-1" onClick={()=>{}}>Calcular precio minimo</button>
      </form>
    </div>
  );
}

