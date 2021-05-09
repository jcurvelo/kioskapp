import OptionSelectButton from './assets/OptionSelectButton';

export default function Home() {
  return (
    <div className="Home">
      <div className="opciones">
        <OptionSelectButton name="Venta" ruta="/venta" />
        <OptionSelectButton name="Compra" ruta="/compra" />
        <OptionSelectButton name="Inventario" ruta="/inventario" />
        <OptionSelectButton name="Estadística" ruta="/estadistica" />
        <OptionSelectButton name="Configuración" ruta="/config" />
      </div>
    </div>
  );
}
