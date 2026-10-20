
import { Component } from '@angular/core';

interface Curso {
  id: number;
  nome: string;
  descricao: string;
  cargaHoraria: number;
  situacao: 'Ativo' | 'Inativo';
}

@Component({
  selector: 'app-cursos',
  imports: [],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class Cursos {
  cursos: Curso[] = [
    {
      id: 1,
      nome: 'Análise e Desenvolvimento de Sistemas',
      descricao: 'Aprenda a desenvolver sistemas, aplicações web e soluções tecnológicas.',
      cargaHoraria: 2000,
      situacao: 'Ativo'
    },
    {
      id: 2,
      nome: 'Administração',
      descricao: 'Estude gestão empresarial, planejamento e organização de negócios.',
      cargaHoraria: 1800,
      situacao: 'Ativo'
    },
    {
      id: 3,
      nome: 'Redes de Computadores',
      descricao: 'Conheça redes, infraestrutura, conectividade e segurança de sistemas.',
      cargaHoraria: 1600,
      situacao: 'Inativo'
    },
    {
      id: 4,
      nome: 'Informática',
      descricao: 'Desenvolva conhecimentos em computadores, softwares e ferramentas digitais.',
      cargaHoraria: 1200,
      situacao: 'Ativo'
    }
  ];
}
