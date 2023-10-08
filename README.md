# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Titulo 
    Trabajo Final React.
    
# Instalacion y uso
    Clonar el repositorio
    npm i (instala las dependencias)
    npm run dev (corre el programa)
    
# Estructura de Directorios:

    Componente APP: El componente principal de la aplicación envuelto por uno llamado "Route," que permite la navegación en React.

    NavBar: Encabezado de la página que contiene la barra de navegación entre diferentes categorías y el carrito de compras.

    ItemListContainers: Ruta que contiene otro componente llamado "ItemList," el cual muestra productos de la categoría correspondiente. Aquí puedes agregar productos o ver detalles.

    ItemDetail: Muestra los detalles de un producto seleccionado y permite agregar la cantidad deseada al carrito.

    ItemCount: Componente dentro de "ItemDetail" que gestiona la lógica de los botones para sumar o restar elementos y agregarlos al carrito.

    Order: Accediendo desde el NavBar dando click al carrito, order nos manda al componente OrderItem donde puedes ver la lista de elementos agregados. Al finalizar la compra, se mostrará un ticket de compra en el componente "Checkout."

    Checkout: En este componente se muestra el ticket de la compra finalizada

# Nota Adicional

   Gracias por la buena disposición. Es asombroso cómo el profesor se desenvolvió en clase y me agrada la exigencia de los tutores que nos ayudan a mejorar con su experiencia. Aunque por el momento no tengo la intención de dedicarme a la programación, ya que tengo un 
   trabajo estable como ISP, deseo aprender tanto como pueda sobre el front-end, tomar más cursos y especializarme en React con diversas bibliotecas que faciliten el trabajo. De esta manera, si en el futuro decido adentrarme en este mundo, estaré preparado. ¡Gracias 
   por todo!

   
# Dependencias
    "bootstrap": "^5.3.1",
    "firebase": "^10.3.1",
    "react": "^18.2.0",
    "react-bootstrap": "^2.8.0",
    "react-dom": "^18.2.0",
    "react-hot-toast": "^2.4.1", ---> nensaje que se muestra en la parte superior derecha al agregar un elemento al carrito 
    "sweetalert2": "^11.7.28"      ---> esta dependencia la uso para mostrar un mensaje al finalizar la compra, o en un error por no completar el formulario
