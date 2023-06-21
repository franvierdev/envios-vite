

export function Dia() {

  const dia = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  function CalcularDia() {

    var f = new Date();
    return <div className="mt-2">
      <h2 className="text-2xl font-semibold text-white text-shadow text-center" >{dia[f.getDay()]} {f.getDate()} de {meses[f.getMonth()]} del {f.getFullYear()}</h2>



    </div>


  }
  return CalcularDia()
}

