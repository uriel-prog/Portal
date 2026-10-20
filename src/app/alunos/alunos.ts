
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Aluno {
  nome: string;
  matricula: string;
  email: string;
  curso: string;
}

@Component({
  selector: 'app-alunos',
  imports: [FormsModule],
  templateUrl: './alunos.html',
  styleUrl: './alunos.css'
})
export class Alunos {
  cursos = [
    'Análise e Desenvolvimento de Sistemas',
    'Administração',
    'Informática',
    'Redes de Computadores'
  ];

  aluno: Aluno = this.novoAluno();

  alunos: Aluno[] = [];

  private novoAluno(): Aluno {
    return {
      nome: '',
      matricula: '',
      email: '',
      curso: ''
    };
  }

  cadastrarAluno(): void {
    const novo = {
      nome: this.aluno.nome.trim(),
      matricula: this.aluno.matricula.trim(),
      email: this.aluno.email.trim(),
      curso: this.aluno.curso
    };

    if (!novo.nome || !novo.matricula ||
        !novo.email || !novo.curso) {
      return;
    }

    const matriculaExiste = this.alunos.some(
      a => a.matricula === novo.matricula
    );

    if (matriculaExiste) {
      alert('Já existe um aluno com essa matrícula.');
      return;
    }

    this.alunos.push(novo);
    this.aluno = this.novoAluno();
  }

  excluirAluno(matricula: string): void {
    this.alunos = this.alunos.filter(
      aluno => aluno.matricula !== matricula
    );
  }
}
