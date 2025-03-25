personas = []

def registrar_persona():
    nombre = input("Nombre: ")
    apellido = input("Apellido: ")
    dni = input("DNI: ")
    telefonos = []
    
    while True:
        telefono = input("Ingrese un número de teléfono (o presione Enter para finalizar): ")
        if telefono:
            telefonos.append(telefono)
        else:
            break
    
    personas.append([nombre, apellido, dni, telefonos])

while True:
    registrar_persona()
    respuesta = input("¿Desea agregar otra persona? (si/no): ").strip().lower()
    if respuesta != "si":
        break

print("\nDatos ingresados:")
for persona in personas:
    print(persona)
