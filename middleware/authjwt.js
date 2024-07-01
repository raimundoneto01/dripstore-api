import { secret } from "../config/authoconfig";

const verifyToken = (req, res, next)=>{
  let token = req.headers["Authorization"];

  if(!token){
    return res.status(403).send({
      mensage: "token invalido ou não informado!"
    });
  }
  jwt.verify(token, 
    secret,
    (err, decoded) =>{
      if(err){
        return res.status(401).send({
          mensage: "Não Autorizado",
        });
      }
      req.userId = decoded.id;
      next();
    }
  );

}
const isAdmin = (req, res, next) => {
  Usuario.findByPk(req.userId).then(usuario => {
      usuario.getPerfils().then(perfis => {
          for (let i = 0; i < perfis.length; i++) {
              if (perfis[i].nome === "admin") {
                  next();
                  return;
              }
          }

          res.status(403).send({
              message: "Requer acesso de Administrador!"
          });
          return;
      });
  });
};
const isModerator = (req, res, next) => {
  Usuario.findByPk(req.userId).then(usuario => {
      usuario.getPerfils().then(perfis => {
          for (let i = 0; i < perfis.length; i++) {
              if (perfis[i].nome === "moderator") {
                  next();
                  return;
              }
          }

          res.status(403).send({
              message: "Requer acesso de Moderador!"
          });
      });
  });
};
const isModeratorOrAdmin = (req, res, next) => {
  Usuario.findByPk(req.userId).then(usuario => {
      usuario.getPerfils().then(perfis => {
          for (let i = 0; i < perfis.length; i++) {
              if (perfis[i].nome === "moderator") {
                  next();
                  return;
              }

              if (perfis[i].nome === "admin") {
                  next();
                  return;
              }
          }

          res.status(403).send({
              message: "Require Moderator or Admin Role!"
          });
      });
  });
};

export const authJwt = {
  verifyToken,
  isAdmin,
  isModerator,
  isModeratorOrAdmin
};
