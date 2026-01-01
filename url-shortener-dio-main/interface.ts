interface IUsuario {
    id: String;
    email: String;
}

interface IAdmin extends IUsuario {
    cargo?: 'normal'|'supervisor' | 'gerente' | 'coordenador';
}
//o ? indica que o cargo é opcional
function redirecione(usuario: IUsuario | IAdmin) {
if('cargo' in usuario && usuario.cargo) {
    //redirecionar para a área de admin
}

//redirecionar para a área de usuário
}