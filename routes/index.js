import routePerfil from "./perfilroutes.js";
import routeProduto from "./produtosroutes.js"
import routeUsuario from "./usuarioroutes.js";



export const routes=(app)=>{
  app.use('/api/produto', routeProduto);
  app.use('/api/usuario', routeUsuario);
  app.use('/api/perfil', routePerfil);
}