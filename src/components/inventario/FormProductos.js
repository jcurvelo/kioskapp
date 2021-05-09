import CustomInput from '../assets/CustomInput';
const electron = window.require('electron');
export default function FormProductos(){
    function saveData(){
        electron.ipcRenderer.send('addProducto',{producto:'Harina'});

    }
    return(
        <div className="formProductos p-3">
            <h3>Agregar Nuevo Producto</h3>
            <hr />
            <form action="">
                <CustomInput name="nombreProducto" texto="Nombre del Producto" place="E.J: Harina, Azúcar" type="text" />
                <CustomInput name="cantidad" texto="Cantidad en existencia" place="#" min="0" max="999" type="number" />
                <CustomInput name="precio" texto="Precio por Unidad" place="$" min="0" step=".01" max="99999" type="number" />
                <button className="btn btn-success btn-lg mt-2" onClick={saveData}>Aceptar</button>
            </form>
        </div>
    );
}