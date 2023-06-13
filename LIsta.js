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
  
  var contacto1 = Object.create(Contacto);
  contacto1.init(1, "Juan", "Pérez", "123456789", "Bogotá", "Calle 10 # 20-30");
  
  var contacto2 = Object.create(Contacto);
  contacto2.init(2, "María", "García", "987654321", "Medellín", "Carrera 15 # 25-40");
  
  var listaDeContactos = [];
  listaDeContactos.push(contacto1);
  listaDeContactos.push(contacto2);
  
  // Ejemplo de uso
  console.log(contacto1.describe());
  console.log(contacto2.describe());
  