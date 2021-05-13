import CustomInput from "../assets/CustomInput";

export default function FormCompra() {
  return (
    <div className="formCompra">
      <form action="">
        <div className="form-row">
          <div className="col">
            <CustomInput
              name="findProduct"
              place="Nombre del producto"
              type="text"
              texto="Buscar Producto"
            />
          </div>
        </div>
        <CustomInput
          name="amountProduct"
          place="#"
          type="number"
          texto="Cantidad"
          min="1"
          max="999"
        />
        <button className="btn btn-primary btn-lg mt-2">Aceptar</button>
      </form>
    </div>
  );
}
