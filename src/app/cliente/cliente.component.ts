import { Component } from '@angular/core';
import { ClienteModel } from '../shared/cliente.model';
@Component({
    selector: 'app-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.css']
})

export class ClienteComponent {
    // username: string = '';
    // nome: string = '';
    // email: string = '';
    // novoNome: string = '';
    // novoEmail: string = '';

    // mostrarNomeEmail() {
    //     this.novoNome = this.nome;
    //     this.novoEmail = this.email;
    //     this.nome = '';
    //     this.email = '';
    // }


    // Atributo 
    // showmessage: boolean = false;

    // ngIf 
    // showMessage(){
    //     this.showmessage = true;
    // }

    // caloteiro: boolean = false;
    // mostrarStatus() {
    //     this.caloteiro = true;
    // }

    // nomes: string[] = ['André chupetinha','Rafael','João William'];
    // frutas: string[] = ['Moranguinho Rafael', 'Uva Macedo', 'Limão Mestre'];


    // Datas
    // clientes: ClientModel[] = [
    //     new ClientModel('Rafael','rafael3324@hotmail.com','81988336644',21),
    //     new ClientModel('Andersson','andersson@hotmail.com','81988993344',22)
    // ]
    clientes: ClienteModel[] = [
         new ClienteModel('André', 'andre@gmail.com', '9877865765', 19),
         new ClienteModel('Brutus', 'buruts@gmail.com', '67778765765', 67)
    ]
}