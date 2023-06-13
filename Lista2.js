let Contacto = {
  init: function (id, nombres, apellidos, telefono, ciudad, direccion) {
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.telefono = telefono;
    this.ciudad = ciudad;
    this.direccion = direccion;
  },
  describe: function () {
    var descripcion =
      "Id: " +
      this.id +
      ", Nombres: " +
      this.nombres +
      ", Apellidos: " +
      this.apellidos +
      ", Teléfono: " +
      this.telefono +
      ", Ciudad: " +
      this.ciudad +
      ", Dirección: " +
      this.direccion;
    return descripcion;
  },
};

var listaDeContactos = [];

function agregarContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
  var nuevoContacto = Object.create(Contacto);
  nuevoContacto.init(id, nombres, apellidos, telefono, ciudad, direccion);
  listaDeContactos.push(nuevoContacto);
}

function editarContacto(id, nuevosDatos) {
  var contacto = listaDeContactos.find(function (contacto) {
    return contacto.id === id;
  });

  if (contacto) {
    Object.assign(contacto, nuevosDatos);
    console.log("Contacto editado exitosamente.");
  } else {
    console.log("No se encontró ningún contacto con el ID proporcionado.");
  }
}

// Como se usa.
agregarContacto(1, "Juan", "Pérez", "123456789", "Bogotá", "Calle 10 # 20-30");
agregarContacto(2, "María", "García", "987654321", "Medellín", "Carrera 15 # 25-40");

editarContacto(2, { telefono: "555555555", direccion: "Avenida 5 # 10-15" });

for (var i = 0; i < listaDeContactos.length; i++) {
  console.log(listaDeContactos[i].describe());
}
