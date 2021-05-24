import OptionSelectButton from './assets/OptionSelectButton';

export default function Home() {
  return (
    <div className="Home">
      <div className="opciones">
        <OptionSelectButton register={true} name="Venta" ruta="/venta" />
        <OptionSelectButton cart={true} name="Compra" ruta="/compra" />
        <OptionSelectButton box={true} name="Inventario" ruta="/inventario" />
        <OptionSelectButton chart={true} name="Estadística" ruta="/estadistica" />
        <OptionSelectButton name="Configuración" ruta="/config" />
      </div>
    </div>
  );
}
